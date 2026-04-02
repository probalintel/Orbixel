import { Mail, Phone } from "lucide-react";
import { EMAIL, PHONE1, PHONE2 } from "./constants";

export function Footer() {
  return (
    <footer className="py-16" style={{ background: "oklch(0.1 0.015 240)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.62 0.18 45)" }}>
                <span className="font-bold text-sm text-white">O</span>
              </div>
              <span className="font-bold text-lg" style={{ color: "oklch(0.97 0.005 80)" }}>Orbixel</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.6 0.01 80)" }}>
              We design. You grow. Premium websites at affordable prices for businesses that mean business.
            </p>
            <div className="space-y-2">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color: "oklch(0.6 0.01 80)" }}>
                <Mail size={14} style={{ color: "oklch(0.62 0.18 45)" }} />
                {EMAIL}
              </a>
              <a href={`tel:${PHONE1}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color: "oklch(0.6 0.01 80)" }}>
                <Phone size={14} style={{ color: "oklch(0.62 0.18 45)" }} />
                {PHONE1}
              </a>
              <a href={`tel:${PHONE2}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color: "oklch(0.6 0.01 80)" }}>
                <Phone size={14} style={{ color: "oklch(0.62 0.18 45)" }} />
                {PHONE2}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ color: "oklch(0.97 0.005 80)" }}>Services</h4>
            <ul className="space-y-2.5">
              {["Business Websites", "E-Commerce Stores", "Landing Pages", "UI/UX Design", "SEO Optimization"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-colors" style={{ color: "oklch(0.6 0.01 80)" }}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ color: "oklch(0.97 0.005 80)" }}>Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "#about" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm transition-colors" style={{ color: "oklch(0.6 0.01 80)" }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "oklch(1 0 0 / 0.08)" }}>
          <p className="text-xs" style={{ color: "oklch(0.45 0.01 80)" }}>
            © {new Date().getFullYear()} Orbixel. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.45 0.01 80)" }}>
            We design. You grow.
          </p>
        </div>
      </div>
    </footer>
  );
}
