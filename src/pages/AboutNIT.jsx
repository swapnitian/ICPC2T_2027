import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { FaExternalLinkAlt } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

export default function AboutNIT() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">About NIT Raipur</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
        </div>
      </div>

      <div className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <SectionHeading title="National Institute of Technology Raipur" center={false} />
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p><strong className="text-gray-900">National Institute of Technology Raipur (NIT Raipur)</strong> is a premier institution established in 1956 as Government Engineering College, Raipur. It was declared an <strong className="text-gray-900">Institute of National Importance</strong> by the Government of India in 2005.</p>
                <p>The institute offers undergraduate (B.Tech.), postgraduate (M.Tech.), and doctoral (Ph.D.) programs across 12 engineering disciplines. It has established a unique identity in technical education and research in India.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <SectionHeading title="Department of Electrical Engineering" center={false} />
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>The Department of Electrical Engineering came into existence in <strong className="text-gray-900">1958</strong>. It offers B.Tech., M.Tech. (in Power Systems & Control Systems), and Ph.D. programs.</p>
                <p>The department has state-of-the-art laboratories and a highly qualified faculty dedicated to research in power electronics, renewable energy, smart grids, and intelligent control systems.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fadeUp} className="card p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Programs Offered</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {['B.Tech. (Electrical Engineering)', 'M.Tech. (Power System)', 'M.Tech. (Control System)', 'Ph.D. (Electrical Engineering)'].map((p, i) => (
                      <li key={i} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500" />{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Research Areas</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {['Power Electronics & Drives', 'Renewable Energy Integration', 'Smart Grid Technologies', 'Control Systems & Optimization', 'AI for Power Systems'].map((p, i) => (
                      <li key={i} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500" />{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5} variants={fadeUp} className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">Quick Facts</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Established', value: '1956 (as GEC Raipur)' },
                  { label: 'NIT Status', value: 'Since 2005' },
                  { label: 'Location', value: 'Raipur, Chhattisgarh' },
                  { label: 'Programs', value: 'B.Tech., M.Tech., Ph.D.' },
                  { label: 'EE Dept. Est.', value: '1958' },
                ].map((item) => (
                  <li key={item.label}>
                    <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider">{item.label}</span>
                    <p className="font-semibold text-gray-900 text-sm">{item.value}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <a href="https://www.nitrr.ac.in" target="_blank" rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-sm py-2.5 flex items-center gap-2">
                  <FaExternalLinkAlt className="text-xs" /> Visit NIT Raipur Website
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
