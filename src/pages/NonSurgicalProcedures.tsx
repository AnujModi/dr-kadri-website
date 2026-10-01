import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { nonSurgicalData } from "../data/nonSurgicalData";

interface Subsection {
  title: string;
  content: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
  subsections?: Subsection[];
}

interface Link {
  id: string;
  label: string;
}

interface TabData {
  id: string;
  title: string;
  image?: string;
  images?: string[];
  video?: string;
  hasLinks?: boolean;
  hasSections?: boolean;
  introContent?: string;
  content?: string;
  links?: Link[];
  sections?: Section[];
}

export default function NonSurgicalProcedures() {
  const [activeTab, setActiveTab] = useState<TabData>(nonSurgicalData[0]);


  // App keys routes by pathname, so navigation remounts this page and resets state.

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab.id]);

  const handleLinkClick = (linkId: string) => {
    const targetTab = nonSurgicalData.find(item => item.id === linkId);
    if (targetTab) {
      setActiveTab(targetTab);
    }
  };

  return (
    <section className="py-24 px-12 max-w-7xl mx-auto min-h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row gap-20">

        {/* Sidebar Navigation */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-32 space-y-2">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">Non-Surgical</h3>
            <p className="text-[8px] uppercase tracking-[0.2em] text-gray-400 mb-8">Procedures</p>
            {nonSurgicalData.map((item) => (
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

              {/* Treatment Methods with Links */}
              {activeTab.hasLinks && (
                <div className="space-y-8">
                  <div className="text-gray-700 font-light leading-loose text-lg whitespace-pre-line">
                    {activeTab.introContent}
                  </div>

                  <ul className="space-y-2 pl-4">
                    {activeTab.links?.map((link) => (
                      <li key={link.id} className="list-disc list-inside">
                        <button
                          onClick={() => handleLinkClick(link.id)}
                          className="text-amber-700 hover:text-amber-800 underline underline-offset-2 transition-colors"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pages with Sections */}
              {activeTab.hasSections && (
                <div className="relative">
                  {/* Image floated to the right */}
                  {activeTab.image && (
                    <div className="float-right ml-6 mb-4 w-48 md:w-64">
                      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <img
                          src={activeTab.image}
                          alt={activeTab.title}
                          className="w-full h-auto object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Intro content */}
                  <div className="text-gray-700 font-light leading-loose text-lg whitespace-pre-line">
                    {activeTab.introContent}
                  </div>

                  {/* Clear float before video */}
                  <div className="clear-both"></div>

                  {/* Video if available */}
                  {activeTab.video && (
                    <div className="my-8 w-full max-w-lg mx-auto">
                      <div className="aspect-video overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <video
                          controls
                          autoPlay
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={activeTab.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}

                  {/* Sections */}
                  {activeTab.sections?.map((section, sectionIdx) => (
                    <div key={section.id} className="mt-8">
                      {section.title && (
                        <h3 className="text-2xl font-display italic text-amber-800 mb-4">
                          {section.title}
                        </h3>
                      )}

                      {section.content && (
                        <div className="text-gray-700 font-light leading-loose text-lg whitespace-pre-line mb-4">
                          {section.content}
                        </div>
                      )}

                      {/* Subsections */}
                      {section.subsections?.map((subsection, idx) => (
                        <div key={idx} className="mb-4">
                          <p className="text-gray-700 font-light leading-loose text-lg">
                            <span className="font-medium text-gray-800">{subsection.title}</span>{" "}
                            {subsection.content}
                          </p>
                        </div>
                      ))}

                      {/* Images grid after first section (for scaling/root planing) */}
                      {sectionIdx === 0 && activeTab.images && activeTab.images.length > 0 && (
                        <div className="my-8 flex justify-center gap-4">
                          {activeTab.images.map((imgSrc, imgIdx) => (
                            <div key={imgIdx} className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                              <img
                                src={imgSrc}
                                alt={`${activeTab.title} illustration ${imgIdx + 1}`}
                                className="w-auto h-40 md:h-48 object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Clear float */}
                  <div className="clear-both"></div>
                </div>
              )}

              {/* Simple content pages */}
              {!activeTab.hasLinks && !activeTab.hasSections && activeTab.content && (
                <div className="relative">
                  {activeTab.image && (
                    <div className="float-right ml-6 mb-4 w-48 md:w-64">
                      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                        <img
                          src={activeTab.image}
                          alt={activeTab.title}
                          className="w-full h-auto object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="text-gray-700 font-light leading-loose text-lg whitespace-pre-line">
                    {activeTab.content}
                  </div>

                  <div className="clear-both"></div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

      </div>
    </section>
  );
}
