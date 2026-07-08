import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import {
  chiefPatron, patrons, honoraryChairs, generalChairs,
  organizingSecretaries, publicationChairs, publicityChairs,
  financeChairs, trackChairs, internationalAdvisory, nationalAdvisory,
  technicalProgramCommittee
} from '../data/committeeData';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.05 } })
};

function getInitials(name) {
  return name.split(' ').filter(n => !['Dr.', 'Prof.', 'Mr.', 'Ms.', 'Shri.'].includes(n)).slice(0, 2).map(n => n[0]).join('');
}

function MemberCard({ member }) {
  return (
    <div className="card p-4 flex items-start gap-3 hover:border-blue-200 transition-colors group">
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm shrink-0 group-hover:bg-blue-700 transition-colors">
        {getInitials(member.name)}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-blue-700 transition-colors">{member.name}</p>
        <p className="text-gray-500 text-xs mt-0.5 leading-tight">{member.role}</p>
        {member.phone && <p className="text-blue-600 text-xs mt-1 font-medium">📞 {member.phone}</p>}
        {member.email && (
          <a href={`mailto:${member.email}`} className="text-blue-600 text-xs mt-0.5 block hover:underline truncate">✉️ {member.email}</a>
        )}
      </div>
    </div>
  );
}

function CommitteeSection({ title, members, cols = 3, defaultOpen = false }) {
  const [expanded, setExpanded] = useState(defaultOpen);
  const limit = 9;
  const displayed = expanded ? members : members.slice(0, limit);

  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 rounded-full bg-blue-600" />
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <span className="tag text-xs ml-auto">{members.length} members</span>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-3`}>
        {displayed.map((m, i) => <MemberCard key={i} member={m} />)}
      </div>
      {members.length > limit && (
        <button onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800 border border-blue-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-all">
          {expanded ? `Show Less ↑` : `View all ${members.length} members ↓`}
        </button>
      )}
    </motion.div>
  );
}

export default function Committee() {
  return (
    <div className="pt-[88px] bg-[#fffbf7] min-h-screen">
      <div className="page-banner">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Organizing Committee</h1>
          <div className="h-1 w-14 rounded-full bg-amber-400 mx-auto mt-4" />
          <p className="text-blue-100 mt-4 text-sm">ICPC2T 2027 — NIT Raipur, Chhattisgarh</p>
        </div>
      </div>

      <div className="section-pad">
        {/* Chief Patron */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="card p-8 mb-12 text-center border-t-4 border-t-blue-600 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />
          <span className="tag text-xs mb-3 inline-block">Chief Patron</span>
          {chiefPatron.map((m, i) => (
            <div key={i}>
              <p className="text-2xl font-bold text-gray-900 mb-1">{m.name}</p>
              <p className="text-gray-500">{m.role}</p>
            </div>
          ))}
        </motion.div>

        <CommitteeSection title="Patron(s)" members={patrons} defaultOpen />
        <CommitteeSection title="Honorary Chair(s)" members={honoraryChairs} defaultOpen />
        <CommitteeSection title="General Chairperson" members={generalChairs} cols={2} defaultOpen />
        <CommitteeSection title="Organizing Secretaries" members={organizingSecretaries} cols={2} defaultOpen />
        <CommitteeSection title="Publication Chairs" members={publicationChairs} defaultOpen />
        <CommitteeSection title="Publicity Chairs" members={publicityChairs} />
        <CommitteeSection title="Finance Chair" members={financeChairs} defaultOpen />
        <CommitteeSection title="Track Chairs" members={trackChairs} />

        <div className="mt-16 pt-10 border-t border-gray-200">
          <SectionHeading title="Advisory Board" subtitle="(Tentative)" />
          <CommitteeSection title="International Advisory Board" members={internationalAdvisory} />
          <CommitteeSection title="National Advisory Board" members={nationalAdvisory} />
        </div>

        <div className="mt-10 pt-10 border-t border-gray-200">
          <CommitteeSection title="Technical Program Committee (Tentative)" members={technicalProgramCommittee} />
        </div>
      </div>
    </div>
  );
}
