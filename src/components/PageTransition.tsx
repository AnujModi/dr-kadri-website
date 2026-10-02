import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const { key, hash } = useLocation();

  // Reset after the destination mounts, including lazy-loaded pages.
  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [key, hash]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}