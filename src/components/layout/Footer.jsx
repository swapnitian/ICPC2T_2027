import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt, FaDownload, FaPhone } from 'react-icons/fa';

const quickLinks = [
  { label: 'About Conference', to: '/about' },
  { label: 'Conference Tracks', to: '/tracks' },
  { label: 'Paper Submission', to: '/submission' },
  { label: 'Important Dates', to: '/important-dates' },
  { label: 'Registration', to: '/registration' },
  { label: 'Committee', to: '/committee' },
  { label: 'Keynote Speakers', to: '/keynote-speakers' },
  { label: 'Venue', to: '/venue' },
];

const downloads = [
  { label: 'Conference Brochure', href: '/Brochure_new.pdf' },
  { label: 'IEEE Template (A4)', href: '/conference-template-a4.docx' },
  { label: 'IEEE Template (Letter)', href: '/conference-template-letter.docx' },
  { label: 'PPT Template', href: '/ICPC2T-2025_format.pptx' },
  { label: 'Bank Details', href: '/bankdetails.pdf' },
  { label: 'Registration Form', href: '/Registration.docx' },
];

const prevProceedings = [
  { year: 2020, url: 'https://ieeexplore.ieee.org/xpl/conhome/9051868/proceeding' },
  { year: 2022, url: 'https://ieeexplore.ieee.org/xpl/conhome/9776593/proceeding' },
  { year: 2024, url: 'https://ieeexplore.ieee.org/xpl/conhome/10474598/proceeding' },
  { year: 2025, url: 'https://ieeexplore.ieee.org/xpl/conhome/10958571/proceeding' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">IC</div>
            <div>
              <div className="font-bold text-white text-base leading-none">ICPC2T 2027</div>
              <div className="text-blue-400 text-[10px] font-semibold uppercase tracking-widest mt-0.5">NIT Raipur</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            International Conference on Power, Control and Computing Technologies — organized by the Dept. of Electrical Engineering, NIT Raipur.
          </p>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-400 mt-0.5 shrink-0" />
              <span>NIT Raipur, GE Road, Raipur – 492010, Chhattisgarh, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400 shrink-0" />
              <a href="mailto:icpc2t_2027@nitrr.ac.in" className="hover:text-white hover:underline transition-colors">
                icpc2t_2027@nitrr.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-white text-base mb-5 border-b border-gray-700 pb-3">Quick Links</h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-gray-400 hover:text-white hover:underline transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Downloads */}
        <div>
          <h3 className="font-bold text-white text-base mb-5 border-b border-gray-700 pb-3">Downloads</h3>
          <ul className="space-y-2.5">
            {downloads.map((dl) => (
              <li key={dl.href}>
                <a href={dl.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <FaDownload className="text-blue-400 text-[10px] shrink-0" />
                  <span className="hover:underline">{dl.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Proceedings & Links */}
        <div>
          <h3 className="font-bold text-white text-base mb-5 border-b border-gray-700 pb-3">Proceedings</h3>
          <ul className="space-y-2.5 mb-6">
            {prevProceedings.map((p) => (
              <li key={p.year}>
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FaExternalLinkAlt className="text-blue-400 text-[10px] shrink-0" />
                  <span className="hover:underline">ICPC2T {p.year} — IEEE Xplore</span>
                </a>
              </li>
            ))}
          </ul>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">External Links</h4>
          <ul className="space-y-2">
            <li><a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white hover:underline transition-colors">IEEE Website</a></li>
            <li><a href="https://www.nitrr.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white hover:underline transition-colors">NIT Raipur</a></li>
            <li><a href="https://cmt3.research.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white hover:underline transition-colors">CMT Submission Portal</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 px-4 text-center text-xs text-gray-500">
        <p>© 2027 ICPC2T — International Conference on Power, Control and Computing Technologies. Dept. of Electrical Engineering, <a href="https://www.nitrr.ac.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">NIT Raipur</a>.</p>
      </div>
    </footer>
  );
}
