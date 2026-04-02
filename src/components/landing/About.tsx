import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">About Us</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-center mb-16">
          We Help Businesses Grow Online
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "The Problem", desc: "Many businesses lose customers because they don't have a proper online presence. Customers search online first — if you're not there, you lose them.", color: "oklch(0.577 0.245 27.325)" },
            { title: "Our Solution", desc: "We make it simple and affordable to get a professional website that actually works — built fast, optimized for conversions, and tailored to your brand.", color: "oklch(0.62 0.18 45)" },
            { title: "Our Mission", desc: "Empower every business with a professional online presence they can afford. We design. You grow.", color: "oklch(0.6 0.118 184.704)" },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300">
              <div className="w-1 h-8 rounded-full mb-4" style={{ background: item.color }} />
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
