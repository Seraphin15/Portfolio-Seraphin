import { Download } from "lucide-react";
import { useState, useEffect } from "react";

const Typewriter = ({ texts, speed = 70, pause = 2000 }: { texts: string[]; speed?: number; pause?: number }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (textIndex === texts.length) {
      setTextIndex(0); // Loop to start
    }

    if (!deleting && subIndex === texts[textIndex].length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, textIndex, texts, speed, pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span>
      {texts[textIndex].substring(0, subIndex)}
      <span className="text-secondary">{blink ? "|" : " "}</span>
    </span>
  );
};

const Home = () => {
  return (
    <section id="accueil">
      <div className="flex flex-col md:flex-row justify-center items-center md:my-32 my-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
            Bonjour,
            <br />
            Je suis <span className="text-secondary">SERAPHIN</span>
          </h1>
          <p className="mt-9 text-lg font-bold text-center md:text-left">
            Je suis un <Typewriter texts={["backend developpeur", "frontend developpeur"]} />
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="/CV.pdf"
              download
              className="px-6 py-3 bg-primary flex text-white rounded-md font-semibold shadow-md 
                        hover:bg-primary-dark hover:scale-105 hover:shadow-lg transition 
                        transform duration-300 ease-in-out"
            >
              <Download className="w-7" />
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="relative w-64 h-64 md:ml-16 mt-10 md:mt-0 group float-container">
          {/* Halo Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-xl scale-105 z-0"></div>

          {/* Sary cercle */}
          <img
            src="/img2.jpg"
            alt="Illustration"
            className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:ring-4 group-hover:ring-blue-400"
          />
        </div>

        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0); }
            }

            .float-container {
              animation: float 3s ease-in-out infinite;
            }

            .float-container:hover {
              animation-play-state: paused;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Home;
