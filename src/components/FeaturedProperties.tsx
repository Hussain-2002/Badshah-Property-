import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import property1 from "@/assets/property-1.png";
import property2 from "@/assets/property-2.png";
import property3 from "@/assets/property-3.png";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Residential Properties",
    description:
      "Apartments, villas, and independent houses in prime locations across Ujjain.",
  },
  {
    id: 2,
    image: property2,
    title: "Commercial Properties",
    description:
      "Shops, office spaces, and commercial buildings for business and investment.",
  },
  {
    id: 3,
    image: property3,
    title: "Plots & Land",
    description:
      "Residential and commercial plots for long-term investment and development.",
  },
];

const FeaturedProperties = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.p
          className="label-text text-accent mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Expertise
        </motion.p>

        <motion.h2
          className="heading-lg text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Properties We Deal In
        </motion.h2>

        <motion.div
          className="gold-divider mt-6"
          initial={{ height: 0 }}
          animate={inView ? { height: 40 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

      {/* Property Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {properties.map((property, i) => (
          <motion.div
            key={property.id}
            className="property-card group bg-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
          >
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={property.image}
                alt={property.title}
                className="property-image w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">
                {property.title}
              </h3>

              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {property.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
