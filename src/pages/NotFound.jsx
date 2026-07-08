import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050B14] flex items-center justify-center pt-[88px] px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh z-0 opacity-50" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0066FF] to-[#8A2BE2] rounded-full filter blur-[150px] opacity-20 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel rounded-3xl p-10 sm:p-16 text-center max-w-xl w-full relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[#00F0FF]/20"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-50" />
        
        <h1 className="text-[150px] sm:text-[200px] font-bold font-heading leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none mb-4">
          404
        </h1>
        
        <h2 className="text-2xl sm:text-4xl font-bold text-white font-heading mb-6 tracking-wide">
          Signal Lost
        </h2>
        
        <p className="text-gray-400 mb-10 text-sm sm:text-base leading-relaxed">
          The transmission you are looking for has been interrupted or does not exist in our current database. Please realign your navigation.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0066FF] to-[#00F0FF] text-white px-8 py-4 rounded-xl font-bold font-heading hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 transition-all w-full sm:w-auto"
        >
          <span className="text-lg">⟵</span> Return to Base
        </Link>
      </motion.div>
    </div>
  );
}
