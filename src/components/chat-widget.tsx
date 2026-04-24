import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Msg { role: "agent" | "user"; text: string }

const AGENT_NAME = "Zack Burg";
const INITIAL: Msg[] = [
  {
    role: "agent",
    text: `Hey, I'm ${AGENT_NAME} from Nexora Studio 👋  How can I help you grow today?`,
  },
];

function reply(input: string): string {
  const t = input.toLowerCase();
  if (/(price|cost|quote|budget)/.test(t))
    return "Pricing depends on scope — most projects start around $3k. Share your goals on the Contact page and I'll route you to a senior strategist for an exact quote.";
  if (/(web|website|site|design|develop)/.test(t))
    return "We build on WordPress, React, Next.js, Shopify and Webflow — performance-first and conversion-focused. Want me to share examples from our portfolio?";
  if (/(ad|paid|meta|google|ppc|lead)/.test(t))
    return "Our paid media team runs Meta, Google and LinkedIn campaigns with full-funnel tracking. Average client sees ~30% lower CPL within 60 days.";
  if (/(social|content|video|reel|brand)/.test(t))
    return "Creative & social is one of our 3 core services — UI/UX, branding, social posts and short-form video. I can connect you with our design lead.";
  if (/(contact|call|book|consult|talk|email|phone)/.test(t))
    return "Awesome — head to the Contact page and pick a time, or email info@nexorastudio.com. We reply within one business day.";
  if (/(hi|hello|hey|hola)/.test(t))
    return "Hi there! Tell me a bit about your project — website, paid media, or creative — and I'll point you in the right direction.";
  return "Got it. Could you share a bit more about your project? Or jump to the Contact page and a strategist will reach out within 24h.";
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "agent", text: reply(text) }]);
    }, 600);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        aria-label="Open chat with Zack Burg"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-hero text-primary-foreground shadow-elegant transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[480px] w-[360px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-elegant animate-fade-in">
          {/* Header */}
          <div className="flex items-center gap-3 gradient-hero px-4 py-3 text-primary-foreground">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-base font-bold">ZB</div>
            <div className="flex-1">
              <div className="text-sm font-semibold">{AGENT_NAME}</div>
              <div className="flex items-center gap-1.5 text-xs opacity-90">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Online · usually replies instantly
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-md p-1 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-muted/30 p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${
                    m.role === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-card text-foreground border border-border"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={send} className="flex items-center gap-2 border-t border-border bg-background p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 rounded-full border border-border bg-muted/30 px-4 py-2 text-sm outline-none transition-colors focus:border-primary"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-9 w-9 items-center justify-center rounded-full gradient-hero text-primary-foreground shadow-elegant transition-opacity hover:opacity-90"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}