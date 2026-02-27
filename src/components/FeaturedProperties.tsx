import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import property1 from "@/assets/property-1.png";
import property2 from "@/assets/property-2.png";
import property3 from "@/assets/property-3.png";

const properties = [
  {
    id: 1,
    image: property1,
    title: "The Skyline Residences",
    location: "South Mumbai",
    type: "Apartment",
    price: "₹4.5 Cr",
  },
  {
    id: 2,
    image: property2,
    title: "Marina Bay Penthouse",
    location: "Bandra West",
    type: "Penthouse",
    price: "₹12 Cr",
  },
  {
    id: 3,
    image: property3,
    title: "Commerce Tower",
    location: "BKC",
    type: "Commercial",
    price: "₹8.2 Cr",
  },
];

const FeaturedProperties = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="text-center mb-16">
        <motion.p
          className="label-text text-accent mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Collection
        </motion.p>
        <motion.h2
          className="heading-lg text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Exclusive Properties
        </motion.h2>
        <motion.div
          className="gold-divider mt-6"
          initial={{ height: 0 }}
          animate={inView ? { height: 40 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

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
              <p className="label-text text-accent text-[10px] mb-2">{property.type}</p>
              <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                {property.title}
              </h3>
              <p className="text-sm font-light text-muted-foreground mb-3">
                {property.location}
              </p>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="font-serif text-lg text-foreground">{property.price}</span>
                <span className="label-text text-[10px] text-accent group-hover:tracking-[0.3em] transition-all duration-500">
                  View →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
      >
        <Link to="/properties" className="btn-primary">
          View All Properties
        </Link>
      </motion.div>
    </section>
  );
};

export default FeaturedProperties;
