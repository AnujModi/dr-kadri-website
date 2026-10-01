import { useParams, Navigate, Link, useLocation } from "react-router-dom";
import { doctorData } from "../data/doctorData";
import Reveal from "../components/Reveal";

const teamNavItems = [
  { label: "Meet Dr. Thomas-Moses", path: "/our-team/dr-moses" },
  { label: "Meet Dr. Hazeka Kadri", path: "/our-team/dr-hazeka" },
  { label: "Meet The Team", path: "/our-team/staff" },
  { label: "Office Tour", path: "/our-team/office-tour" },
];

export default function DoctorBio() {
  const { id } = useParams();
  const location = useLocation();
  // We look for the doctor in our data object using the URL ID
  const doctor = doctorData[id as keyof typeof doctorData];

  // If the URL is /meet-random-name, it redirects back to the team page
  if (!doctor) return <Navigate to="/our-team" />;

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
                    : "border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Quote Section */}
          {doctor.quote && (
            <Reveal>
              <blockquote className="italic text-lg text-gray-700 mb-16 max-w-3xl border-l-4 border-gray-400 pl-6">
                {doctor.quote}
              </blockquote>
            </Reveal>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Profile Side */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
              <Reveal>
                <h1 className="text-5xl font-display italic mb-4 text-gray-800">{doctor.name}</h1>
                {'credentials' in doctor && (
                  <p className="text-sm leading-relaxed text-gray-600 mb-4">{doctor.credentials}</p>
                )}
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-8">{doctor.title}</p>
              </Reveal>
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden border border-gray-200">
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={`Portrait of ${doctor.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 italic">
                    [Portrait of {doctor.name}]
                  </div>
                )}
              </div>
            </div>

            {/* Bio Side */}
            <div className="lg:col-span-7 space-y-12 pt-12">
              <Reveal>
                <div className="prose prose-lg font-light text-gray-700 leading-loose">
                  <p className="whitespace-pre-line">{doctor.bio}</p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-12">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-700">Education</h4>
                  <ul className="text-sm space-y-2 text-gray-600">
                    {doctor.education.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-700">Professional Affiliations</h4>
                  <ul className="text-sm space-y-2 text-gray-600">
                    {doctor.memberships.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </section>
  );
}
