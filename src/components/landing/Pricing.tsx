import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹1,999",
      desc: "Perfect for landing pages and simple business sites",
      features: ["1-page website", "Mobile responsive", "Contact form", "Basic SEO", "3-day delivery", "1 revision"],
      popular: false,
    },
    {
      name: "Business",
      price: "₹4,999",
      desc: "Ideal for growing businesses that need a full website",
      features: ["Up to 5 pages", "Mobile responsive", "Contact form + WhatsApp", "SEO optimized", "5-day delivery", "3 revisions", "Google Maps integration", "Social media links"],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Pricing</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          No hidden fees. No surprises. Just great websites at honest prices.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 border transition-all duration-300 ${plan.popular ? "shadow-2xl scale-105" : "hover:shadow-lg"}`}
              style={plan.popular ? { background: "oklch(0.13 0.02 240)", borderColor: "oklch(0.62 0.18 45 / 0.5)" } : { background: "oklch(1 0 0)", borderColor: "oklch(0.9 0.005 240)" }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: "oklch(0.62 0.18 45)" }}>
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-1" style={{ color: plan.popular ? "oklch(0.97 0.005 80)" : undefined }}>{plan.name}</h3>
                <p className="text-xs mb-3" style={{ color: plan.popular ? "oklch(0.65 0.01 80)" : undefined }}>{plan.desc}</p>
                <div className="text-3xl font-bold" style={{ color: plan.popular ? "oklch(0.78 0.15 45)" : "oklch(0.62 0.18 45)" }}>{plan.price}</div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: plan.popular ? "oklch(0.75 0.01 80)" : undefined }}>
                    <CheckCircle2 size={14} style={{ color: "oklch(0.62 0.18 45)", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full gap-2"
                style={plan.popular ? { background: "oklch(0.62 0.18 45)", color: "white" } : {}}
                variant={plan.popular ? "default" : "outline"}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
                <ArrowRight size={14} />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
