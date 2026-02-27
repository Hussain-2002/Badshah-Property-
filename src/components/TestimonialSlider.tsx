import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Badshah transformed our property search into a seamless, luxurious experience. Their expertise is unparalleled.",
    author: "Rajesh Mehta",
    title: "CEO, Meridian Group",
  },
  {
    quote: "The level of personalized service and market insight Badshah provides is truly exceptional. Highly recommended.",
    author: "Priya Sharma",
    title: "Investor",
  },
  {
    quote: "A trusted partner in every sense. Badshah's advisory helped us secure our dream commercial space.",
    author: "Amit Patel",
    title: "Director, Apex Ventures",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-background" ref={ref}>
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="label-text text-accent mb-8">Testimonials</p>

        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="absolute"
            >
              <span className="gold-quote">"</span>
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mt-2 mb-8 italic">
                {testimonials[current].quote}
              </p>
              <p className="text-sm font-medium text-foreground">
                {testimonials[current].author}
              </p>
              <p className="label-text text-[10px] text-muted-foreground mt-1">
                {testimonials[current].title}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === current ? "bg-accent w-6" : "bg-border"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSlider;
