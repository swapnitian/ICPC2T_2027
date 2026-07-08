import { useState, useEffect } from 'react';

const TARGET_DATE = new Date('2027-03-03T08:00:00');

function pad(n) { return String(n).padStart(2, '0'); }

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE - new Date();
      if (diff > 0) {
        setTime({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { label: 'Days',    value: time.days },
    { label: 'Hours',   value: pad(time.hours) },
    { label: 'Minutes', value: pad(time.minutes) },
    { label: 'Seconds', value: pad(time.seconds) },
  ];

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      {blocks.map((b, i) => (
        <div key={b.label} className="flex items-center gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 sm:px-7 sm:py-4 min-w-[72px] sm:min-w-[90px] text-center border border-white/20">
              <span className="text-3xl sm:text-5xl font-bold text-white leading-none tracking-tight font-sans">
                {b.value}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-blue-200 mt-2 font-semibold uppercase tracking-[0.15em]">{b.label}</span>
          </div>
          {i < 3 && <span className="text-2xl sm:text-4xl font-bold text-white/40 mb-6">:</span>}
        </div>
      ))}
    </div>
  );
}
