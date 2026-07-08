import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    children: [
      { label: 'About Conference', to: '/about' },
      { label: 'About NIT Raipur', to: '/about-nit-raipur' },
    ]
  },
  {
    label: 'Call for Papers',
    children: [
      { label: 'Conference Tracks', to: '/tracks' },
      { label: 'Paper Submission', to: '/submission' },
    ]
  },
  { label: 'Committee', to: '/committee' },
  { label: 'Speakers', to: '/keynote-speakers' },
  { label: 'Dates', to: '/important-dates' },
  { label: 'Register', to: '/registration' },
  { label: 'Venue', to: '/venue' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Contact', to: '/contact' },
];

function DropdownMenu({ items, isOpen, close }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
        >
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={close}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 ${
                  isActive ? 'text-blue-700 bg-blue-50 font-semibold' : 'text-gray-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);
  const { pathname } = useLocation();

  // Close mobile on route change
  useEffect(() => { setMobileOpen(false); setMobileExpanded(null); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
      {/* Top bar */}
      <div className="bg-blue-800 text-white text-xs py-1.5 px-4 text-center font-medium">
        <span className="opacity-90">IEEE Sponsored | ICPC2T 2027 | National Institute of Technology Raipur | March 3, 2027</span>
      </div>
      
      <nav className="max-w-[1280px] mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center shadow text-white font-bold text-sm leading-none font-sans group-hover:bg-blue-800 transition-colors">
            IC
          </div>
          <div>
            <div className="font-bold text-gray-900 text-base leading-none tracking-tight">ICPC2T 2027</div>
            <div className="text-blue-600 text-[10px] font-semibold tracking-widest uppercase mt-0.5">NIT Raipur</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    openDropdown === item.label ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                  <FaChevronDown className={`text-[9px] transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                <DropdownMenu items={item.children} isOpen={openDropdown === item.label} close={() => setOpenDropdown(null)} />
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'text-blue-700 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
        </div>

        {/* CTA button */}
        <div className="hidden md:block">
          <Link to="/registration" className="btn-primary text-sm py-2 px-5">
            Register Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden p-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      {item.label}
                      <FaChevronDown className={`text-xs transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.label && (
                        <motion.div
                          initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                          className="overflow-hidden pl-4 mt-1 space-y-1"
                        >
                          {item.children.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              onClick={() => setMobileOpen(false)}
                              className={({ isActive }) =>
                                `block px-3 py-2 text-sm rounded-lg ${isActive ? 'text-blue-700 bg-blue-50 font-semibold' : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'}`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 text-sm font-medium rounded-lg ${isActive ? 'text-blue-700 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
              <div className="pt-3 pb-2 border-t border-gray-100 mt-2">
                <Link to="/registration" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center text-sm py-2.5">
                  Register Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
