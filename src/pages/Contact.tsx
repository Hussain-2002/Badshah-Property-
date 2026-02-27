import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { whatsappUrl } from "@/components/WhatsAppButton";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main>
      <SEOHead title="Contact Us" description="Get in touch with Badshah Property Advisor for premium real estate consultation in Mumbai." />
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p className="label-text text-primary-foreground/50 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Get In Touch
          </motion.p>
          <motion.h1 className="heading-xl text-primary-foreground" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            Let's <span className="text-primary-foreground/70 italic">Connect</span>
          </motion.h1>
        </div>
      </section>

      <section className="section-padding bg-background" ref={ref}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-px h-12 bg-foreground" />
              <p className="label-text text-foreground">Contact Information</p>
            </div>
            <h2 className="heading-md text-foreground mb-6">
              We'd Love to Hear From You
            </h2>
            <p className="body-text mb-10">
              Whether you're looking to buy, sell, or invest, our team is ready to provide
              you with expert guidance tailored to your needs.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Office Address</p>
                  <p className="text-sm text-muted-foreground font-light">Freeganj Gurduwara, Ujjain, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground font-light">+91 98260 44152</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground font-light">info@badshahproperty.in</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex items-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "email", label: "Email Address", type: "email" },
                { key: "phone", label: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.key} className="relative">
                  <input
                    type={field.type}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="peer w-full bg-transparent border-b border-border py-3 text-sm text-foreground font-light outline-none transition-colors duration-300 focus:border-foreground placeholder-transparent"
                    placeholder={field.label}
                  />
                  <label className="absolute left-0 top-3 text-sm text-muted-foreground font-light transition-all duration-300 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-foreground peer-focus:uppercase peer-focus:tracking-[0.15em] peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.15em]">
                    {field.label}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="peer w-full bg-transparent border-b border-border py-3 text-sm text-foreground font-light outline-none transition-colors duration-300 focus:border-foreground placeholder-transparent resize-none"
                  placeholder="Your Message"
                />
                <label className="absolute left-0 top-3 text-sm text-muted-foreground font-light transition-all duration-300 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-foreground peer-focus:uppercase peer-focus:tracking-[0.15em] peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.15em]">
                  Your Message
                </label>
              </div>

              <button type="submit" className="btn-primary mt-4 self-start">
                Send Message
              </button>

              {submitted && (
                <motion.p
                  className="text-sm text-foreground font-light"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for reaching out. We'll be in touch soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
