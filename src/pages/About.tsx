import { Award, Users, Target, Heart } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-muted/30 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Siva Electricals
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dedicated to powering homes and businesses with safety, integrity,
            and excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                Founded with a vision to provide reliable and high-quality
                electrical and plumbing services, Siva Electricals Constructions
                has grown into a trusted name in the industry.
              </p>
              <p className="mb-4">
                We started as a small team of passionate technicians and have
                expanded to handle large-scale commercial and industrial
                projects, without losing our personal touch for residential
                clients.
              </p>
              <p>
                Our commitment to safety, continuous training, and customer
                satisfaction sets us apart. We believe in getting the job done
                right the first time.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
              alt="Team working"
              className="rounded-2xl shadow-xl w-full object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/40 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-primary-foreground/5 rounded-xl backdrop-blur-sm">
              <Target size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-primary-foreground/70">
                We strive for perfection in every connection and pipe we
                install.
              </p>
            </div>
            <div className="p-6 bg-primary-foreground/5 rounded-xl backdrop-blur-sm">
              <Award size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-primary-foreground/70">
                Honest pricing, transparent communication, and ethical
                practices.
              </p>
            </div>
            <div className="p-6 bg-primary-foreground/5 rounded-xl backdrop-blur-sm">
              <Users size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-primary-foreground/70">
                Your safety and satisfaction are the driving forces behind our
                work.
              </p>
            </div>
            <div className="p-6 bg-primary-foreground/5 rounded-xl backdrop-blur-sm">
              <Heart size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Safety</h3>
              <p className="text-primary-foreground/70">
                Uncompromising safety standards for our team and your property.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
