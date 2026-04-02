import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "./constants";

export function CTABanner() {
  return (
    <section className="py-20" style={{ background: "oklch(0.13 0.02 240)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 text-xs font-medium" style={{ borderColor: "oklch(0.62 0.18 45 / 0.4)", background: "oklch(0.62 0.18 45 / 0.1)", color: "oklch(0.78 0.15 45)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Limited slots available this month
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "oklch(0.97 0.005 80)" }}>
          Ready to Grow Your Business Online?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="mb-8 max-w-xl mx-auto" style={{ color: "oklch(0.65 0.01 80)" }}>
          Join hundreds of businesses that have already transformed their online presence. Get started today!
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="px-8 gap-2" style={{ background: "oklch(0.62 0.18 45)", color: "white" }} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get Started Now
            <ArrowRight size={16} />
          </Button>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" style={{ borderColor: "oklch(0.62 0.18 45 / 0.5)", color: "oklch(0.78 0.15 45)", background: "transparent" }}>
              <MessageCircle size={16} />
              Chat on WhatsApp
            </Button>
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-8 mt-10">
          {["3-5 Days Delivery", "Affordable Pricing", "Professional Support"].map((item) => (
            <div key={item} className="flex items-center gap-2" style={{ color: "oklch(0.65 0.01 80)" }}>
              <CheckCircle2 size={14} style={{ color: "oklch(0.62 0.18 45)" }} />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
