import { Mail, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Footer = () => {
  const { register, handleSubmit, reset } = useForm<{ name: string; email: string; message: string }>();

  const onSubmit = (data: { name: any; email: any; message: any; }) => {
    emailjs
      .send(
        "votre_service_id",    // Remplacez par votre Service ID
        "votre_template_id",   // Remplacez par votre Template ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "votre_public_key"     // Remplacez par votre Public Key
      )
      .then(
        () => {
          alert("Message reçu ! Je vous répondrai rapidement.");
          reset();
        },
        (error) => {
          alert("Une erreur est survenue, veuillez réessayer.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="footter"
      className="bg-base-200 border-t border-gray-300 dark:border-gray-700 py-16"
    >
      <div className="max-w-6xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-primary"
        >
          Contactez-moi
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* ----- GAUCHE ----- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <div className="flex flex-col justify-between h-full rounded-2xl border border-primary/40 p-6 bg-white dark:bg-gray-900 shadow-lg space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Discutons de votre projet
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Disponible pour des opportunités freelance ou collaborations.
                Réponse garantie sous 24h.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:andrianalijaonaseraphin@gmail.com"
                  className="group flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-800 dark:text-gray-100 group-hover:text-primary">
                    andrianalijaonaseraphin@gmail.com
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/seraphin15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-gray-800 dark:text-gray-100 group-hover:text-primary">
                    github.com/seraphin15
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/seraphin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-gray-800 dark:text-gray-100 group-hover:text-primary">
                    linkedin.com/in/seraphin
                  </span>
                </a>

                {/* Localisation */}
                <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c1.656 0 3-1.344 3-3S13.656 5 12 5 9 6.344 9 8s1.344 3 3 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 9c0 7.5-7.5 13.5-7.5 13.5S4.5 16.5 4.5 9a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-100">
                    Andrainjato, Fianarantsoa
                  </span>
                </div>

                {/* Téléphone */}
                <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5.5C3 4.672 3.672 4 4.5 4h2c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5H4.5a.5.5 0 01-.5-.5v-3zM20 19c0 .828-.672 1.5-1.5 1.5H6.207A1.5 1.5 0 014.5 19V5c0-.828.672-1.5 1.5-1.5H18.5c.828 0 1.5.672 1.5 1.5v14z"
                    />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-100">
                    +261 34 21 826 67
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ----- DROITE : FORMULAIRE ----- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="h-full flex flex-col justify-between rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-lg space-y-4"
            >
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                {...register("message", { required: true })}
                placeholder="Votre message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2 w-full font-medium shadow-md"
              >
                Envoyer le message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* --- COPYRIGHT --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16 pt-6 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Seraphin. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
