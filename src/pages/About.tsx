import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImg from "@/assets/founder.png";
import SEOHead from "@/components/SEOHead";

const timeline = [
  { year: "2009", title: "Foundation", desc: "Badshah Property Advisory established in Mumbai." },
  { year: "2013", title: "Commercial Expansion", desc: "Expanded into commercial real estate advisory." },
  { year: "2017", title: "500+ Deals", desc: "Crossed 500 successful property transactions." },
  { year: "2021", title: "Premium Portfolio", desc: "Launched exclusive luxury property division." },
  { year: "2025", title: "Industry Leader", desc: "Recognized as a top real estate advisory firm." },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const tlRef = useRef(null);
  const tlInView = useInView(tlRef, { once: true, margin: "-100px" });

  return (
    <main>
      <SEOHead title="About Us" description="Learn about Badshah Property Advisor – 15+ years of trusted real estate advisory in Mumbai with 500+ successful transactions." />
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="label-text text-primary-foreground/50 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            className="heading-xl text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Built on Trust,{" "}
            <span className="text-primary-foreground/70 italic">Driven by Excellence</span>
          </motion.h1>
        </div>
      </section>

      {/* Founder section */}
      <section className="section-padding bg-background" ref={ref}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src={founderImg}
              alt="Founder of Badshah Property Advisory"
              className="w-full max-w-md mx-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-px h-12 bg-foreground" />
              <p className="label-text text-foreground">The Founder</p>
            </div>
            <h2 className="heading-md text-foreground mb-6">
              A Vision for Premium Real Estate
            </h2>
            <p className="body-text mb-6">
              With over 15 years of experience in the real estate industry, Badshah has built
              a reputation for exceptional client service, deep market knowledge, and an
              unwavering commitment to finding the perfect property for every client.
            </p>
            <p className="body-text mb-8">
              Our approach combines traditional values of trust and integrity with modern
              market analytics, ensuring our clients receive the most informed advisory
              in the industry.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-serif text-2xl text-foreground">500+</p>
                <p className="label-text text-[10px] mt-1">Properties Sold</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-foreground">15+</p>
                <p className="label-text text-[10px] mt-1">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary" ref={tlRef}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="label-text text-foreground mb-4">Our Journey</p>
            <h2 className="heading-lg text-foreground">Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={tlInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-2 h-2 bg-foreground rounded-full -translate-x-1/2 mt-2" />
                <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                  <p className="font-serif text-lg text-foreground mb-1">{item.year}</p>
                  <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="body-text text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
