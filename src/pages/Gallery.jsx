import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

export default function Gallery() {
  return (
    <div className="pt-[88px] bg-[#050B14] min-h-screen relative">
      <div className="absolute inset-0 bg-mesh z-0 opacity-40" />

      <div className="bg-[#050B14]/80 backdrop-blur-md border-b border-white/5 py-16 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white">Gallery</h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#00F0FF] to-[#0066FF] rounded-full mx-auto mt-6 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
          <p className="text-gray-400 mt-5 text-lg">Glimpses of NIT Raipur and Previous Conferences</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20 relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionHeading title="Photo Gallery" subtitle="Moments from previous conferences and our beautiful campus." light={true} />
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="glass-panel rounded-3xl p-10 sm:p-16 text-center max-w-2xl mx-auto mt-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF] rounded-full filter blur-[80px] opacity-20" />
          
          <div className="w-24 h-24 bg-gradient-to-br from-[#0066FF] to-[#8A2BE2] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(138,43,226,0.3)] relative z-10">
            <span className="text-4xl">📸</span>
          </div>
          
          <h2 className="text-2xl font-bold text-white font-heading mb-4 relative z-10">Gallery Will Be Updated Soon</h2>
          
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto relative z-10">
            High-quality photos from the campus, auditorium, previous conferences, and technical sessions are currently being curated and will be added here shortly.
          </p>
          
          <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest">
              Check back later
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
