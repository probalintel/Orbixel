import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Portfolio() {
  const projects = [
    {
      title: "Cozy Corner Cafe",
      category: "Cafe",
      desc: "Modern cafe website with online menu, gallery, and reservation system.",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
      tags: ["Responsive", "Menu", "Booking"],
    },
    {
      title: "Fresh Bites Deli",
      category: "Restaurant",
      desc: "Restaurant website with location, hours, online ordering, and customer reviews.",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      tags: ["Online Order", "SEO", "Mobile"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Portfolio</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-center mb-4">
          See Our Work
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Real websites we've built for businesses just like yours
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2"
                    style={{ background: "oklch(0.62 0.18 45)", color: "white" }}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <ExternalLink size={14} />
                    Get Similar
                  </Button>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "oklch(0.62 0.18 45)" }}>
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-xs border border-border text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
