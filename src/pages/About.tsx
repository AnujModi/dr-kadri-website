import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section className="py-24 px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

        {/* Left Side: Large Portrait Placeholder & Name */}
        <div className="sticky top-32">
          <Reveal>
            <h1 className="text-7xl font-display leading-none mb-8">
              Donna <br /> <span className="italic">Thomas-Moses</span>
            </h1>
          </Reveal>
          <Reveal width="100%">
            <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center text-gray-400 italic">
              [Professional Portrait Placeholder]
            </div>
          </Reveal>
        </div>

        {/* Right Side: Bio and Credentials */}
        <div className="space-y-16 pt-20">
          <Reveal>
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400">Philosophy</h3>
              <p className="text-2xl font-light leading-relaxed text-gray-700">
                “My approach to periodontics is rooted in the belief that oral health is the gateway to systemic well-being.”
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6 text-gray-500 font-light leading-loose">
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400">Background</h3>
              <p>
                With over two decades of experience in specialized periodontal care, Dr. Thomas-Moses has established a reputation for clinical precision and a gentle, patient-centered approach.
              </p>
              <p>
                She received her doctorate from [University Name] and completed her residency in Periodontics at [Institution], where she focused on advanced bone regeneration techniques and soft tissue grafting.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-black mb-4">Board Certified</h4>
                <p className="text-sm text-gray-400">American Board of Periodontology</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-black mb-4">Affiliations</h4>
                <p className="text-sm text-gray-400">AAP, ADA, Regional Dental Society</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}