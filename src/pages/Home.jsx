import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCalendarAlt, FaMapMarkerAlt, FaDownload, FaPaperPlane,
  FaUserPlus, FaExternalLinkAlt, FaCheckCircle, FaArrowRight, FaFileAlt
} from 'react-icons/fa';
import Countdown from '../components/ui/Countdown';
import SectionHeading from '../components/ui/SectionHeading';
import tracks from '../data/tracksData';

const importantDates = [
  { event: 'Paper Submission Opens',       date: '1 May 2026',      done: false },
  { event: 'Full Paper Submission Deadline', date: '1 Oct 2026',    done: false },
  { event: 'Acceptance Notification',       date: '15 Nov 2026',    done: false },
  { event: 'Camera Ready Paper Due',        date: '15 Dec 2026',    done: false },
  { event: 'Registration Deadline',         date: '15 Jan 2027',    done: false },
  { event: 'Conference Dates',              date: 'March 3, 2027',  done: false, highlight: true },
];

const prevProceedings = [
  { year: 2020, url: 'https://ieeexplore.ieee.org/xpl/conhome/9051868/proceeding' },
  { year: 2022, url: 'https://ieeexplore.ieee.org/xpl/conhome/9776593/proceeding' },
  { year: 2024, url: 'https://ieeexplore.ieee.org/xpl/conhome/10474598/proceeding' },
  { year: 2025, url: 'https://ieeexplore.ieee.org/xpl/conhome/10958571/proceeding' },
];

const highlights = [
  'IEEE Sponsored — proceedings in IEEE Xplore (Scopus indexed)',
  'Double-blind peer review process for all submissions',
  'Selected papers recommended for IEEE Transactions',
  'Keynotes from world-renowned researchers & industry experts',
  'Hybrid mode of participation (Online + In-person)',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] } })
};

export default function Home() {
  return (
    <div className="pt-[88px] bg-[#fffbf7]">

      {/* ─── HERO ───────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)' }}
      >
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 74.7C120 69.3 240 58.7 360 53.3C480 48 600 48 720 53.3C840 58.7 960 69.3 1080 74.7C1200 80 1320 80 1380 80H1440V80H0V80Z" fill="#fffbf7"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-10 py-20 sm:py-28 text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              IEEE Sponsored Conference
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto"
          >
            International Conference on<br className="hidden sm:block" />
            <span className="text-amber-300"> Power, Control</span> and Computing Technologies
          </motion.h1>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white/90 text-sm sm:text-base mb-10"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <FaCalendarAlt className="text-amber-300" /> March 3, 2027
            </span>
            <span className="hidden sm:block text-white/30">•</span>
            <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <FaMapMarkerAlt className="text-amber-300" /> NIT Raipur, Chhattisgarh, India
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <Link to="/registration" className="btn-accent flex items-center gap-2 shadow-lg">
              <FaUserPlus /> Register Now
            </Link>
            <Link to="/submission" className="btn-outline-white flex items-center gap-2">
              <FaPaperPlane /> Submit Paper
            </Link>
            <a href="/Brochure_new.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline-white flex items-center gap-2">
              <FaDownload /> Brochure
            </a>
          </motion.div>

          {/* Countdown */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <p className="text-blue-200 text-xs uppercase tracking-widest font-semibold mb-4">Conference starts in</p>
            <Countdown />
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT / HIGHLIGHTS ─────────────────────── */}
      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <SectionHeading title="About the Conference" center={false} />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">ICPC2T 2027</strong> is organized by the Department of Electrical Engineering, National Institute of Technology Raipur and provides a premier platform for students, researchers, scientists, and engineers to exchange knowledge on recent trends in Power Systems, Power Electronics, Machine Drives, and Computational Technologies.
              </p>
              <p>
                The conference covers renewable energy sources, Smart Grids, cyber-physical systems, data analytics, artificial intelligence, machine learning, and deep learning as applied to power management.
              </p>
              <p>
                All accepted and presented papers will be submitted for inclusion in <strong className="text-gray-900">IEEE Xplore</strong> (Scopus Indexed).
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary text-sm">Learn More</Link>
              <Link to="/tracks" className="btn-outline text-sm">View Tracks</Link>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Previous Proceedings on IEEE Xplore</h4>
              <div className="flex flex-wrap gap-3">
                {prevProceedings.map((p) => (
                  <a key={p.year} href={p.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors">
                    <FaExternalLinkAlt className="text-[10px]" /> ICPC2T {p.year}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp}>
            <div className="card p-7">
              <h3 className="font-bold text-gray-900 text-lg mb-5 pb-3 border-b border-gray-100">Key Highlights</h3>
              <ul className="space-y-4">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <FaCheckCircle className="text-blue-600 mt-0.5 shrink-0 text-base" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                {[
                  { num: '15+', label: 'Technical Tracks' },
                  { num: '4th', label: 'Edition' },
                  { num: '2027', label: 'Next Conference' },
                ].map((s) => (
                  <div key={s.num}>
                    <p className="text-2xl font-bold text-blue-700">{s.num}</p>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TRACKS PREVIEW ─────────────────────────── */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <SectionHeading title="Conference Tracks" subtitle="15 specialized technical tracks spanning power systems, electronics, and computing." />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tracks.slice(0, 7).map((track, i) => {
              const Icon = track.icon;
              return (
                <motion.div key={track.id} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.4} variants={fadeUp}
                  className="card p-5 group hover:border-blue-200 transition-colors cursor-default"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                      <Icon className="text-blue-600 group-hover:text-white text-base transition-colors" />
                    </div>
                    <span className="tag text-xs">{track.id}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-blue-700 transition-colors">{track.title}</h3>
                </motion.div>
              );
            })}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={4} variants={fadeUp}>
              <Link to="/tracks"
                className="card p-5 flex flex-col items-center justify-center text-center gap-2 h-full min-h-[100px] border-dashed border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition-all group"
              >
                <FaArrowRight className="text-blue-600 text-xl group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-blue-700 text-sm">View All 15 Tracks</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── IMPORTANT DATES ────────────────────────── */}
      <section className="section-pad">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionHeading title="Important Dates" subtitle="Stay on top of key deadlines for ICPC2T 2027." />
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <div className="card overflow-hidden">
            {importantDates.map((d, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.4} variants={fadeUp}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-gray-100 last:border-b-0 ${
                  d.highlight ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className={`shrink-0 ${d.highlight ? 'text-blue-200' : 'text-blue-600'}`} />
                  <span className={`font-medium text-sm ${d.highlight ? 'text-white' : 'text-gray-800'}`}>{d.event}</span>
                  {d.highlight && <span className="bg-white/20 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">Conference</span>}
                </div>
                <span className={`text-sm font-semibold whitespace-nowrap ${d.highlight ? 'text-blue-100' : 'text-blue-700'}`}>{d.date}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/important-dates" className="btn-outline text-sm">View Full Schedule</Link>
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ──────────────────────────────── */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Submit Your Research?</h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Join researchers worldwide at ICPC2T 2027. Submit your original work and be part of a globally visible IEEE conference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/submission" className="btn-accent"><FaFileAlt /> Submit Paper</Link>
              <Link to="/registration" className="btn-outline-white"><FaUserPlus /> Register Now</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
