import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { whatsappUrl } from "@/components/WhatsAppButton";
import property1 from "@/assets/property-1.png";
import property2 from "@/assets/property-2.png";
import property3 from "@/assets/property-3.png";

const propertyTypes = [
  {
    id: 1,
    image: property1,
    title: "Residential Properties",
    description:
      "We deal in residential plots, independent houses, villas, and premium apartments across Ujjain. Whether buying or selling, we ensure transparent and smooth transactions.",
  },
  {
    id: 2,
    image: property2,
    title: "Commercial Properties",
    description:
      "Expert advisory for shops, showrooms, office spaces, and commercial buildings in prime Ujjain locations with high return potential.",
  },
  {
    id: 3,
    image: property3,
    title: "Plots & Land Investment",
    description:
      "Verified residential and commercial plots in developing areas of Ujjain suitable for long-term investment and construction projects.",
  },
];

const Properties = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <main>
      <SEOHead
        title="Property Types We Deal In – Ujjain"
        description="Badshah Property Advisor deals in residential, commercial properties and land investment opportunities in Ujjain. Trusted real estate consultant for buying and selling property."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding bg-primary text-center">
        <motion.h1
          className="heading-xl text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Property Types We <span className="italic text-primary-foreground/70">Deal In</span>
        </motion.h1>

        <p className="mt-6 text-primary-foreground/60 max-w-2xl mx-auto text-sm">
          As a trusted real estate consultant in Ujjain, we specialize in residential,
          commercial and land transactions with complete transparency and professional guidance.
        </p>
      </section>

      {/* Property Types Grid */}
      <section className="section-padding bg-background" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {propertyTypes.map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-card overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.2em] border-b border-foreground pb-1 hover:tracking-[0.3em] transition-all duration-300"
                >
                  Enquire Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Properties;