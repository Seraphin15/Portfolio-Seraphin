import Title from "./Title";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  MonitorSmartphone,
} from "lucide-react";

import imgHTML from "../assets/techno/imgHTML1.png";
import imgCSS from "../assets/techno/imgCSS1.png";
import imgJS from "../assets/techno/imgJS1.png";
import imgREACT from "../assets/techno/imgREACT1.png";
import imgNodeJ from "../assets/techno/imgNodeJ1.png";
import imgTAILWIND from "../assets/techno/imgTAILWIND1.png";
import imgTS from "../assets/techno/imgTS1.png";
import imgNEXT from "../assets/techno/imgNEXT1.png";
import imgJAVA from "../assets/techno/imgJAVA1.png";

const skills = [
  { id: 1, name: "HTML", image: imgHTML, type: "frontend" },
  { id: 2, name: "CSS", image: imgCSS, type: "frontend" },
  { id: 3, name: "JavaScript", image: imgJS, type: "frontend" },
  { id: 4, name: "React", image: imgREACT, type: "frontend" },
  { id: 5, name: "Nodejs", image: imgNodeJ, type: "backend" },
  { id: 6, name: "Tailwind Css", image: imgTAILWIND, type: "frontend" },
  { id: 7, name: "TypeScript", image: imgTS, type: "frontend" },
  { id: 8, name: "Next.js", image: imgNEXT, type: "frontend" },
  { id: 9, name: "Java", image: imgJAVA, type: "backend" },
];

const getIcon = (type: string) => {
  const iconBaseProps = {
    size: 18,
    className: "text-white",
  };

  switch (type) {
    case "frontend":
      return <MonitorSmartphone {...iconBaseProps} />;
    case "backend":
      return <Code {...iconBaseProps} />;
    case "database":
      return <Database {...iconBaseProps} />;
    default:
      return null;
  }
};

const Experiences = () => {
  return (
    <section id="experiences">
      <div className="px-6 py-1 md:px-20 py-2 md:py-10">
        <Title title="Expériences" />

        <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row gap-12">
          {/* SKILLS */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="group flex flex-col items-center p-4 rounded-xl bg-base-100 hover:bg-primary/10 transition-all shadow-md hover:scale-105 duration-300"
                >
                  <div className="relative h-20 w-20 rounded-full border-2 border-accent p-2 bg-white">
                    <motion.img
                      src={skill.image}
                      alt={skill.name}
                      className="h-full w-full object-contain rounded-full"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                    <motion.div
                      className="absolute -top-2 -right-2 p-1 rounded-full shadow-md animate-color-pulse"
                    >
                      {getIcon(skill.type)}
                    </motion.div>
                  </div>
                  <span className="mt-3 text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EXPERIENCES */}
          <div className="md:w-1/2">
            <div className="space-y-6 text-sm">

              {/* Experience 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden bg-base-100 shadow-lg rounded-xl p-6 border-l-4 border-primary hover:scale-[1.01] transition-all"
              >
                <div className="absolute inset-0 rounded-xl border border-primary animate-border-stream pointer-events-none"></div>
                <div className="absolute top-2 right-2 w-4 h-4 rounded-full animate-color-pulse shadow-md"></div>

                <h4 className="font-bold text-base text-accent">Stagiaire développeur Java</h4>
                <p className="text-xs text-base-content/70 italic">
                  Centre Fiscal Vangaindrano | 27 Juin - 27 Août 2025
                </p>
                <ul className="list-disc list-inside mt-2 ml-2 space-y-1">
                  <li>CONCEPTION ET REALISATION D’UNE APPLICATION SUR LA GESTION DE CONGE ET ABSENCE DES EMPLOYES DU CENTRE FISCAL VANGAINDRANO</li>
                  <li>Technologies : Java, MySQL</li>
                  <li>Étapes : Conception, développement</li>
                </ul>
              </motion.div>

              {/* Experience 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden bg-base-100 shadow-lg rounded-xl p-6 border-l-4 border-secondary hover:scale-[1.01] transition-all"
              >
                <div className="absolute inset-0 rounded-xl border border-secondary animate-border-stream pointer-events-none"></div>
                <div className="absolute top-2 right-2 w-4 h-4 rounded-full animate-color-pulse shadow-md"></div>

                <h4 className="font-bold text-base text-accent">Projets académiques – EMIT</h4>
                <ul className="list-disc list-inside mt-2 ml-2 space-y-1">
                  <li>Juin 2024 : Réservation billet FIMPIMA – Java</li>
                  <li>Mai 2024 : Offre formation – JavaScript</li>
                  <li>Mars 2024 : Gestion de logement – PHP</li>
                  <li>Mars 2023 : Gestion de boucherie – MS-Access</li>
                  <li>Mars 2023 : Site de vente – HTML & CSS</li>
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
