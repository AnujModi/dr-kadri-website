import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { periodontalData } from "../data/periodontalData";

export default function PeriodontalDisease() {
  const [activeTab, setActiveTab] = useState(periodontalData[0]);


  // App keys routes by pathname, so navigation remounts this page and resets state.

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab.id]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 px-12 max-w-7xl mx-auto min-h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row gap-20">

        {/* Sidebar Navigation */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-32 space-y-2">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8">Periodontal Disease</h3>
            {periodontalData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`block w-full text-left py-3 text-sm transition-all border-l-2 pl-4 ${
                  activeTab.id === item.id
                  ? "border-gray-800 text-gray-800 font-medium"
                  : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </aside>

        {/* Dynamic Content Area */}
        <main className="flex-1 max-w-2xl min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-display italic text-gray-800 mb-8">
                {activeTab.title}
              </h2>

              {/* Regular content with optional side image */}
              {!activeTab.hasAnchors && (
                <div className="relative">
                  {/* Image floated to the right */}
                  {activeTab.image && (
                    <div className="float-right ml-6 mb-4 w-48 md:w-64">
                      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <img
                          src={activeTab.image}
                          alt={activeTab.title}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                          }}
                        />
                      </div>
                      {(activeTab.id === "about-periodontal-disease" || activeTab.id === "preventing-gum-disease") && (
                        <>
                          <p className="text-sm font-medium text-gray-700 mt-2">Progression of Gum Disease</p>
                          <a href={activeTab.image} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-700 hover:text-amber-800">
                            Click here for high-res version
                          </a>
                        </>
                      )}
                    </div>
                  )}

                  <div className="text-gray-700 font-light leading-loose text-lg whitespace-pre-line">
                    {activeTab.content}
                  </div>

                  {/* Video below content if available */}
                  {activeTab.video && (
                    <div className="mt-8 w-full max-w-md mx-auto">
                      <div className="aspect-video overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <video
                          controls
                          autoPlay
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          poster="/videos/periodontal/videoframe_0.png"
                        >
                          <source src={activeTab.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}

                  {/* Clear float */}
                  <div className="clear-both"></div>
                </div>
              )}

              {/* Special handling for Mouth-Body Connection with anchors */}
              {activeTab.hasAnchors && (
                <div className="space-y-12">
                  {/* Intro content */}
                  <div className="text-gray-700 font-light leading-loose text-lg whitespace-pre-line">
                    {activeTab.introContent}
                  </div>

                  {/* Anchor links */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">
                      Jump to Section
                    </h3>
                    <ul className="space-y-2">
                      {activeTab.anchors?.map((anchor: { id: string; label: string }) => (
                        <li key={anchor.id}>
                          <button
                            onClick={() => scrollToSection(anchor.id)}
                            className="text-gray-700 hover:text-gray-900 underline underline-offset-2 transition-colors text-left"
                          >
                            {anchor.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sections */}
                  {activeTab.sections?.map((section: { id: string; title: string; content: string }) => (
                    <div key={section.id} id={section.id} className="pt-8 border-t border-gray-200">
                      <h3 className="text-2xl font-display italic text-gray-800 mb-6">
                        {section.title}
                      </h3>
                      <div className="text-gray-700 font-light leading-loose text-lg whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

      </div>
    </section>
  );
}
