import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative py-16 text-center md:py-20">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
