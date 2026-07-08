export default function SectionHeading({ title, subtitle, center = true }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      <h2 className="section-title">{title}</h2>
      <div className={`h-1 w-16 rounded-full mt-3 bg-blue-600 ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`mt-4 text-base text-gray-500 max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
