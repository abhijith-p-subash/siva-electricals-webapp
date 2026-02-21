import { useEffect, useRef } from "react";

type ReCaptchaCheckboxProps = {
  onTokenChange: (token: string | null) => void;
  resetCounter: number;
};

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

export function ReCaptchaCheckbox({
  onTokenChange,
  resetCounter,
}: ReCaptchaCheckboxProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

  useEffect(() => {
    let mounted = true;
    loadRecaptchaScript()
      .catch(() => undefined)
      .finally(() => {
        if (!mounted) {
          return;
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!siteKey || !containerRef.current) {
      return;
    }

    const renderWidget = () => {
      if (!window.grecaptcha || !containerRef.current || widgetIdRef.current !== null) {
        return;
      }

      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => onTokenChange(token),
        "expired-callback": () => onTokenChange(null),
        "error-callback": () => onTokenChange(null),
      });
    };

    renderWidget();
    const intervalId = window.setInterval(renderWidget, 300);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [siteKey, onTokenChange]);

  useEffect(() => {
    if (widgetIdRef.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetIdRef.current);
      onTokenChange(null);
    }
  }, [resetCounter, onTokenChange]);

  if (!siteKey) {
    return (
      <p className="text-sm text-destructive">
        Captcha is not configured. Set `VITE_RECAPTCHA_SITE_KEY`.
      </p>
    );
  }

  return <div ref={containerRef} className="overflow-hidden" />;
}

let recaptchaScriptPromise: Promise<void> | null = null;

function loadRecaptchaScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.grecaptcha) {
    return Promise.resolve();
  }

  if (recaptchaScriptPromise) {
    return recaptchaScriptPromise;
  }

  recaptchaScriptPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src*="google.com/recaptcha/api.js"]',
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Failed to load reCAPTCHA")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
    document.head.appendChild(script);
  });

  return recaptchaScriptPromise;
}
