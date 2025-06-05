import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // na heroicons, fontawesome sns

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Rehefa manomboka scroll midina ilay page
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Asongadiny ho any ambony
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 p-3 bg-primary text-white rounded-full shadow-lg transition-all duration-300
        hover:scale-110 hover:bg-primary-dark ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
