import { motion } from 'framer-motion';
import tracks from '../data/tracksData';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.05 } })
};

export default function Tracks() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Conference Tracks</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
          <p className="text-blue-100 mt-4 text-sm sm:text-base">15 Specialized Technical Areas — ICPC2T 2027</p>
        </div>
      </div>

      <div className="section-pad">
        <SectionHeading title="Technical Tracks" subtitle="Explore the 15 technical tracks spanning power systems, power electronics, and computing technologies." />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div key={track.id} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.15} variants={fadeUp}
                className="card p-6 group hover:border-blue-200 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <Icon className="text-blue-600 group-hover:text-white text-xl transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="tag text-xs mb-2 inline-block">{track.id}</span>
                    <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-blue-700 transition-colors">{track.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{track.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-12 card p-8 border-l-4 border-l-blue-600">
          <h3 className="font-bold text-gray-900 text-lg mb-4">Note to Authors</h3>
          <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">•</span> Papers are solicited in all areas related to power, control, and computing technologies.</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">•</span> The list of topics is illustrative and not exhaustive; authors may submit work in related areas.</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">•</span> For queries regarding track suitability, contact: <a href="mailto:icpc2t_2027@nitrr.ac.in" className="text-blue-600 font-semibold hover:underline">icpc2t_2027@nitrr.ac.in</a></li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
