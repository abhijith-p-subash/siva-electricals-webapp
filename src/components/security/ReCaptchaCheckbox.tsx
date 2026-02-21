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

