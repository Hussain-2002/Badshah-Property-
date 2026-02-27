import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Vertical Divider */}
      <motion.div
        className="absolute left-1/2 top-0 w-px bg-white/10"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">

        {/* Small Label */}
        <motion.p
          className="text-white/60 mb-6 tracking-[0.3em] uppercase text-xs md:text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Trusted Real Estate Advisor in India
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-white font-serif font-medium leading-[1.1]
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Luxury Real Estate & Property Investment
        </motion.h1>

        {/* SEO Optimized Paragraph */}
        <motion.p
          className="text-white/75 max-w-3xl mx-auto mb-8
                     text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Badshah Property Advisor offers premium residential and commercial
          property consulting services across India. We assist clients in
          buying luxury homes, selling high-value properties, and making
          strategic real estate investments with complete transparency,
          expert negotiation, and deep market insight.
        </motion.p>

        {/* Extra SEO Line (Boosts ranking without looking heavy) */}
        <motion.p
          className="text-white/60 max-w-2xl mx-auto mb-12
                     text-sm leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          From premium apartments to commercial developments, we help you
          secure the best property deals tailored to your investment goals.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link
            to="/contact"
            className="border border-white/30 text-white
                       px-8 py-3 tracking-widest text-sm uppercase
                       transition-all duration-300
                       hover:bg-white hover:text-black"
          >
            Get in Touch
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;