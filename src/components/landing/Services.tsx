import { motion } from "framer-motion";
import { Globe, ShoppingCart, Smartphone, Zap, Search, BarChart3 } from "lucide-react";

export function Services() {
  const services = [
    { icon: Globe, title: "Business Website Design", desc: "Modern, mobile-friendly websites tailored for your business that establish credibility and drive leads." },
    { icon: ShoppingCart, title: "E-Commerce Stores", desc: "Fully functional online stores with payment integration, inventory management, and order tracking." },
    { icon: Smartphone, title: "Landing Pages", desc: "High-converting single-page designs built to capture leads and maximize your ad spend ROI." },
    { icon: Zap, title: "Fast Delivery", desc: "Get your website up and running in days, not weeks. We move fast without cutting corners." },
    { icon: Search, title: "SEO Optimization", desc: "On-page and technical SEO to help your website rank higher and attract organic traffic." },
    { icon: BarChart3, title: "Website Redesign", desc: "Transform your outdated website into a modern, fast, and conversion-optimized digital experience." },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Services</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What We Offer
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Everything you need to establish a professional online presence
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
