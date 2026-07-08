import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const prevProceedings = [
  { year: 2020, url: 'https://ieeexplore.ieee.org/xpl/conhome/9051868/proceeding' },
  { year: 2022, url: 'https://ieeexplore.ieee.org/xpl/conhome/9776593/proceeding' },
  { year: 2024, url: 'https://ieeexplore.ieee.org/xpl/conhome/10474598/proceeding' },
  { year: 2025, url: 'https://ieeexplore.ieee.org/xpl/conhome/10958571/proceeding' },
];

export default function About() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">About ICPC2T 2027</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
        </div>
      </div>

      <div className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <SectionHeading title="About the Conference" center={false} />
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p><strong className="text-gray-900">International Conference on Power, Control and Computing Technologies (ICPC2T) 2027</strong> is organized by the Department of Electrical Engineering, National Institute of Technology Raipur, Chhattisgarh, India.</p>
                <p>The conference provides a premier platform for students, researchers, scientists, and engineers to exchange knowledge on recent trends in Power Systems, Power Electronics, Machine Drives, and Computational Technologies.</p>
                <p>Emphasis is placed on renewable energy sources, Smart Grids, cyber-physical systems, demand response management, and the application of AI, machine learning, and deep learning for power management.</p>
                <p>All accepted and presented papers will be submitted for inclusion in <strong className="text-gray-900">IEEE Xplore</strong> (Scopus Indexed).</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <SectionHeading title="Conference Theme" center={false} />
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <p className="text-blue-900 font-semibold text-lg italic text-center leading-relaxed">
                  "Advancing Power Systems, Smart Technologies, and Sustainable Computing for a Better Future"
                </p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fadeUp} className="card p-7">
              <h3 className="font-bold text-gray-900 text-lg mb-4 pb-3 border-b border-gray-100">Previous Proceedings — IEEE Xplore</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {prevProceedings.map((p) => (
                  <a key={p.year} href={p.url} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
                    <span className="text-2xl font-bold text-blue-700 group-hover:text-blue-900">{p.year}</span>
                    <FaExternalLinkAlt className="text-blue-400 text-xs" />
                    <span className="text-xs text-gray-500 font-medium">IEEE Xplore</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5} variants={fadeUp} className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">Key Highlights</h3>
              <ul className="space-y-3">
                {[
                  'IEEE Sponsored Conference',
                  'Published in IEEE Xplore (Scopus)',
                  'Double-blind peer review',
                  'Eligible for IEEE Transactions',
                  'Hybrid mode (Online + Offline)',
                  'International participation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <FaCheckCircle className="text-blue-600 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp} className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">Conference Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                {[
                  { num: '4th',  label: 'Edition' },
                  { num: '15+',  label: 'Tracks' },
                  { num: '2027', label: 'Year' },
                  { num: '100+', label: 'Expected Papers' },
                ].map((s) => (
                  <div key={s.num} className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <p className="text-xl font-bold text-blue-700">{s.num}</p>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
