import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropertyModal from "@/components/PropertyModal";
import SEOHead from "@/components/SEOHead";
import property1 from "@/assets/property-1.png";
import property2 from "@/assets/property-2.png";
import property3 from "@/assets/property-3.png";
import property4 from "@/assets/property-4.png";

const categories = ["All", "Apartments", "Commercial", "Plots", "Residential", "Office Space"];

const allProperties = [
  {
    id: 1, image: property1, title: "The Skyline Residences", location: "South Mumbai",
    type: "Apartments", price: "₹4.5 Cr", beds: 3, baths: 3, sqft: "2,400 sq ft",
    description: "An exquisite apartment offering panoramic city views with premium marble flooring and contemporary interiors."
  },
  {
    id: 2, image: property2, title: "Marina Bay Penthouse", location: "Bandra West",
    type: "Residential", price: "₹12 Cr", beds: 5, baths: 4, sqft: "5,200 sq ft",
    description: "A sprawling penthouse with ocean views, private terrace, and world-class amenities."
  },
  {
    id: 3, image: property3, title: "Commerce Tower", location: "BKC",
    type: "Commercial", price: "₹8.2 Cr", beds: undefined, baths: undefined, sqft: "3,800 sq ft",
    description: "Grade A commercial space in Mumbai's premier business district with state-of-the-art facilities."
  },
  {
    id: 4, image: property4, title: "Palm Estates Villa", location: "Juhu",
    type: "Residential", price: "₹18 Cr", beds: 6, baths: 5, sqft: "8,000 sq ft",
    description: "An exclusive villa featuring Mediterranean architecture, private pool, and lush gardens."
  },
  {
    id: 5, image: property1, title: "Executive Office Suite", location: "Worli",
    type: "Office Space", price: "₹3.8 Cr", beds: undefined, baths: undefined, sqft: "1,800 sq ft",
    description: "Premium office space with sea-facing views and modern infrastructure."
  },
  {
    id: 6, image: property3, title: "Heritage Plot", location: "Alibaug",
    type: "Plots", price: "₹2.5 Cr", beds: undefined, baths: undefined, sqft: "5,000 sq ft",
    description: "A prime plot in a gated community, perfect for building your dream estate."
  },
];

const Properties = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof allProperties[0] | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const filtered = filter === "All" ? allProperties : allProperties.filter(p => p.type === filter);

  return (
    <main>
      <SEOHead title="Exclusive Properties" description="Browse premium apartments, villas, commercial spaces & plots in Mumbai. Curated luxury real estate portfolio by Badshah Property Advisor." />
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p className="label-text text-primary-foreground/50 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Our Portfolio
          </motion.p>
          <motion.h1 className="heading-xl text-primary-foreground" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            Exclusive <span className="text-primary-foreground/70 italic">Properties</span>
          </motion.h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-background" ref={ref}>
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] font-sans border transition-all duration-400 ${
                filter === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filtered.map((property, i) => (
            <motion.div
              key={property.id}
              className="property-card group bg-card cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              layout
              onClick={() => setSelected(property)}
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img src={property.image} alt={property.title} className="property-image w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="label-text text-muted-foreground text-[10px] mb-2">{property.type}</p>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">{property.title}</h3>
                <p className="text-sm font-light text-muted-foreground mb-3">{property.location}</p>
                <div className="flex items-center justify-between border-t border-border pt-3">
                  <span className="font-serif text-lg text-foreground">{property.price}</span>
                  <span className="label-text text-[10px] text-foreground group-hover:tracking-[0.3em] transition-all duration-500">
                    Details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </main>
  );
};

export default Properties;
