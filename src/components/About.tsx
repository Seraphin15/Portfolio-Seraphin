import Title from "./Title";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about">
    {/* ... */}

    <div className="bg-base-300 py-16 px-6 md:px-20 mb-10 md:mb-32">
      <div className="max-w-4xl mx-auto text-center">
        <Title title="À propos" />

        <div className="mt-10 space-y-6 text-base-content text-lg flex flex-col items-center">

          <div className="flex items-center space-x-4">
            <GraduationCap className="text-primary w-6 h-6" />
            <span className="font-medium">Étudiant à l'EMIT Fianarantsoa</span>
          </div>

          <div className="flex items-center space-x-4">
            <Briefcase className="text-primary w-6 h-6" />
            <span className="font-medium">1 an d'expérience en développement web</span>
          </div>

          <div className="flex items-center space-x-4">
            <Code2 className="text-primary w-6 h-6" />
            <span className="font-medium">Développeur Fullstack (React, Node.js, MySQL)</span>
          </div>

          <p className="leading-relaxed text-base mt-6 max-w-xl">
            Passionné par les technologies web modernes, je développe des
            applications performantes, élégantes et sécurisées, du backend à
            l'interface utilisateur.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
