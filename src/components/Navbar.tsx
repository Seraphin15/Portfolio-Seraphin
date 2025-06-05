import { AtSign, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mikatona automatique rehefa mi-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <motion.section
      id="homes"
      className="sticky top-0 z-50 bg-base-100 shadow-sm"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
          <AtSign className="mr-2" />
          SERA<span className="text-secondary">PHIN</span>
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-4">
          <NavLink href="#homes">Accueil</NavLink>
          <NavLink href="#about">A Propos</NavLink>
          <NavLink href="#experiences">Expériences</NavLink>
          <NavLink href="#projects">Projets</NavLink>
          <NavLink href="#footter">Contact</NavLink>
        </ul>

        {/* Menu hamburger (Mobile ihany) */}
        <button
          className="block md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu (Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-base-200 px-4 py-2"
          >
            <ul className="space-y-3">
              <MobileLink href="#homes" onClick={() => setIsOpen(false)}>Accueil</MobileLink>
              <MobileLink href="#about" onClick={() => setIsOpen(false)}>A Propos</MobileLink>
              <MobileLink href="#experiences" onClick={() => setIsOpen(false)}>Expériences</MobileLink>
              <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projets</MobileLink>
              <MobileLink href="#footter" onClick={() => setIsOpen(false)}>Contact</MobileLink>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

// Desktop Link
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="btn btn-sm btn-ghost btn-fancy text-lg">
      {children}
    </a>
  </li>
);

// Mobile Link
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
    <a href={href} onClick={onClick} className="block py-2 hover:text-primary">
      {children}
    </a>
  </motion.li>
);

export default Navbar;
