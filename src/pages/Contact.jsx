import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const contacts = [
  { name: "Dr. R. N. Patel", role: "Organizing Secretary", phone: "8770016399" },
  { name: "Dr. Monalisa Biswal", role: "Organizing Secretary", phone: "9437058624" },
  { name: "Dr. Surajit Sannigrahi", role: "Organizing Secretary", phone: "9547931188" },
  { name: "Dr. Saurav Raj", role: "Organizing Secretary", phone: "8470975763" }
];

export default function Contact() {
  return (
    <div className="pt-[88px] bg-[#050B14] min-h-screen relative">
      <div className="absolute inset-0 bg-mesh z-0 opacity-40" />

      <div className="bg-[#050B14]/80 backdrop-blur-md border-b border-white/5 py-16 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white">Contact Us</h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#00F0FF] to-[#0066FF] rounded-full mx-auto mt-6 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
          <p className="text-gray-400 mt-5 text-lg">Get in touch for any queries</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="glass-panel rounded-3xl p-8 border-[#00F0FF]/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF] rounded-full filter blur-[80px] opacity-20" />
              <h3 className="font-bold text-white text-xl font-heading mb-8 border-b border-white/10 pb-4 relative z-10">Conference Secretariat</h3>
              
              <div className="space-y-8 text-sm relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
                    <FaEnvelope className="text-[#00F0FF] text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                    <a href="mailto:icpc2t_2027@nitrr.ac.in" className="text-white font-medium hover:text-[#00F0FF] transition-colors text-base">
                      icpc2t_2027@nitrr.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
                    <FaMapMarkerAlt className="text-[#00F0FF] text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Address</p>
                    <div className="text-gray-300 leading-relaxed text-sm">
                      <p className="font-bold text-white">ICPC2T 2027</p>
                      <p>National Institute of Technology Raipur</p>
                      <p>G.E. Road, Raipur, Chhattisgarh – 492010</p>
                      <p>India</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="glass-panel rounded-3xl p-8 sm:p-10 h-full"
            >
              <SectionHeading title="Organizing Secretaries" center={false} light={true} />
              <p className="text-gray-400 mb-8 text-sm max-w-xl">Please contact the following members for further details and clarifications regarding the conference, paper submission, or registration.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contacts.map((contact, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover-glow group">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0066FF] to-[#8A2BE2] text-white rounded-xl flex items-center justify-center font-bold text-lg font-heading shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {contact.name.split(' ').filter(n => n !== 'Dr.').slice(0, 2).map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-white font-heading group-hover:text-[#00F0FF] transition-colors text-lg">{contact.name}</p>
                      <p className="text-gray-400 text-xs mb-2">{contact.role}</p>
                      <a href={`tel:+91${contact.phone}`} className="inline-flex items-center gap-2 text-xs font-bold text-[#00F0FF] hover:text-white transition-colors bg-[#00F0FF]/10 px-2 py-1 rounded">
                        <FaPhoneAlt /> {contact.phone}
                      </a>
                    </div>
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
