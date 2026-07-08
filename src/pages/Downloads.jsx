import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } })
};

const downloads = [
  { title: 'Conference Brochure',         desc: 'Detailed conference information and scope', file: '/Brochure_new.pdf',                      size: '811 KB', color: 'border-t-blue-600' },
  { title: 'IEEE Template (A4)',           desc: 'IEEE paper template — A4 paper size',        file: '/conference-template-a4.docx',            size: '30 KB',  color: 'border-t-blue-600' },
  { title: 'IEEE Template (Letter)',       desc: 'IEEE paper template — US Letter size',        file: '/conference-template-letter.docx',         size: '30 KB',  color: 'border-t-blue-600' },
  { title: 'PPT Template',                desc: 'Presentation template for the conference',    file: '/ICPC2T-2025_format.pptx',               size: '831 KB', color: 'border-t-amber-500' },
  { title: 'Bank Details',                desc: 'Bank account details for fee payment',        file: '/bankdetails.pdf',                         size: '174 KB', color: 'border-t-green-600' },
  { title: 'Registration Form',           desc: 'Fill and submit along with payment proof',    file: '/Registration.docx',                      size: '16 KB',  color: 'border-t-green-600' },
  { title: 'Camera Ready Instructions',   desc: 'Guidelines for final manuscript submission',  file: '/CAMERAREADY Instruction (2).pdf',        size: '446 KB', color: 'border-t-red-500'  },
];

export default function Downloads() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Downloads</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
          <p className="text-blue-100 mt-4 text-sm">Templates, forms, and resources for ICPC2T 2027</p>
        </div>
      </div>

      <div className="section-pad">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionHeading title="Resources & Templates" subtitle="Download the necessary files for your paper submission and conference registration." />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {downloads.map((dl, i) => (
            <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1} variants={fadeUp}
              className={`card border-t-4 ${dl.color} p-5 flex flex-col h-full group hover:shadow-md transition-shadow`}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors shrink-0">
                <FaDownload className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-blue-700 transition-colors">{dl.title}</h3>
              <p className="text-gray-500 text-xs mb-auto leading-relaxed pb-4">{dl.desc}</p>
              {dl.size && <span className="tag text-[10px] mb-3 inline-block self-start">{dl.size}</span>}
              <a href={dl.file} target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-xs py-2 mt-2 flex items-center gap-2">
                <FaDownload className="text-[10px]" /> Download
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
