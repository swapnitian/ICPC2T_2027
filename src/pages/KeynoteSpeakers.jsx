import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

export default function KeynoteSpeakers() {
  return (
    <div className="pt-[88px] bg-[#050B14] min-h-screen relative">
      <div className="absolute inset-0 bg-mesh z-0 opacity-40" />

      <div className="bg-[#050B14]/80 backdrop-blur-md border-b border-white/5 py-16 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white">Keynote Speakers</h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#00F0FF] to-[#0066FF] rounded-full mx-auto mt-6 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
          <p className="text-gray-400 mt-5 text-lg">Distinguished experts sharing their insights</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20 relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionHeading title="Keynote Speakers" subtitle="Eminent speakers from around the world will deliver keynote addresses during the conference." light={true} />
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="glass-panel rounded-3xl p-10 sm:p-16 text-center max-w-2xl mx-auto mt-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A2BE2] rounded-full filter blur-[80px] opacity-20" />
          
          <div className="w-24 h-24 bg-gradient-to-br from-[#0066FF] to-[#8A2BE2] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,102,255,0.3)] relative z-10">
            <span className="text-4xl">🎙️</span>
          </div>
          
          <h2 className="text-2xl font-bold text-white font-heading mb-4 relative z-10">To Be Updated Soon</h2>
          
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto relative z-10">
            The list of keynote speakers is currently being finalized. Please check back later for updates on the distinguished experts who will be joining us.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
