const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

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

async function sendTemplateEmail(
  templateId: string,
  params: EmailTemplateParams,
): Promise<void> {
  const serviceId = requiredEnv("VITE_EMAILJS_SERVICE_ID");
  const publicKey = requiredEnv("VITE_EMAILJS_PUBLIC_KEY");

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: params,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(errorBody || "EmailJS request failed");
  }
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
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
