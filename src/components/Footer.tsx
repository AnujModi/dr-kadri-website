import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-24 pb-12 px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Branding Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter uppercase text-gray-800 dark:text-black">
              Carrollton Periodontics
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-400">
              & Implant Dentistry
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-light text-sm max-w-xs leading-relaxed">
            Dedicated to providing the highest standard of periodontal and dental implant care in a compassionate environment.
          </p>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link to="/periodontal-disease" className="hover:text-gray-800 transition-colors">Periodontal Disease</Link></li>
            <li><Link to="/non-surgical-procedures" className="hover:text-gray-800 transition-colors">Non-Surgical Procedures</Link></li>
            <li><Link to="/surgical-procedures" className="hover:text-gray-800 transition-colors">Surgical Procedures</Link></li>
            <li><Link to="/tmj" className="hover:text-gray-800 transition-colors">TMJ</Link></li>
          </ul>
        </div>

        {/* Information Column */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Information</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link to="/patient-info" className="hover:text-gray-800 transition-colors">Patient Information</Link></li>
            <li><Link to="/referring-doctors" className="hover:text-gray-800 transition-colors">Referring Doctors</Link></li>
            <li><Link to="/our-team" className="hover:text-gray-800 transition-colors">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-gray-800 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Hours Column */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Hours</h4>
          <ul className="space-y-2 text-sm text-gray-600 font-light">
            <li>Mon — Thu: 8:00am - 5:00pm</li>
            <li>Fri: By Appointment Only</li>
            <li>Sat — Sun: Closed</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-gray-400">
          © {new Date().getFullYear()} Carrollton Periodontics. All Rights Reserved.
        </p>
        <p className="text-[10px] uppercase tracking-widest text-gray-400">
          Design by Excellence
        </p>
      </div>
    </footer>
  );
}
