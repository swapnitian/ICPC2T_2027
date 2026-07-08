import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } })
};

const steps = [
  { num: 1, title: 'Received',               desc: 'Papers with a relevant ID assigned based on conference topic and track.' },
  { num: 2, title: 'Screening Review',       desc: 'TPC checks relevance, plagiarism, paper quality, figures, and novelty.' },
  { num: 3, title: 'Technical Review',       desc: 'Papers passing screening are forwarded for peer technical review.' },
  { num: 4, title: 'Revision',               desc: 'Authors notified of outcomes. Revised manuscripts due within 15 days.' },
  { num: 5, title: 'Re-Review',              desc: 'Revised papers returned to reviewers for final validation.' },
  { num: 6, title: 'Accept / Reject',        desc: 'Final decision by organizing chair based on reviewer recommendations.' },
  { num: 7, title: 'Camera Ready Status',    desc: 'Tracking of camera-ready paper receipt after acceptance.' },
  { num: 8, title: 'Registration Status',    desc: 'Tracking of author registration for each accepted paper.' },
];

export default function Submission() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Submission Guidelines</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
          <p className="text-blue-100 mt-4 text-sm">ICPC2T 2027 — Call for Papers</p>
        </div>
      </div>

      <div className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Call for Papers */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="card p-7">
              <h2 className="font-bold text-gray-900 text-xl mb-2">Call for Papers</h2>
              <div className="h-0.5 w-10 bg-blue-600 rounded-full mb-5" />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>ICPC2T 2027 invites full-length original research contributions from researchers, professionals from industries, R&D organizations, academic institutions, and government departments worldwide.</p>
                <p>Manuscripts not exceeding <strong className="text-gray-900">six (6) pages</strong> in IEEE double column format are accepted. Papers must be original, unpublished, and not under review elsewhere.</p>
                <p>Submissions must be made electronically via the <strong className="text-gray-900">CMT portal</strong> (Microsoft Research). All submitted manuscripts undergo rigorous peer review.</p>
              </div>
              <div className="mt-5 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3 text-sm">
                <span className="text-2xl">🏆</span>
                <span className="font-semibold text-blue-800">Proceedings submitted for indexing in IEEE Xplore (Scopus Indexed).</span>
              </div>
            </motion.div>

            {/* Instructions */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp} className="card p-7">
              <h2 className="font-bold text-gray-900 text-xl mb-2">Instructions to Participants</h2>
              <div className="h-0.5 w-10 bg-blue-600 rounded-full mb-5" />
              <ol className="space-y-4">
                {[
                  'Visit the ICPC2T 2027 website for paper submission instructions.',
                  'The sample IEEE paper template is available in the Download section.',
                  'Papers must not exceed SIX pages. Non-IEEE format papers will NOT be considered.',
                  'Authors of accepted papers will be invited for oral presentation. At least one author must register for each paper.',
                  'Selected papers may be published in IEEE Transaction on Industry Applications or IEEE IAS Magazine.',
                  'Details of online and offline presentation modes will be made available on the conference website.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Review Process */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fadeUp} className="card p-7">
              <h2 className="font-bold text-gray-900 text-xl mb-2">Paper Review Process</h2>
              <div className="h-0.5 w-10 bg-blue-600 rounded-full mb-1" />
              <p className="text-xs text-red-500 font-semibold italic mb-5">No paper will be accepted without completing the full review process.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-colors">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">{s.num}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Camera Ready */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={3} variants={fadeUp} className="card p-7">
              <h2 className="font-bold text-gray-900 text-xl mb-2">Camera-Ready Instructions</h2>
              <div className="h-0.5 w-10 bg-blue-600 rounded-full mb-5" />
              <ol className="space-y-4">
                {[
                  'Log in to CMT to view reviewer comments and upload the final camera-ready paper.',
                  'Camera-ready papers must strictly follow the IEEE Template. Non-compliant papers may not appear in IEEE Xplore.',
                  'Plagiarism must be below 30% (using standard plagiarism checking software).',
                  'Maximum 6 pages. Up to 2 additional over-length pages allowed with extra charges. Absolute maximum: 8 pages.',
                  <>Use the copyright clearance code: <code className="bg-blue-50 border border-blue-200 text-blue-700 px-2 py-0.5 rounded text-xs font-mono font-bold">979-8-3315-9055-0/26/$31.00 ©2026 IEEE</code></>,
                  <>Check PDF compliance at <a href="https://www.pdf-express.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">pdf-express.org</a> — Conference Code: <strong className="text-gray-900">68221X</strong></>,
                  'At least one author must register and present the paper (hybrid mode) for IEEE Xplore inclusion.',
                  'Submit camera-ready by 15th January 2027. Upload IEEE Copyright Form via CMT portal.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <span className="leading-relaxed flex-1">{item}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5} variants={fadeUp} className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">Downloads</h3>
              <div className="space-y-2">
                {[
                  { label: 'IEEE Template (A4)',         href: '/conference-template-a4.docx' },
                  { label: 'IEEE Template (Letter)',     href: '/conference-template-letter.docx' },
                  { label: 'PPT Template',               href: '/ICPC2T-2025_format.pptx' },
                  { label: 'Camera Ready Instructions',  href: '/CAMERAREADY Instruction (2).pdf' },
                  { label: 'Conference Brochure',        href: '/Brochure_new.pdf' },
                ].map((dl) => (
                  <a key={dl.href} href={dl.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-blue-700 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all">
                    <FaDownload className="text-blue-600 shrink-0" /> {dl.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={1.5} variants={fadeUp} className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">Submission Facts</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  { icon: '📄', text: 'Max 6 pages, IEEE double column' },
                  { icon: '🔍', text: 'Double-blind peer review' },
                  { icon: '🌐', text: 'IEEE Xplore (Scopus indexed)' },
                  { icon: '📊', text: 'Plagiarism limit: < 30%' },
                  { icon: '📢', text: 'Oral presentation required' },
                  { icon: '👤', text: 'At least one author must register' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
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
