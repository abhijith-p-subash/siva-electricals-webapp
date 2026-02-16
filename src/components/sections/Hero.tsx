import { ArrowRight, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
          alt="Electrical work background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <Star size={14} className="fill-blue-400" />
            <span>#1 Rated Electrical & Plumbing Contractor</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Powering Your World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              With Precision & Care
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
          >
            From residential wiring to industrial plumbing, we deliver certified
            expertise, unmatched safety, and 24/7 reliability for all your
            construction needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link to="/quote">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base bg-transparent border-slate-700 text-white hover:bg-slate-800 hover:text-white"
              asChild
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex items-center gap-8 text-slate-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <Shield className="text-blue-400" size={18} />
              <span>Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-yellow-400" size={18} />
              <span>24/7 Emergency Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
