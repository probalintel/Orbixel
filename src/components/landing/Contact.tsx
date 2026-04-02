import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL, PHONE1, PHONE2, WHATSAPP_URL } from "./constants";

export function Contact() {
  const submitContact = useMutation(api.contact.submitContact);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await submitContact({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        service: form.service || undefined,
        message: form.message,
      });
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Contact Us</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Let's Get Started
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Ready to take your business online? Get in touch and we'll create the perfect website for you.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="font-bold text-xl mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have questions? We're here to help! Reach out through any of these channels and we'll respond within 24 hours.
            </p>
            <div className="space-y-5">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "oklch(0.62 0.18 45 / 0.1)" }}>
                  <Mail size={18} style={{ color: "oklch(0.62 0.18 45)" }} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                  <div className="font-medium text-sm group-hover:text-primary transition-colors">{EMAIL}</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "oklch(0.62 0.18 45 / 0.1)" }}>
                  <Phone size={18} style={{ color: "oklch(0.62 0.18 45)" }} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Phone</div>
                  <a href={`tel:${PHONE1}`} className="font-medium text-sm hover:text-primary transition-colors block">{PHONE1}</a>
                  <a href={`tel:${PHONE2}`} className="font-medium text-sm hover:text-primary transition-colors block">{PHONE2}</a>
                </div>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "oklch(0.62 0.18 45 / 0.1)" }}>
                  <MessageCircle size={18} style={{ color: "oklch(0.62 0.18 45)" }} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">WhatsApp</div>
                  <div className="font-medium text-sm group-hover:text-primary transition-colors">Chat with us instantly</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Your Name *</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" required />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email Address *</label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" required />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone Number</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Business Type</label>
                <Input value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} placeholder="e.g. Restaurant, Boutique, Salon..." />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Your Message *</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your business and what you need..." rows={4} required />
              </div>
              <Button type="submit" className="w-full gap-2" size="lg" disabled={submitting} style={{ background: "oklch(0.62 0.18 45)", color: "white" }}>
                {submitting ? "Sending..." : "Send Message"}
                {!submitting && <Send size={16} />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
