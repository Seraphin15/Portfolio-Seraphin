import { AtSign, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Raha mi-scroll dia mikatona ny menu mobile
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* Navbar Desktop */}
      <motion.section
        id="homes"
        className="hidden md:block sticky top-0 z-50 bg-base-100 shadow-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center p-4">
          <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
            <AtSign className="mr-2" />
            SERA<span className="text-secondary">PHIN</span>
          </a>
          <ul className="hidden md:flex space-x-4">
            <NavLink href="#homes">Accueil</NavLink>
            <NavLink href="#about">A Propos</NavLink>
            <NavLink href="#experiences">Expériences</NavLink>
            <NavLink href="#projects">Projets</NavLink>
            <NavLink href="#footter">Contact</NavLink>
          </ul>
        </div>
      </motion.section>

      {/* Floating Menu Button - Mobile */}
      <button
        className="fixed top-4 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <motion.div
          animate={{
            color: ["#60a5fa", "#34d399", "#fbbf24", "#a78bfa", "#60a5fa"], // pastel colors
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-base-200/95 z-40 flex flex-col items-center justify-center space-y-6 md:hidden"
          >
            {/* Logo visible */}
            <a href="#" className="absolute top-6 left-6 flex items-center text-2xl font-bold">
              <AtSign className="mr-1" />
              SERA<span className="text-secondary">PHIN</span>
            </a>

            <MobileLink href="#homes" onClick={() => setIsOpen(false)}>Accueil</MobileLink>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>A Propos</MobileLink>
            <MobileLink href="#experiences" onClick={() => setIsOpen(false)}>Expériences</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projets</MobileLink>
            <MobileLink href="#footter" onClick={() => setIsOpen(false)}>Contact</MobileLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Desktop NavLink
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="btn btn-sm btn-ghost btn-fancy text-lg">
      {children}
    </a>
  </li>
);

// Mobile NavLink
const MobileLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <motion.li whileTap={{ scale: 0.95 }}>
    <a href={href} onClick={onClick} className="text-xl font-semibold hover:text-primary">
      {children}
    </a>
  </motion.li>
);

export default Navbar;
