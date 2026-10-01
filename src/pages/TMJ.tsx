import { useEffect } from "react";
import { motion } from "framer-motion";
import { tmjData } from "../data/tmjData";

interface Section {
  id: string;
  title: string;
  content: string;
  checklist?: string[];
  checklistNote?: string;
  listItems?: string[];
  additionalContent?: string;
}

interface TMJData {
  id: string;
  title: string;
  hasSections?: boolean;
  video?: string;
  introContent?: string;
  sections?: Section[];
}

export default function TMJ() {
  const pageData: TMJData = tmjData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="py-24 px-12 max-w-7xl mx-auto min-h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row gap-20">

        {/* Sidebar Navigation */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-32 space-y-1">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">TMJ</h3>
            <p className="text-[8px] uppercase tracking-[0.2em] text-gray-400 mb-8">Disorders</p>

            <button
              className="block w-full text-left py-3 text-sm transition-all border-l-2 pl-4 border-gray-800 text-gray-800 font-medium"
            >
              TMJ
            </button>
          </div>
        </aside>

        {/* Dynamic Content Area */}
        <main className="flex-1 max-w-2xl min-w-0">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-display italic text-gray-800 mb-8">
              {pageData.title}
            </h2>

            {/* Intro content */}
            <div className="text-gray-700 font-light leading-loose text-lg whitespace-pre-line">
              {pageData.introContent}
            </div>

            {/* Video if available */}
            {pageData.video && (
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
                    <source src={pageData.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

            {/* Sections */}
            {pageData.sections?.map((section) => (
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

                {/* Checklist for TMJ disorder questions */}
                {section.checklist && (
                  <ul className="space-y-2 mb-4">
                    {section.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 font-light text-lg">
                        <span className="mr-3 text-amber-700">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.checklistNote && (
                  <div className="text-gray-700 font-light leading-loose text-lg italic mb-4">
                    {section.checklistNote}
                  </div>
                )}

                {/* List items for treatment options */}
                {section.listItems && (
                  <ul className="space-y-2 mb-4 ml-6">
                    {section.listItems.map((item, idx) => (
                      <li key={idx} className="list-disc text-gray-700 font-light text-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.additionalContent && (
                  <div className="text-gray-700 font-light leading-loose text-lg whitespace-pre-line">
                    {section.additionalContent}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </main>

      </div>
    </section>
  );
}
