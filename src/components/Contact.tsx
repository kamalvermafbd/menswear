import { useState } from "react";
import { Phone, MessageCircle, MapPin, User, Send } from "lucide-react";
import { PHONE_DISPLAY, WHATSAPP_NUMBER, LOCATION, OWNER_NAME, waLink } from "@/lib/contact";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone number.");
      return;
    }
    const msg = `Hi ,\n\nName: ${form.name}\nPhone: ${form.phone}\n\nInquiry: ${form.message || "Wholesale catalogue request"}`;
    window.open(waLink(msg), "_blank");
    toast.success("Opening WhatsApp — your message is ready!");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">— Get in Touch</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
              Let's start your <br />
              <span className="text-gold-gradient italic">wholesale</span> journey.
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Reach out for catalogues, bulk pricing, custom combos or partnership inquiries.
              We respond within minutes during business hours.
            </p>

            <div className="space-y-6">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center gap-5 p-5 border border-border hover:border-primary/60 transition-all duration-500 group rounded-sm hover:bg-card"
              >
                <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Call Us</div>
                  <div className="font-display text-xl font-semibold">{PHONE_DISPLAY}</div>
                </div>
              </a>

              <a
                href={waLink("Hi, I'd like to know more about your wholesale collection.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 border border-border hover:border-primary/60 transition-all duration-500 group rounded-sm hover:bg-card"
              >
                <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">WhatsApp</div>
                  <div className="font-display text-xl font-semibold">{PHONE_DISPLAY}</div>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 border border-border rounded-sm">
                <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Location</div>
                  <div className="font-display text-xl font-semibold">{LOCATION}</div>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 border border-border rounded-sm">
                <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <User size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Owner</div>
                  <div className="font-display text-xl font-semibold">{OWNER_NAME}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="border border-border bg-card/60 backdrop-blur-sm p-8 md:p-10 rounded-sm">
              <h3 className="font-display text-2xl font-semibold mb-2">Send Inquiry</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Fill the form — we'll respond on WhatsApp instantly.
              </p>

              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g. Rahul Mehta"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                    placeholder="+91 90000 00000"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                    Inquiry
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us what you're looking for — categories, quantities, target city…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-gold text-primary-foreground rounded-sm font-semibold text-sm uppercase tracking-[0.18em] shadow-gold hover:shadow-glow transition-all duration-500 hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  Send Inquiry via WhatsApp
                </button>
              </form>
            </div>
            <div className="absolute -inset-4 bg-gradient-gold-soft blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
