const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
const REQUEST_TIMEOUT_MS = 10000;
const MIN_SUBMISSION_INTERVAL_MS = 15000;

type EmailTemplateParams = Record<string, string>;

export type ContactEmailPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type QuoteEmailPayload = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  location: string;
  preferredDate?: string;
  description: string;
};

function requiredEnv(key: string): string {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

function enforceRateLimit(kind: "contact" | "quote"): void {
  if (typeof window === "undefined") {
    return;
  }

  const storageKey = `siva:last-submit:${kind}`;
  const now = Date.now();
  const last = Number(window.sessionStorage.getItem(storageKey) || "0");

  if (now - last < MIN_SUBMISSION_INTERVAL_MS) {
    throw new Error("Please wait before sending another request.");
  }

  window.sessionStorage.setItem(storageKey, String(now));
}

async function sendTemplateEmail(
  templateId: string,
  params: EmailTemplateParams,
): Promise<void> {
  const serviceId = requiredEnv("VITE_EMAILJS_SERVICE_ID");
  const publicKey = requiredEnv("VITE_EMAILJS_PUBLIC_KEY");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    signal: controller.signal,
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: params,
    }),
  });
  clearTimeout(timeout);

  if (!response.ok) {
    throw new Error("Email service rejected the request.");
  }
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
  enforceRateLimit("contact");
  const templateId = requiredEnv("VITE_EMAILJS_CONTACT_TEMPLATE_ID");

  await sendTemplateEmail(templateId, {
    from_name: payload.name,
    from_email: payload.email,
    phone: payload.phone,
    message: payload.message,
    form_type: "Contact",
  });
}

export async function sendQuoteEmail(payload: QuoteEmailPayload): Promise<void> {
  enforceRateLimit("quote");
  const templateId = requiredEnv("VITE_EMAILJS_QUOTE_TEMPLATE_ID");

  await sendTemplateEmail(templateId, {
    from_name: payload.name,
    from_email: payload.email,
    phone: payload.phone,
    service_type: payload.serviceType,
    location: payload.location,
    preferred_date: payload.preferredDate || "Not specified",
    message: payload.description,
    form_type: "Quote",
  });
}
