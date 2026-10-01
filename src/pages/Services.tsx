import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const services = [
  { 
    title: "Periodontal Therapy", 
    description: "Comprehensive treatment of gum disease, focusing on restoring the health of the supporting tissues and bone." 
  },
  { 
    title: "Dental Implants", 
    description: "Permanent, sophisticated solutions for missing teeth that look, feel, and function like natural teeth." 
  },
  { 
    title: "Gum Grafting", 
    description: "Advanced surgical procedures to correct gum recession and protect your teeth from the effects of bone loss." 
  },
  { 
    title: "Laser Dentistry", 
    description: "Minimally invasive technology for precise gum treatments with faster healing times and less discomfort." 
  },
  { 
    title: "Sinus Augmentation", 
    description: "Expert bone grafting procedures to ensure a stable foundation for successful dental implant placement." 
  },
  { 
    title: "Crown Lengthening", 
    description: "Reshaping gum and bone tissue to expose more of the natural tooth for functional or aesthetic improvements." 
  },
  { 
    title: "Oral Sedation", 
    description: "Ensuring a calm and comfortable experience for patients who feel anxious about periodontal surgery." 
  },
  { 
    title: "Bone Regeneration", 
    description: "Specialized techniques to rebuild lost bone structure, essential for long-term oral health and stability." 
  }
];

export default function Services() {
  return (
    <section className="py-24 px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-sm uppercase tracking-widest text-gray-400 mb-4 block">Expertise</span>
          <h2 className="text-5xl md:text-6xl font-display mb-16 text-gray-800">
            Specialized <span className="italic">Care.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white dark:bg-zinc-900 p-10 h-96 flex flex-col justify-between hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors duration-500"
            >
              <div>
                <span className="text-xs font-mono text-gray-300 dark:text-zinc-600 group-hover:text-gray-500 transition-colors">
                  0{(i + 1).toString()}
                </span>
                <h4 className="text-2xl font-display mt-6 mb-4 text-gray-800 dark:text-zinc-100">{s.title}</h4>
                <p className="text-gray-500 dark:text-zinc-400 text-sm font-light leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-4 overflow-hidden">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="text-xs uppercase tracking-tighter font-bold flex items-center gap-2 cursor-pointer dark:text-zinc-300"
                  >
                  Learn More <span>→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}