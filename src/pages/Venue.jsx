import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const howToReach = [
  { icon: '✈️', title: 'By Air', desc: 'Swami Vivekananda Airport, Raipur is ~15 km from NIT Raipur. Prepaid taxis and app-cabs are available.' },
  { icon: '🚂', title: 'By Train', desc: 'Raipur Railway Station is ~8 km from NIT Raipur. Autos, cabs, and buses are readily available.' },
  { icon: '🚌', title: 'By Bus', desc: 'Raipur has interstate bus services from major cities. ISBT is near the railway station.' },
  { icon: '🚗', title: 'By Road', desc: 'NIT Raipur is well connected by road. NH-930 (Bilaspur-Raipur) passes nearby.' },
];

const nearbyHotels = [
  'Hotel Babylon International', 'Hotel Piccadily', 'Courtyard by Marriott',
  'Hotel Ambrosia', 'GRD Residency (near NIT Raipur)',
];

export default function Venue() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Conference Venue</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
          <p className="text-blue-100 mt-4 text-sm">NIT Raipur, Chhattisgarh, India</p>
        </div>
      </div>

      <div className="section-pad">
        <SectionHeading title="National Institute of Technology Raipur" subtitle="GE Road, Raipur, Chhattisgarh – 492010, India" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Map */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="card overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <iframe
                  title="NIT Raipur Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.718258001!2d81.59952147411835!3d21.249543680464207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd8d6a57b375%3A0xcf83a8a00f6af77b!2sNational%20Institute%20of%20Technology%2C%20Raipur!5e0!3m2!1sen!2sin!4v1688000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* How to Reach */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp} className="card p-7">
              <h3 className="font-bold text-gray-900 text-lg mb-5 pb-3 border-b border-gray-100">How to Reach</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {howToReach.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-blue-50 rounded-xl p-4 border border-blue-100 hover:border-blue-300 transition-colors">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5} variants={fadeUp} className="card p-6">
              <h3 className="font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100">Venue Details</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Venue',   value: 'National Institute of Technology Raipur' },
                  { label: 'City',    value: 'Raipur' },
                  { label: 'State',   value: 'Chhattisgarh' },
                  { label: 'Country', value: 'India' },
                  { label: 'PIN',     value: '492010' },
                  { label: 'Date',    value: 'March 3, 2027' },
                ].map((item) => (
                  <li key={item.label}>
                    <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest">{item.label}</span>
                    <p className="font-semibold text-gray-900 mt-0.5">{item.value}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1.5} variants={fadeUp} className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">Nearby Hotels</h3>
              <ul className="space-y-3">
                {nearbyHotels.map((hotel, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />{hotel}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
