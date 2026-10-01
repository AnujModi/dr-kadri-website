import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { referringData } from "../data/referringData";

interface Link {
  id?: string;
  label?: string;
  url?: string;
}

interface PdfLink {
  url: string;
  label: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
  links?: Link[];
  pdfLink?: PdfLink;
}

interface TabData {
  id: string;
  title: string;
  hasLinks?: boolean;
  hasSections?: boolean;
  isParent?: boolean;
  parent?: string;
  introContent?: string;
  links?: Link[];
  sections?: Section[];
}

export default function ReferringDoctors() {
  const [activeTab, setActiveTab] = useState<TabData>(referringData[0]);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());


  // App keys routes by pathname, so navigation remounts this page and resets state.

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab.id]);

  const handleLinkClick = (linkId: string) => {
    const targetTab = referringData.find(item => item.id === linkId);
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
    } else {
      // For non-parent items, navigate normally
      setActiveTab(item);
    }
  };

  // Get only top-level and parent items for sidebar
  const topLevelItems = referringData.filter(item => !item.parent);

  // Get children for a parent
  const getChildren = (parentId: string) => {
    return referringData.filter(item => item.parent === parentId);
  };

  return (
    <section className="py-24 px-12 max-w-7xl mx-auto min-h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row gap-20">

        {/* Sidebar Navigation */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-32 space-y-1">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">Referring</h3>
            <p className="text-[8px] uppercase tracking-[0.2em] text-gray-400 mb-8">Doctors</p>

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

                  <ul className="space-y-2 pl-4">
                    {activeTab.links?.map((link) => (
                      <li key={link.id} className="list-disc list-inside">
                        <button
                          onClick={() => handleLinkClick(link.id!)}
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
                  {/* Intro content */}
                  <div className="text-gray-700 font-light leading-loose text-lg whitespace-pre-line">
                    {activeTab.introContent}
                  </div>

                  {/* Sections */}
                  {activeTab.sections?.map((section) => (
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

                      {/* PDF Link for Referral Form */}
                      {section.pdfLink && (
                        <div className="my-6">
                          <a
                            href={section.pdfLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-medium"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {section.pdfLink.label}
                          </a>
                        </div>
                      )}

                      {/* External Links for Links of Interest */}
                      {section.links && section.links.length > 0 && (
                        <ul className="space-y-2 mb-6">
                          {section.links.map((link, idx) => (
                            <li key={idx}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-700 hover:text-amber-800 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
                              >
                                {link.label}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
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
