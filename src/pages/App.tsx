import { useState, lazy, Suspense } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useGoogleAnalytics } from "../hooks/useGoogleAnalytics";

// Eager load critical components (above-the-fold)
import Home from "./Home";
import NotFound from "./NotFound";
import PageTransition from "../components/PageTransition";
import MobileMenu from "../components/MobileMenu";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import PWAInstallPrompt from "../components/PWAInstallPrompt";
import StructuredData from "../components/StructuredData";

// Lazy load non-critical route components
const Contact = lazy(() => import("./Contact"));
const About = lazy(() => import("./About"));
const PatientInfo = lazy(() => import("./PatientInfo"));
const OurTeam = lazy(() => import("./OurTeam"));
const DoctorBio = lazy(() => import("./DoctorBio"));
const TeamStaff = lazy(() => import("./TeamStaff"));
const OfficeTour = lazy(() => import("./OfficeTour"));
const PeriodontalDisease = lazy(() => import("./PeriodontalDisease"));
const NonSurgicalProcedures = lazy(() => import("./NonSurgicalProcedures"));
const SurgicalProcedures = lazy(() => import("./SurgicalProcedures"));
const TMJ = lazy(() => import("./TMJ"));
const ReferringDoctors = lazy(() => import("./ReferringDoctors"));
const Disclaimer = lazy(() => import("./Disclaimer"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-gray-500 text-sm uppercase tracking-widest">Loading...</div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Track page views with Google Analytics
  useGoogleAnalytics();

  return (
    <div className="min-h-screen bg-cream">
      <StructuredData />
      <ScrollProgress />
      <ScrollToTop />

      <nav className="p-8 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-md z-40">
        <Link to="/" className="flex items-center gap-4 group">
          {/* Logo Image - Increased size to h-16 */}
          <img
            src="/images/logo.jpeg"
            alt="Carrollton Periodontics Logo"
            className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
            loading="eager"
          />

          {/* Text Branding Stack */}
          <div className="flex flex-col">
            {/* Line 1: Large & Bold */}
            <span className="text-2xl font-bold tracking-tighter uppercase leading-none dark:text-black">
              Carrollton Periodontics
            </span>

            {/* Line 2: Half Size & Spaced */}
            <span className="text-[12px] font-medium tracking-[0.3em] uppercase text-gray-400 leading-relaxed">
              & Implant Dentistry
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <Link to="/patient-info" className="text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Patient Information</Link>
          <Link to="/periodontal-disease" className="text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Periodontal Disease</Link>
          <Link to="/non-surgical-procedures" className="flex flex-col items-center text-gray-500 hover:text-black transition-colors">
            <span className="text-sm uppercase tracking-widest">Non-Surgical</span>
            <span className="text-[9px] uppercase tracking-widest text-gray-400">Procedures</span>
          </Link>
          <Link to="/surgical-procedures" className="flex flex-col items-center text-gray-500 hover:text-black transition-colors">
            <span className="text-sm uppercase tracking-widest">Surgical</span>
            <span className="text-[9px] uppercase tracking-widest text-gray-400">Procedures</span>
          </Link>
          <Link to="/tmj" className="text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors">TMJ</Link>
          <Link to="/referring-doctors" className="flex flex-col items-center text-gray-500 hover:text-black transition-colors">
            <span className="text-sm uppercase tracking-widest">Referring</span>
            <span className="text-sm uppercase tracking-widest">Doctors</span>
          </Link>
          <Link to="/contact" className="text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Contact</Link>
          <Link to="/our-team" className="text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Our Team</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-sm uppercase tracking-widest font-medium"
        >
          Menu —
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/contact" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><Contact /></PageTransition>
              </Suspense>
            } />
            <Route path="/about" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><About /></PageTransition>
              </Suspense>
            } />
            <Route path="/patient-info" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><PatientInfo /></PageTransition>
              </Suspense>
            } />
            <Route path="/periodontal-disease" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><PeriodontalDisease /></PageTransition>
              </Suspense>
            } />
            <Route path="/non-surgical-procedures" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><NonSurgicalProcedures /></PageTransition>
              </Suspense>
            } />
            <Route path="/surgical-procedures" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><SurgicalProcedures /></PageTransition>
              </Suspense>
            } />
            <Route path="/tmj" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><TMJ /></PageTransition>
              </Suspense>
            } />
            <Route path="/referring-doctors" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><ReferringDoctors /></PageTransition>
              </Suspense>
            } />
            <Route path="/disclaimer" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><Disclaimer /></PageTransition>
              </Suspense>
            } />
            <Route path="/our-team" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><OurTeam /></PageTransition>
              </Suspense>
            } />
            <Route path="/our-team/staff" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><TeamStaff /></PageTransition>
              </Suspense>
            } />
            <Route path="/our-team/office-tour" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><OfficeTour /></PageTransition>
              </Suspense>
            } />
            <Route path="/our-team/:id" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><DoctorBio /></PageTransition>
              </Suspense>
            } />
            {/* Legacy route redirect */}
            <Route path="/meet-:id" element={
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition><DoctorBio /></PageTransition>
              </Suspense>
            } />

            {/* This catch-all route redirects any unknown URL to Home */}
            <Route
                path="*"
                element={
                    <PageTransition>
                        <NotFound />
                    </PageTransition>
                }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <PWAInstallPrompt />
    </div>
  );
}