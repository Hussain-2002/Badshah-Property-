import { Link } from "react-router-dom";
import { whatsappUrl } from "./WhatsAppButton";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="px-6 md:px-12 lg:px-24 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl tracking-[0.15em] mb-2">
              BADSHAH
            </h3>
            <p className="text-[10px] tracking-[0.25em] text-primary-foreground/50 mb-4">
              PROPERTY ADVISOR
            </p>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Redefining real estate excellence with trusted advisory,
              luxury property consulting, and strategic investment solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-primary-foreground/80 mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-primary-foreground/80 mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <p>info@badshahproperty.in</p>
              <p>+91 98260 44152</p>
              <p>Freeganj Gurduwara, Ujjain, India</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors duration-300 mt-2"
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Badshah Property Advisor. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-primary-foreground/40 cursor-pointer hover:text-primary-foreground transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-primary-foreground/40 cursor-pointer hover:text-primary-foreground transition-colors">
              Terms of Service
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;