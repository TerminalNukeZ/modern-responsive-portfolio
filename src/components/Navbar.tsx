import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, FolderGit2, BookOpen, Moon, Sun, LogIn } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: FolderGit2, label: 'Projects', href: '#projects' },
  { icon: BookOpen, label: 'Blog', href: '#updates' },
];

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState('Home');

  const scrollTo = (href: string, label: string) => {
    setActive(label);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
    >
      <div className="nav-pill">
        {navItems.map(item => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.href, item.label)}
            className={active === item.label ? 'nav-item-active' : 'nav-item'}
          >
            <item.icon size={18} />
          </button>
        ))}
      </div>
      <div className="nav-pill">
        <button onClick={toggle} className="nav-item">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button onClick={() => scrollTo('#contact', '')} className="nav-item">
          <LogIn size={18} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
