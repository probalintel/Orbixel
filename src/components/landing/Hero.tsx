import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "./constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "oklch(0.13 0.02 240)" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.9 0 0) 1px, transparent 0)`,
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, oklch(0.62 0.18 45), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5" style={{ background: "radial-gradient(circle, oklch(0.62 0.18 45), transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8 text-xs font-medium"
          style={{ borderColor: "oklch(0.62 0.18 45 / 0.4)", background: "oklch(0.62 0.18 45 / 0.1)", color: "oklch(0.78 0.15 45)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Limited slots available this month
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
              style={{ color: "oklch(0.97 0.005 80)" }}
            >
              Get More Customers With a{" "}
              <span style={{ color: "oklch(0.78 0.15 45)" }}>Professional Website</span>
              {" "}— Without Spending Big
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "oklch(0.7 0.01 80)" }}
            >
              Orbixel creates affordable, high-converting websites for businesses in just a few days. We design. You grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <Button
                size="lg"
                className="px-8 gap-2"
                style={{ background: "oklch(0.62 0.18 45)", color: "white" }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Your Website Now
                <ArrowRight size={16} />
              </Button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 w-full sm:w-auto"
                  style={{ borderColor: "oklch(0.62 0.18 45 / 0.5)", color: "oklch(0.78 0.15 45)", background: "transparent" }}
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              {["Affordable pricing", "Fast delivery", "Designed to bring customers"].map((b) => (
                <div key={b} className="flex items-center gap-2" style={{ color: "oklch(0.65 0.01 80)" }}>
                  <CheckCircle2 size={14} style={{ color: "oklch(0.62 0.18 45)" }} />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: "oklch(1 0 0 / 0.1)" }}>
                <img
                  src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=500&fit=crop"
                  alt="Website Demo"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 rounded-2xl overflow-hidden shadow-2xl border-2" style={{ borderColor: "oklch(0.62 0.18 45)" }}>
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=600&fit=crop"
                  alt="Mobile Website Demo"
                  className="w-full object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 shadow-xl text-center"
                style={{ background: "oklch(0.62 0.18 45)" }}
              >
                <div className="text-2xl font-bold text-white">3-5</div>
                <div className="text-xs font-medium text-white/80">Days Delivery</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
