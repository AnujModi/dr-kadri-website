import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { patientInfo } from "../data/patientInfo";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import { seoData } from "../data/seoData";

export default function PatientInfo() {
  const [activeTab, setActiveTab] = useState(patientInfo[0]);

  // FAQ data for structured data
  const faqData = [
    {
      question: "What will happen at my initial visit?",
      answer: "Your initial visit will involve co-discovery of your overall oral health findings and needs. Please provide photo ID, any referral slips and x-rays from your referring dentist, a list of current medications, and dental/medical insurance cards. Allow 1.5-2 hours for your first appointment which includes examination, health history review, interview with Dr. Thomas-Moses, and treatment planning discussions.",
    },
    {
      question: "Will it hurt?",
      answer: "We will always be most gentle and considerate by being attentive to all your personal needs and desires. The periodontal examination can be completed with little or no discomfort. We offer nitrous oxide and oral sedatives for patient comfort.",
    },
    {
      question: "Do I need radiographs (x-rays)?",
      answer: "Yes, in order to properly diagnose periodontal disease, current periodontal radiographs (FMX - full mouth series) are required. If your referring dentist has recent x-rays, you may request they be forwarded to us via email or mail.",
    },
    {
      question: "Will my insurance cover the cost?",
      answer: "Dental insurance policies often cover periodontal treatment. As an out-of-network dental provider, we require payment in full at the time of visit and will file your dental insurance on your behalf with reimbursement sent directly to you. We will submit a predetermination to your insurance upon request.",
    },
    {
      question: "Will I need surgery?",
      answer: "Not everyone needs periodontal surgery. If treated early, periodontal (gum) disease can be controlled without surgery. We make recommendations based on your individual situation and treat as conservatively as possible to attain your treatment goals.",
    },
    {
      question: "Can my teeth be saved?",
      answer: "Recent advances in periodontal treatment allow us to successfully treat and maintain most teeth. We will provide honest recommendations based on your specific dental condition.",
    },
  ];

  return (
    <>
      <SEO
        title={seoData.patientInfo.title}
        description={seoData.patientInfo.description}
        keywords={seoData.patientInfo.keywords}
      />
      <StructuredData type="faq" faqData={faqData} />

      <section className="py-24 px-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row gap-20">

        {/* Sidebar Navigation */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-32 space-y-2">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8">Patient Information</h3>
            {patientInfo.map((item) => (
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

              {/* Content with optional side image */}
              <div className="relative">
                {/* Image floated to the right */}
                {activeTab.image && (
                  <div className="float-right ml-6 mb-4 w-48 md:w-64 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                    <img
                      src={activeTab.image}
                      alt={activeTab.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Hide image container if it fails to load
                        (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <div className="text-gray-700 font-light leading-loose text-lg whitespace-pre-line">
                  {activeTab.content}
                </div>

                {/* Clear float */}
                <div className="clear-both"></div>
              </div>

              {/* Downloadable Forms */}
              {activeTab.forms && (
                <div className="space-y-3 pt-4">
                  <h3 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">
                    Download Forms
                  </h3>
                  <ul className="space-y-3">
                    {activeTab.forms.map((form: { name: string; file: string }, index: number) => (
                      <li key={index}>
                        <a
                          href={form.file}
                          download
                          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
                        >
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span className="underline underline-offset-2">{form.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

      </div>
      </section>
    </>
  );
}
