import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { surgicalData } from "../data/surgicalData";
import ImplantPresentation from "../components/ImplantPresentation";

interface ImageWithLabel {
  src: string;
  label: string;
}

interface ImageSet {
  title?: string;
  images: ImageWithLabel[];
}

interface Subsection {
  title: string;
  content: string;
  image?: string;
  images?: string[];
  imageSet?: ImageSet;
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
  imageSet?: ImageSet;
  video?: string;
  hasLinks?: boolean;
  hasSections?: boolean;
  isParent?: boolean;
  parent?: string;
  introContent?: string;
  content?: string;
  links?: Link[];
  sections?: Section[];
}

export default function SurgicalProcedures() {
  const [activeTab, setActiveTab] = useState<TabData>(surgicalData[0]);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [presentationOpen, setPresentationOpen] = useState(false);


  // App keys routes by pathname, so navigation remounts this page and resets state.

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab.id]);

  const handleLinkClick = (linkId: string) => {
    const targetTab = surgicalData.find(item => item.id === linkId);
    if (targetTab) {
      setActiveTab(targetTab);
      // If clicking a child item, expand its parent
      if (targetTab.parent) {
        setExpandedSections(prev => new Set(prev).add(targetTab.parent!));
      }
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set<string>();
      // Accordion behavior: close all others, only keep this one if it wasn't already open
      if (!prev.has(sectionId)) {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const handleParentClick = (item: TabData) => {
    if (item.isParent) {
      // Only toggle expansion, don't navigate
      toggleSection(item.id);
      if (item.id === "dental-implants") setActiveTab(item);
    } else {
      // For non-parent items, navigate normally
      setActiveTab(item);
    }
  };

  // Get only top-level and parent items for sidebar
  const topLevelItems = surgicalData.filter(item => !item.parent);

  // Get children for a parent
  const getChildren = (parentId: string) => {
    return surgicalData.filter(item => item.parent === parentId);
  };

  return (
    <section className="py-24 px-12 max-w-7xl mx-auto min-h-screen overflow-hidden">
      {presentationOpen && <ImplantPresentation onClose={() => setPresentationOpen(false)} />}
      <div className="flex flex-col md:flex-row gap-20">

        {/* Sidebar Navigation */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-32 space-y-1">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">Surgical</h3>
            <p className="text-[8px] uppercase tracking-[0.2em] text-gray-400 mb-8">Procedures</p>

            {topLevelItems.map((item) => (
              <div key={item.id}>
                {/* Parent or Top-level Item */}
                <button
                  onClick={() => handleParentClick(item)}
                  className={`flex items-center justify-between w-full text-left py-3 text-sm transition-all border-l-2 pl-4 ${
                    item.isParent
                      ? "border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-800 font-medium"
                      : activeTab.id === item.id
                      ? "border-gray-800 text-gray-800 font-medium"
                      : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                  }`}
                >
                  <span>{item.title}</span>
                  {item.isParent && (
                    expandedSections.has(item.id) ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )
                  )}
                </button>

                {/* Child Items */}
                {item.isParent && expandedSections.has(item.id) && (
                  <div className="ml-4">
                    {getChildren(item.id).map((child) => (
                      <button
                        key={child.id}
                        onClick={() => setActiveTab(child)}
                        className={`block w-full text-left py-2 text-sm transition-all border-l-2 pl-4 ${
                          activeTab.id === child.id
                            ? "border-amber-700 text-gray-800 font-medium"
                            : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                        }`}
                      >
                        {child.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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

                  {/* Image if available */}
                  {activeTab.id === "dental-implants" && activeTab.image ? (
                    <button type="button" onClick={() => setPresentationOpen(true)}
                      aria-haspopup="dialog" aria-label="Open dental implants presentation"
                      className="block my-6 rounded-lg text-left focus-visible:outline-2 focus-visible:outline-offset-4 hover:opacity-90">
                      <img src={activeTab.image} alt="Dental Implants Presentation" width="276" height="195"
                        className="max-w-full rounded-lg border border-gray-200 shadow-sm" />
                      <span className="block mt-2 text-sm underline">Watch presentation</span>
                    </button>
                  ) : activeTab.image && (
                    <div className="my-6">
                      <img
                        src={activeTab.image}
                        alt={activeTab.title}
                        className="w-full max-w-xs rounded-lg border border-gray-200 shadow-sm"
                        width="276"
                        height="195"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}

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
                          loop
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
                        <div key={idx} className="mb-6">
                          <p className="text-gray-700 font-light leading-loose text-lg mb-3">
                            <span className="font-medium text-gray-800">{subsection.title}</span>{" "}
                            {subsection.content}
                          </p>
                          {subsection.image && (
                            <div className="my-4">
                              <img
                                src={subsection.image}
                                alt={subsection.title}
                                className="w-full max-w-sm rounded-lg border border-gray-200 shadow-sm"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                          )}
                          {subsection.images && subsection.images.length > 0 && (
                            <div className="my-4 flex flex-wrap gap-4">
                              {subsection.images.map((imgSrc, imgIdx) => (
                                <div key={imgIdx} className="flex-1 min-w-[150px] max-w-[200px]">
                                  <img
                                    src={imgSrc}
                                    alt={`${subsection.title} step ${imgIdx + 1}`}
                                    className="w-full rounded-lg border border-gray-200 shadow-sm"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                          {subsection.imageSet && (
                            <div className="my-4">
                              {subsection.imageSet.title && (
                                <h4 className="text-sm font-medium text-gray-600 mb-3">{subsection.imageSet.title}</h4>
                              )}
                              <div className="flex flex-wrap gap-4">
                                {subsection.imageSet.images.map((img, imgIdx) => (
                                  <div key={imgIdx} className="flex flex-col items-center flex-1 min-w-[150px] max-w-[200px]">
                                    <img
                                      src={img.src}
                                      alt={img.label}
                                      className="w-full rounded-lg border border-gray-200 shadow-sm mb-2"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                      }}
                                    />
                                    <span className="text-xs text-gray-600 font-medium">{img.label}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
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

                      {/* Image set with labels after first section */}
                      {sectionIdx === 0 && activeTab.imageSet && (
                        <div className="my-8">
                          {activeTab.imageSet.title && (
                            <h4 className="text-lg font-medium text-gray-700 mb-4">{activeTab.imageSet.title}</h4>
                          )}
                          <div className="flex flex-wrap justify-center gap-6">
                            {activeTab.imageSet.images.map((img, imgIdx) => (
                              <div key={imgIdx} className="flex flex-col items-center max-w-[180px]">
                                <img
                                  src={img.src}
                                  alt={img.label}
                                  className="w-full rounded-lg border border-gray-200 shadow-sm mb-2"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                                <span className="text-sm text-gray-600 font-medium text-center">{img.label}</span>
                              </div>
                            ))}
                          </div>
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
