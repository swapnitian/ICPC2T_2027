import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const dates = [
  { event: 'Paper Submission Opens',         date: '1st May, 2026',        icon: '📝', highlight: false },
  { event: 'Full Paper Submission Deadline', date: '1st October, 2026',    icon: '📌', highlight: false },
  { event: 'Acceptance Notification',        date: '15th November, 2026',  icon: '✉️', highlight: false },
  { event: 'Camera Ready Paper Due',         date: '15th December, 2026',  icon: '📄', highlight: false },
  { event: 'Registration Deadline',          date: '15th January, 2027',   icon: '🏷️', highlight: false },
  { event: 'Conference Dates',               date: 'March 3, 2027',        icon: '🎓', highlight: true },
];

export default function ImportantDates() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Important Dates</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
          <p className="text-blue-100 mt-4 text-sm">Mark your calendar — ICPC2T 2027</p>
        </div>
      </div>

      <div className="section-pad">
        <SectionHeading title="Key Deadlines" subtitle="All deadlines are at 11:59 PM IST (UTC+5:30). Dates are subject to change — check back for updates." />

        <div className="max-w-3xl mx-auto space-y-4">
          {dates.map((d, i) => (
            <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp}
              className={`card flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 ${
                d.highlight ? 'border-l-4 border-l-blue-600 bg-blue-600' : 'hover:shadow-md hover:border-blue-100'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{d.icon}</span>
                <div>
                  <p className={`font-semibold ${d.highlight ? 'text-white' : 'text-gray-900'}`}>{d.event}</p>
                  {d.highlight && <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Conference Day</span>}
                </div>
              </div>
              <span className={`font-bold text-sm sm:text-base whitespace-nowrap px-4 py-2 rounded-lg ${
                d.highlight ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700 border border-blue-100'
              }`}>{d.date}</span>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="card p-6 border-l-4 border-l-blue-600"
          >
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaInfoCircle className="text-blue-600" /> Important Notes
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">•</span> Paper submission is via the CMT portal (link on submission page).</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">•</span> At least one author must register for each accepted paper.</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">•</span> Queries: <a href="mailto:icpc2t_2027@nitrr.ac.in" className="text-blue-600 font-semibold hover:underline">icpc2t_2027@nitrr.ac.in</a></li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="card p-6 border-l-4 border-l-amber-500 bg-amber-50"
          >
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">📢</span> Announcements
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 shrink-0" /> Paper Submission Opens: 1st May, 2026</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" /> Registration Details: Now Available</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" /> Acceptance Notification: 15th Nov, 2026</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
