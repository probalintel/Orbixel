import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { X, MessageCircle, Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).slice(2)}`);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Hi! I'm Orbixel's assistant. How can I help you today? Ask me about our services, pricing, or anything else!" },
  ]);
  const chatAction = useAction(api.chatbot.chat);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);
    try {
      const history = messages.slice(1);
      const reply = await chatAction({ sessionId, message: userMsg, history });
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I'm having trouble right now. Please email us at Orbixel@gmail.com or call 8910040655." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        style={{ background: "oklch(0.62 0.18 45)" }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} color="white" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={22} color="white" />
            </motion.div>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white animate-pulse" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden border"
            style={{ background: "oklch(0.99 0.002 240)", borderColor: "oklch(0.9 0.005 240)" }}
          >
            <div className="px-4 py-3 flex items-center gap-3" style={{ background: "oklch(0.13 0.02 240)" }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "oklch(0.62 0.18 45)" }}>
                <Bot size={18} color="white" />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "oklch(0.97 0.005 80)" }}>Orbixel Assistant</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs" style={{ color: "oklch(0.65 0.01 80)" }}>Online</span>
                </div>
              </div>
            </div>

            <div className="h-72 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed"
                    style={
                      m.role === "user"
                        ? { background: "oklch(0.62 0.18 45)", color: "white", borderBottomRightRadius: "4px" }
                        : { background: "oklch(0.96 0.005 240)", color: "oklch(0.12 0.02 240)", borderBottomLeftRadius: "4px" }
                    }
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-2xl text-sm" style={{ background: "oklch(0.96 0.005 240)", borderBottomLeftRadius: "4px" }}>
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="p-3 border-t flex gap-2" style={{ borderColor: "oklch(0.9 0.005 240)" }}>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 text-sm"
                disabled={loading}
              />
              <Button
                size="sm"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                style={{ background: "oklch(0.62 0.18 45)", color: "white" }}
              >
                <Send size={14} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
