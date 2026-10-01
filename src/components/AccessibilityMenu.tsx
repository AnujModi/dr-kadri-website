import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const reset = () => {
    setFontSize(100);
    setIsDark(false);
  };

  return (
    /* Changed from right-10 to left-10 */
    <div className="fixed bottom-10 left-10 z-[80]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            /* Adjusted x to -20 for a left-side entrance */
            initial={{ opacity: 0, scale: 0.9, y: 20, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: -20 }}
            className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 rounded-lg shadow-2xl mb-4 w-64 space-y-6"
          >
            <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400">Accessibility</h3>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium dark:text-white">Appearance</span>
              <button
                onClick={() => setIsDark(!isDark)}
                className="text-xs px-3 py-1 bg-gray-100 dark:bg-zinc-800 dark:text-gray-300 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-medium dark:text-white">Text Size</span>
              <div className="flex gap-2">
                <button onClick={() => setFontSize(prev => Math.max(prev - 10, 80))} className="flex-1 bg-gray-100 dark:bg-zinc-800 dark:text-white py-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">-</button>
                <button onClick={() => setFontSize(prev => Math.min(prev + 10, 150))} className="flex-1 bg-gray-100 dark:bg-zinc-800 dark:text-white py-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">+</button>
              </div>
            </div>

            <button
              onClick={reset}
              className="w-full text-[10px] uppercase tracking-tighter text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Reset to Original
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full flex items-center justify-center shadow-lg hover:border-black dark:hover:border-white transition-all group"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`dark:text-white ${isOpen ? "rotate-45" : ""} transition-transform`}
        >
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
      </button>
    </div>
  );
}