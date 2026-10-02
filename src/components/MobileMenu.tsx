import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-50 bg-white flex flex-col p-6 sm:p-8 overflow-y-auto"
    >
      <div className="flex justify-end">
        <button onClick={onClose} className="text-2xl font-light">CLOSE —</button>
      </div>

      <nav className="flex flex-col gap-5 my-8">
        <Link to="/" onClick={onClose} className="text-3xl sm:text-4xl font-display italic hover:pl-4 transition-all">Home</Link>
        <Link to="/our-team" onClick={onClose} className="text-3xl sm:text-4xl font-display italic hover:pl-4 transition-all">Our Team</Link>
        <Link to="/patient-info" onClick={onClose} className="text-3xl sm:text-4xl font-display italic hover:pl-4 transition-all">Patient Information</Link>
        <Link to="/periodontal-disease" onClick={onClose} className="text-3xl sm:text-4xl font-display italic hover:pl-4 transition-all">Periodontal Disease</Link>
        <Link to="/non-surgical-procedures" onClick={onClose} className="text-3xl sm:text-4xl font-display italic hover:pl-4 transition-all">Non-Surgical</Link>
        <Link to="/surgical-procedures" onClick={onClose} className="text-3xl sm:text-4xl font-display italic hover:pl-4 transition-all">Surgical</Link>
        <Link to="/tmj" onClick={onClose} className="text-3xl sm:text-4xl font-display italic hover:pl-4 transition-all">TMJ</Link>
        <Link to="/referring-doctors" onClick={onClose} className="text-3xl sm:text-4xl font-display italic hover:pl-4 transition-all">Referring Doctors</Link>
        <Link to="/contact" onClick={onClose} className="text-3xl sm:text-4xl font-display italic hover:pl-4 transition-all">Contact</Link>
      </nav>

      <div className="mt-auto border-t border-gray-100 pt-8">
        <p className="text-sm text-gray-400 uppercase tracking-widest">Carrollton Periodontics</p>
      </div>
    </motion.div>
  );
}