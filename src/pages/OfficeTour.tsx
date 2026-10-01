import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const teamNavItems = [
  { label: "Meet Dr. Thomas-Moses", path: "/our-team/dr-moses" },
  { label: "Meet Dr. Hazeka Kadri", path: "/our-team/dr-hazeka" },
  { label: "Meet The Team", path: "/our-team/staff" },
  { label: "Office Tour", path: "/our-team/office-tour" },
];

const officeImages = [
  "/images/office/Moses-001.jpeg",
  "/images/office/Moses-004.jpg",
  "/images/office/Moses-010.jpeg",
  "/images/office/Moses-012.jpeg",
  "/images/office/Moses-017.jpeg",
  "/images/office/Moses-019.jpeg",
  "/images/office/Moses-020.jpeg",
  "/images/office/Moses-021.jpeg",
  "/images/office/Moses-022.jpeg",
  "/images/office/Moses-023.jpeg",
  "/images/office/Moses-024.jpeg",
  "/images/office/Moses-025.jpeg",
  "/images/office/Moses-026.jpg",
  "/images/office/Moses-028.jpeg",
  "/images/office/Moses-031.jpg",
  "/images/office/Moses-033.jpeg",
  "/images/office/Moses-038.jpeg",
  "/images/office/Moses-041.jpeg",
  "/images/office/Moses-043.jpeg",
  "/images/office/Moses-044.jpeg",
  "/images/office/Moses-049.jpeg",
];

export default function OfficeTour() {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? officeImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === officeImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 px-12 max-w-7xl mx-auto min-h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row gap-20">

        {/* Sidebar Navigation */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-32 space-y-2">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8">Our Team</h3>
            {teamNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block w-full text-left py-3 text-sm transition-all border-l-2 pl-4 ${
                  location.pathname === item.path
                    ? "border-gray-800 text-gray-800 font-medium"
                    : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-5xl font-display italic mb-4 text-gray-800">Office Tour</h2>
              <p className="text-gray-600 font-light tracking-wide">Take a virtual tour of our modern facilities.</p>
            </div>
          </Reveal>

          {/* Main Image Viewer */}
          <div className="relative mb-6 w-full">
            <div className="aspect-[16/10] bg-gray-100 overflow-hidden border border-gray-200 rounded-lg w-full max-w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={officeImages[selectedIndex]}
                  alt={`Office photo ${selectedIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
              {selectedIndex + 1} / {officeImages.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-3 min-w-max">
              {officeImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 overflow-hidden rounded border-2 transition-all ${
                    selectedIndex === index
                      ? "border-gray-800 opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </main>

      </div>
    </section>
  );
}
