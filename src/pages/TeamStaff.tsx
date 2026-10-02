import { Link, useLocation } from "react-router-dom";
import Reveal from "../components/Reveal";

const teamNavItems = [
  { label: "Meet Dr. Thomas-Moses", path: "/our-team/dr-moses" },
  { label: "Meet Dr. Hazeka Kadri", path: "/our-team/dr-hazeka" },
  { label: "Meet The Team", path: "/our-team/staff" },
  { label: "Office Tour", path: "/our-team/office-tour" },
];

const staffMembers: { name: string; role: string; image: string | null; bio?: string[] }[] = [
  {
    name: "Tammy",
    role: "Registered Dental Hygienist / Periodontal Therapist",
    image: "/images/team/tammy.jpg",
  },
  {
    name: "Jennifer",
    role: "Registered Dental Hygienist",
    image: "/images/team/jenny-hygienist.jpeg",
  },
  {
    name: "Katelyn",
    role: "Dental Assistant",
    image: "/images/team/katelyn.jpeg",
    bio: [
      "Katelyn is a dedicated dental assistant who enjoys helping patients feel comfortable and confident during their dental visits. She takes pride in creating a welcoming environment and working alongside her team to provide excellent patient care.",
      "One of Katelyn’s favorite parts of dentistry is building relationships with patients and helping make each visit a positive experience. She values teamwork, attention to detail, and making sure every patient feels cared for from the moment they sit in the chair.",
      "Outside of the office, Katelyn enjoys spending time with her family and friends, decorating and working on home projects, and making memories with the people she loves.",
    ],
  },
  {
    name: "Candace",
    role: "Practice Team Co-ordinator",
    image: null,
  },
  {
    name: "Holly Marchman",
    role: "Team Member",
    image: "/images/team/holly.jpeg",
  },
];

export default function TeamStaff() {
  const location = useLocation();

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-7xl mx-auto min-h-screen">
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

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-5xl font-display italic mb-4 text-gray-800">Meet The Team</h2>
              <p className="text-gray-600 font-light tracking-wide">The dedicated professionals behind your care.</p>
            </div>
          </Reveal>

          <div className="space-y-16">
            {staffMembers.map((member) => (
              <article key={member.name} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-gray-200 pb-16 last:border-0 last:pb-0">
                <div className="lg:col-span-5">
                  <h3 className="text-3xl font-display mb-4 text-gray-800">{member.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] leading-relaxed text-gray-500 mb-8">{member.role}</p>
                <div className="aspect-[3/4] max-w-sm bg-gray-100 overflow-hidden flex items-center justify-center text-gray-400 italic border border-gray-200">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span>
                      Photo Coming Soon
                    </span>
                  )}
                </div>
                </div>
                {member.bio && (
                  <div className="lg:col-span-7 lg:pt-12 space-y-6 font-light text-gray-700 leading-loose">
                    {member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
