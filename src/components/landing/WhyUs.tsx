import { motion } from "framer-motion";
import { Shield, Zap, Smartphone, TrendingUp, Clock, Users } from "lucide-react";

export function WhyUs() {
  const reasons = [
    { icon: Shield, title: "Budget-Friendly Solutions", desc: "Quality websites without breaking the bank. Transparent pricing, no hidden costs." },
    { icon: Zap, title: "Quick Turnaround Time", desc: "Launch your website in days, not months. We work fast and efficiently." },
    { icon: Smartphone, title: "Mobile-Optimized Design", desc: "Perfect on every device, every time. Responsive design is our standard." },
    { icon: TrendingUp, title: "Designed to Attract Customers", desc: "Built for conversions, not just aesthetics. Every element drives action." },
    { icon: Clock, title: "Simple & Hassle-Free Process", desc: "No technical headache — we handle everything from design to launch." },
    { icon: Users, title: "Professional Support", desc: "We're here to help every step of the way, even after your site goes live." },
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Choose Us</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Why Choose Orbixel?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          We combine affordability, speed, and quality to help your business thrive online
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "oklch(0.62 0.18 45 / 0.1)" }}>
                <r.icon size={20} style={{ color: "oklch(0.62 0.18 45)" }} />
              </div>
              <h3 className="font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
