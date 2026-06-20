import { Award, Users, Target, Heart, CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from "@/constants/seo";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaBand } from "@/components/sections/CtaBand";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for precision in every connection, joint, and finish we deliver.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "Honest pricing, transparent communication, and no surprises on the bill.",
  },
  {
    icon: Users,
    title: "Customer first",
    description:
      "Your safety and satisfaction drive every decision we make on site.",
  },
  {
    icon: Heart,
    title: "Safety",
    description:
      "Uncompromising safety standards for our team and your property alike.",
  },
];

const highlights = [
  "Certified, experienced technicians",
  "Residential, commercial & industrial work",
  "Transparent, itemised estimates",
  "Quality materials and clean finishing",
];

export function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Seo
        title="About Us — Trusted Electricians & Plumbers in Idukki"
        description="Siva Electricals Constructions is a trusted local electrical & plumbing contractor in Adimali, Idukki, Kerala. Certified technicians, 15+ years of experience, and a safety-first commitment to homes and businesses."
        path="/about"
        schema={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="About us"
        title="Powering Idukki with safety & integrity"
        description="A trusted local name for electrical and plumbing work — dedicated to doing the job right the first time."
      />

      <StatsBand />

      {/* Story */}
      <section className="section-y container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Built on trust, grown through quality
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                Siva Electricals Constructions began with a simple goal: provide
                reliable, high-quality electrical and plumbing services that
                local families and businesses could depend on.
              </p>
              <p>
                What started as a small team of passionate technicians has grown
                to handle everything from single-room repairs to large
                commercial projects — without ever losing the personal touch
                that built our reputation.
              </p>
              <p>
                Our commitment to safety, continuous training, and customer
                satisfaction is what sets us apart. We believe in getting the
                job done right, the first time.
              </p>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/15 to-accent/15 blur-lg" />
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
              alt="Siva Electricals team at work"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-card ring-1 ring-border"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-muted/50">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Our core values
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-soft"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <value.icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
