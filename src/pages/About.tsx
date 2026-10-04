import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { doctorData } from "../data/doctorData";

const doctors = [
  {
    id: "dr-moses",
    doctor: doctorData["dr-moses"],
    summary: "Dr. Thomas-Moses has served the Carrollton community in private periodontal practice since 1992. She earned her DMD at the University of Mississippi and her Certificate in Periodontics at the Medical College of Georgia. Her experience includes extensive study in occlusion and TMD at the LD Pankey Institute, alongside leadership and service within organized dentistry.",
  },
  {
    id: "dr-hazeka",
    doctor: doctorData["dr-hazeka"],
    summary: "Dr. Kadri earned her DMD with high honors at Boston University and completed specialty training in both Periodontics and Periodontal Prosthesis at the University of Pennsylvania. Her approach combines thoughtful, personalized care with expertise in dental implants, gum grafting, tissue regeneration, and full mouth rehabilitation.",
  },
];

export default function About() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-7xl mx-auto">
      <Reveal width="100%">
        <header className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">Two doctors. A shared commitment.</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display leading-tight mb-8">
            About Our <span className="italic">Practice</span>
          </h1>
          <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-600">
            Our practice brings together Dr. Donna Thomas-Moses and Dr. Hazeka Kadri to provide personalized periodontal care. Together, they combine extensive experience and advanced specialty training with a shared commitment to thoughtful, patient-centered treatment.
          </p>
        </header>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 lg:gap-16">
        {doctors.map(({ id, doctor, summary }) => (
          <article key={id} aria-labelledby={`${id}-name`} className="min-w-0 flex flex-col">
            <Reveal width="100%">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden border border-gray-200 mb-8">
                <img
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="md:min-h-40 mb-6">
                <h2 id={`${id}-name`} className="text-3xl lg:text-4xl font-display leading-tight text-gray-800 mb-4">
                  {doctor.name}
                </h2>
                <p className="text-xs uppercase tracking-[0.2em] leading-relaxed text-gray-500">{doctor.title}</p>
                {"credentials" in doctor && typeof doctor.credentials === "string" && (
                  <p className="text-sm leading-relaxed text-gray-600 mt-3">{doctor.credentials}</p>
                )}
              </div>
            </Reveal>

            <div className="flex flex-col flex-1">
              <p className="text-gray-600 font-light leading-loose mb-8">{summary}</p>
              <div className="border-t border-gray-200 pt-8 mb-10">
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-5">Education &amp; Training</h3>
                <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
                  {doctor.education.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <Link
                to={`/our-team/${id}`}
                aria-label={`Read the full biography of ${doctor.name}`}
                className="mt-auto self-start text-sm text-gray-800 underline underline-offset-8 decoration-gray-300 hover:decoration-gray-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-8"
              >
                Read full biography <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
