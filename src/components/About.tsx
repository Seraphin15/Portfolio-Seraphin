import Title from "./Title";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const iconVariants = {
  animate: {
    rotate: [0, 15, -15, 0],
    scale: [1, 1.2, 1],
    color: [
      "#3b82f6", // blue-500
      "#9333ea", // purple-600
      "#10b981", // green-500
      "#f59e0b", // amber-500
      "#ef4444", // red-500
      "#3b82f6", // back to blue
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section id="about">
      <div className="bg-base-300 py-16 px-6 md:px-20 mb-10 md:mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <Title title="À propos" />

          <motion.div
            className="mt-10 space-y-6 text-base-content text-lg flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            {/* Line 1 */}
            <div className="flex items-center space-x-4">
              <motion.div variants={iconVariants} animate="animate">
                <GraduationCap className="w-6 h-6" />
              </motion.div>
              <span className="font-medium">Étudiant à l'EMIT Fianarantsoa</span>
            </div>

            {/* Line 2 */}
            <div className="flex items-center space-x-4">
              <motion.div variants={iconVariants} animate="animate">
                <Briefcase className="w-6 h-6" />
              </motion.div>
              <span className="font-medium">
                1 an d'expérience en développement web
              </span>
            </div>

            {/* Line 3 */}
            <div className="flex items-center space-x-4">
              <motion.div variants={iconVariants} animate="animate">
                <Code2 className="w-6 h-6" />
              </motion.div>
              <span className="font-medium">
                Développeur Fullstack (React, Node.js, MySQL)
              </span>
            </div>

            <motion.p
              className="leading-relaxed text-base mt-6 max-w-xl"
              variants={fadeInUp}
            >
              Passionné par les technologies web modernes, je développe des
              applications performantes, élégantes et sécurisées, du backend à
              l'interface utilisateur.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
