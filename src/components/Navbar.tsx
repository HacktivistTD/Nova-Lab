import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  // { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only update active section if we're on the home page
      if (location.pathname === '/') {
        const sections = navLinks.map(link => link.href.substring(1));
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (current) {
          setActiveSection(current);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }
    
    // If we're on the home page, scroll to the section
    const element = document.getElementById(sectionId);
    
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('#home');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={handleLogoClick}
            className="cursor-pointer"
          >
            <img
              src="/NovaLabs.svg"
              className='h-10'
              alt="Nova Labs Logo"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-foreground transition-colors duration-200 font-medium relative group
                  ${activeSection === link.href.substring(1) && location.pathname === '/' ? 'text-primary' : 'hover:text-primary'}`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300
                    ${activeSection === link.href.substring(1) && location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                />
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 rounded-2xl"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-left py-2 transition-colors duration-200 font-medium
                      ${activeSection === link.href.substring(1) && location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
