import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { doctorData } from "../data/doctorData";

const doctors = [
  {
    name: "Dr. Donna Thomas-Moses",
    role: "Periodontist",
    slug: "dr-moses",
    image: doctorData["dr-moses"].image,
    degree: "DMD, Certificate in Periodontics",
    intro: "Practicing since 1992 — Over 30 years of clinical excellence in periodontics and implant dentistry."
  },
  {
    name: doctorData["dr-hazeka"].name,
    role: doctorData["dr-hazeka"].title,
    slug: "dr-hazeka",
    image: doctorData["dr-hazeka"].image,
    degree: doctorData["dr-hazeka"].credentials,
    intro: "Board-certified periodontist with expertise in prosthetic-driven restorations and advanced implant procedures."
  }
];

const teamNavItems = [
  { label: "Meet Dr. Thomas-Moses", path: "/our-team/dr-moses" },
  { label: "Meet Dr. Hazeka Kadri", path: "/our-team/dr-hazeka" },
  { label: "Meet The Team", path: "/our-team/staff" },
  { label: "Office Tour", path: "/our-team/office-tour" },
];

export default function OurTeam() {
  const location = useLocation();

  return (
    <section className="py-24 px-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row gap-20">

        {/* Sidebar Navigation */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-32 space-y-2">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8">Our Team</h3>
            {teamNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block w-full text-left py-3 text-sm transition-all border-l-2 pl-4 ${
                  location.pathname === item.path
                    ? "border-gray-800 text-gray-800 font-medium"
                    : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content - Doctors Grid */}
        <main className="flex-1">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-5xl font-display italic mb-4 text-gray-800">Our Doctors</h2>
              <p className="text-gray-600 font-light tracking-wide">Clinical excellence through specialized expertise.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {doctors.map((doc) => (
              <Link key={doc.slug} to={`/our-team/${doc.slug}`} className="group">
                <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-6 border border-gray-200">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="w-full h-full"
                  >
                    {doc.image ? (
                      <img
                        src={doc.image}
                        alt={`Portrait of ${doc.name}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 italic">
                        [Image Placeholder]
                      </div>
                    )}
                  </motion.div>
                </div>
                <Reveal>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">{doc.role}</span>
                  <h3 className="text-3xl font-display mt-2 group-hover:italic transition-all text-gray-800">
                    {doc.name} —
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{doc.degree}</p>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{doc.intro}</p>
                </Reveal>
              </Link>
            ))}
          </div>
        </main>

      </div>
    </section>
  );
}
