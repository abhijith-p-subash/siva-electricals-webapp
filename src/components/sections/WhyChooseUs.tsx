import { CheckCircle2, Clock, Shield, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully certified professionals ensuring your project is handled safely and legally.",
  },
  {
    icon: Clock,
    title: "Timely Completion",
    description:
      "We respect your time and deadlines, delivering quality work on schedule.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We stand by our work. Your satisfaction is our top priority.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Materials",
    description:
      "Using only the best materials for durable and long-lasting results.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-secondary/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop"
              alt="Electrician working"
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Why Choose Siva Electricals?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We bring expertise, reliability, and a commitment to excellence to
              every project, big or small.
            </p>

            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <reason.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
