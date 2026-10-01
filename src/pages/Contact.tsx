import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { seoData } from "../data/seoData";

export default function Contact() {
  return (
    <section className="py-24 px-12 max-w-7xl mx-auto">
      <SEO {...seoData.contact} />
      <div className="flex flex-col lg:flex-row gap-20">

        {/* Left Side: Info */}
        <div className="flex-1 space-y-12">
          <Reveal>
            <h2 className="text-5xl font-display italic mb-8 text-gray-800">Get in touch.</h2>
            <p className="text-gray-500 font-light max-w-sm">
              We are currently accepting new patients. Reach out to schedule your initial consultation.
            </p>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Location</h4>
                <p className="text-lg text-gray-700">530 Newnan Street<br />Carrollton, GA 30117</p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Contact</h4>
                <p className="text-lg text-gray-700">
                  <a href="mailto:info@carrolltonperio.com" className="underline hover:text-gray-900">info@carrolltonperio.com</a>
                </p>
                <p className="text-lg text-gray-700">
                  <a href="tel:770-832-0089" className="hover:text-gray-900">(770) 832-0089</a>
                </p>
                <p className="text-sm text-gray-500 mt-1">Fax: (770) 830-9531</p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Office Hours</h4>
                <p className="text-gray-700 leading-relaxed">
                  Monday - Friday<br />
                  <span className="text-gray-500">By Appointment</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Side: Additional Info */}
        <div className="flex-1 bg-gray-50 p-10 rounded-sm">
          <Reveal>
            <h3 className="text-2xl font-display italic text-gray-800 mb-6">
              Schedule Your Appointment
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The first step towards a beautiful, healthy smile is to schedule an appointment.
              Please contact our office by phone or email to schedule your consultation.
            </p>

            <div className="space-y-4 border-t border-gray-200 pt-6">
              <a
                href="tel:770-832-0089"
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">(770) 832-0089</p>
                  <p className="text-sm text-gray-500">Call to schedule</p>
                </div>
              </a>

              <a
                href="mailto:info@carrolltonperio.com"
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">info@carrolltonperio.com</p>
                  <p className="text-sm text-gray-500">Email us</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Map Section */}
      <Reveal width="100%">
        <div className="mt-32 w-full grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer group">
          <a
            href="https://maps.google.com/maps?q=530+Newnan+Street+Carrollton+GA+30117"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full h-[500px] bg-gray-100 overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic">
              [Google Maps Static Image Placeholder]
            </div>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-8 left-8 bg-white p-6 shadow-xl">
              <p className="text-sm font-bold tracking-tighter">VIEW ON GOOGLE MAPS</p>
              <p className="text-xs text-gray-500 uppercase mt-1">Opens in new tab</p>
            </div>
          </a>
        </div>
      </Reveal>
    </section>
  );
}