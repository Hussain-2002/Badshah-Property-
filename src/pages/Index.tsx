import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import StatsCounter from "@/components/StatsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary text-center" ref={ref}>
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="label-text text-primary-foreground/50 mb-4">
          Start Your Journey in Ujjain
        </p>

        <h2 className="heading-lg text-primary-foreground mb-6">
          Find the Perfect Property in Ujjain
        </h2>

        <p className="body-text text-primary-foreground/60 mb-10">
          Looking to buy, sell, or invest in residential or commercial property in Ujjain? 
          Our real estate experts provide trusted advisory and transparent transactions 
          tailored to your investment goals.
        </p>

        <Link to="/contact" className="btn-outline-gold">
          Schedule Consultation
        </Link>
      </motion.div>
    </section>
  );
};

const Index = () => {
  return (
    <main>
      {/* ✅ UJJAIN SEO OPTIMIZED */}
      <SEOHead
        title="Best Real Estate Consultant in Ujjain"
        description="Badshah Property Advisor is a trusted property dealer in Ujjain offering residential plots, apartments, villas and commercial real estate investment advisory services in Madhya Pradesh."
        keywords="Real estate in Ujjain, Property dealer in Ujjain, Buy property in Ujjain, Commercial property Ujjain, Luxury homes in Ujjain, Property consultant Ujjain"
      />

      <HeroSection />
      <FeaturedProperties /> 
      <StatsCounter />
      {/* <TestimonialSlider /> */}
      <CTASection />
    </main>
  );
};

export default Index;
