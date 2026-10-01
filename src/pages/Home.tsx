import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";

const carouselImages = [
  "/images/carrollton-doctors.png",
  "/images/carousel/Moses-031-2000x680.jpeg",
  "/images/carousel/officeNEW-2000x680.jpeg",
  "/images/carousel/practice-sign.jpeg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO
        title="Carrollton Periodontics | Expert Periodontal Care & Dental Implants"
        description="Leading periodontal specialists in Carrollton, GA. Dr. Donna Thomas-Moses & Dr. Hazeka Kadri provide expert care in gum disease treatment, dental implants, and cosmetic periodontal procedures."
        keywords="periodontics Carrollton GA, dental implants, gum disease treatment, periodontist, Dr. Donna Thomas-Moses, Dr. Hazeka Kadri, Carrollton dentist"
        image="/images/carrollton-doctors.png"
      />
      {/* Hero Carousel with Ken Burns Effect */}
      <div className="relative w-full aspect-[1394/1128] md:aspect-auto md:h-[600px] bg-slate-900 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {currentIndex === 0 && (
              <div aria-hidden="true" className="absolute inset-0 hidden md:block pointer-events-none">
                <img
                  src={carouselImages[0]}
                  alt=""
                  className="w-full h-full object-cover scale-110 blur-2xl brightness-50"
                />
                <div className="absolute inset-0 bg-slate-900/20" />
              </div>
            )}
            <motion.img
              src={carouselImages[currentIndex]}
              alt={currentIndex === 0
                ? "Dr. Donna Thomas-Moses and Dr. Hazeka Kadri outside Carrollton Periodontics & Dental Implants, home of TMJ Health of Georgia"
                : "Carrollton Periodontics office"}
              className={`relative w-full h-full ${currentIndex === 0 ? "object-contain" : "object-cover"}`}
              loading="eager"
              fetchPriority={currentIndex === 0 ? "high" : "auto"}
              initial={{ scale: 1, x: 0 }}
              animate={{
                scale: currentIndex === 0 ? 1 : 1.1,
                x: currentIndex === 0 ? 0 : currentIndex % 2 === 0 ? -20 : 20
              }}
              transition={{
                duration: 8,
                ease: "linear"
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay gradient */}
        {currentIndex !== 0 && <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />}

        {/* Navigation dots */}
        <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 rounded-full bg-black/40 px-3 py-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-gray-800">
              Clinical <br /> <span className="italic">Excellence.</span>
            </h1>
          </Reveal>

          <div className="space-y-8">
          <Reveal>
            <p className="text-lg text-gray-600 max-w-sm font-light leading-relaxed">
              Providing specialized periodontal care with a focus on patient-centered results.
            </p>
          </Reveal>

          <Reveal>
            <a
              href="/contact"
              className="inline-block bg-gray-800 text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-700 transition-colors"
            >
              Schedule Appointment
            </a>
          </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
