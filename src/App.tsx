import About from "./components/About";
import Experiences from "./components/Experiences";
import Footter from "./components/Footter";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  const texts = ["SERAPHIN", "Développeur", "Fullstack"];

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Text Rain */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <span
            key={i}
            className={`absolute text-[0.65rem] text-white/30 font-semibold animate-float${(i % 4) + 1}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            {texts[i % texts.length]}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 p-1 md:px-[10%] space-y-5">
        <Navbar />
        <Home />
      </div>

      <About />
      <Experiences />
      <Projects/>
      <Footter/>
      <ScrollToTop />
    </div>
  );
}
