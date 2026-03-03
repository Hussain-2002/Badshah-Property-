import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/logo.png";
import SEOHead from "@/components/SEOHead";

const timeline = [
  {
    year: "1996",
    title: "Foundation in Ujjain",
    desc: "Started real estate advisory services in Ujjain with a commitment to trust, transparency, and ethical dealings.",
  },
  {
    year: "2005",
    title: "Residential Expansion",
    desc: "Expanded into residential plots, independent homes, and premium apartments across prime Ujjain locations.",
  },
  {
    year: "2012",
    title: "Commercial Advisory",
    desc: "Entered commercial real estate including shops, office spaces and high-growth investment properties.",
  },
  {
    year: "2018",
    title: "1000+ Successful Transactions",
    desc: "Successfully completed over 1000 residential and commercial property deals with long-term client relationships.",
  },
  {
    year: "2026",
    title: "Trusted Real Estate Consultant",
    desc: "Recognized as one of Ujjain’s most experienced and trusted real estate advisors with nearly three decades of market expertise.",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const tlRef = useRef(null);
  const tlInView = useInView(tlRef, { once: true, margin: "-100px" });

  return (
    <main>
      <SEOHead
        title="About Badshah Property Advisor – Real Estate Consultant in Ujjain"
        description="Established in 1996, Badshah Property Advisor is a trusted real estate consultant in Ujjain with nearly 30 years of experience in residential, commercial and land property transactions."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="label-text text-primary-foreground/50 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Legacy Since 1996
          </motion.p>

          <motion.h1
            className="heading-xl text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Built on Trust,{" "}
            <span className="text-primary-foreground/70 italic">
              Driven by Integrity
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Logo Section */}
      <section className="section-padding bg-background" ref={ref}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src={logo}
              alt="Badshah Property Advisor Logo"
              className="w-64 md:w-72 object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-px h-12 bg-foreground" />
              <p className="label-text text-foreground">Established 1996</p>
            </div>

            <h2 className="heading-md text-foreground mb-6">
              Nearly Three Decades of Real Estate Excellence
            </h2>

            <p className="body-text mb-6">
              Since 1996, Badshah Property Advisor has been delivering trusted
              real estate solutions in Ujjain. With deep market knowledge and
              strong negotiation expertise, we assist clients in buying,
              selling, and investing in residential and commercial properties.
            </p>

            <p className="body-text mb-8">
              Our philosophy is built on transparency, long-term relationships,
              and ethical practices — ensuring every transaction is secure,
              smooth, and strategically beneficial for our clients.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-serif text-2xl text-foreground">1000+</p>
                <p className="label-text text-[10px] mt-1">Properties Closed</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-foreground">29+ Years</p>
                <p className="label-text text-[10px] mt-1">Market Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-secondary" ref={tlRef}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="label-text text-foreground mb-4">Our Journey</p>
            <h2 className="heading-lg text-foreground">Milestones Since 1996</h2>
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
                  <p className="font-serif text-lg text-foreground mb-1">
                    {item.year}
                  </p>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="body-text text-sm">
                    {item.desc}
                  </p>
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