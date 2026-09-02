import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import nitLogo from '../../assets/NIT_LOGO.jpg';
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
      { label: 'Call for Special Session', to: '/special-session' },
      { label: 'Camera Ready Paper Submission', to: '/Camera Ready Paper Submission.pdf', isExternal: true },
    ]
  },
  { label: 'Special Sessions', to: '/special-sessions' },
  { label: 'Committee', to: '/committee' },
  { label: 'Speakers', to: '/keynote-speakers' },
  { label: 'Dates', to: '/important-dates' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Venue', to: '/venue' },
  { label: 'Gallery', to: '/gallery' },
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
          className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-xl shadow-xl border border-gray-100/80 overflow-hidden z-50 py-1"
        >
          {items.map((item) => (
            item.isExternal ? (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="block px-4 py-2.5 text-xs xl:text-sm font-medium transition-colors hover:bg-blue-50/80 hover:text-blue-700 text-gray-700"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={close}
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-xs xl:text-sm font-medium transition-colors hover:bg-blue-50/80 hover:text-blue-700 ${isActive ? 'text-blue-700 bg-blue-50 font-semibold' : 'text-gray-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    <header ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
      {/* Top bar */}
      <div className="bg-blue-800 text-white text-xs py-1.5 px-4 text-center font-medium">
        <span className="opacity-90">IEEE Sponsored | ICPC2T 2027 | National Institute of Technology Raipur | 3<sup>rd</sup> - 5<sup>th</sup> March, 2027</span>
      </div>

      <nav className="max-w-[1440px] mx-auto px-4 lg:px-6 flex items-center justify-between h-16 sm:h-18 gap-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group py-1">
          <img src={nitLogo} alt="NIT Raipur Logo" className="h-10 sm:h-11 w-auto object-contain rounded-md transition-transform group-hover:scale-105" />
          <div className="flex flex-col justify-center">
            <div className="font-bold text-gray-900 text-base sm:text-lg leading-tight tracking-tight">ICPC2T 2027</div>
            <div className="text-blue-600 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase mt-0.5">NIT Raipur</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5">
          {navItems.map((item) => (
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-2 xl:px-2.5 2xl:px-3 py-2 text-xs xl:text-[13px] 2xl:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap ${openDropdown === item.label ? 'text-blue-700 bg-blue-50/80 font-semibold' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/60'
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
                  `px-2 xl:px-2.5 2xl:px-3 py-2 text-xs xl:text-[13px] 2xl:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap ${isActive ? 'text-blue-700 bg-blue-50/80 font-semibold shadow-xs' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
        </div>

        {/* CTA button */}
        <div className="hidden md:block shrink-0">
          <Link to="/registration" className="btn-primary text-xs xl:text-sm py-2 px-4 sm:px-5 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap">
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
            className="xl:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
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
                            child.isExternal ? (
                              <a
                                key={child.to}
                                href={child.to}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm rounded-lg text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                              >
                                {child.label}
                              </a>
                            ) : (
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
                            )
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