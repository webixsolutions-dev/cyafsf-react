export default function Card({ tag, title, children, footer, accent = 'teal' }) {
  const accentMap = {
    teal: 'from-teal to-navy',
    coral: 'from-coral to-navy',
    gold: 'from-gold to-navy',
  };
  return (
    <article className="bg-white border border-cream rounded-md overflow-hidden flex flex-col">
      <div className={`h-[150px] bg-gradient-to-br ${accentMap[accent] || accentMap.teal}`} aria-hidden="true" />
      <div className="p-6 flex flex-col gap-2 flex-1">
        {tag && <span className="card-tag">{tag}</span>}
        <h3 className="text-xl">{title}</h3>
        <div className="text-ink">{children}</div>
        {footer && <div className="mt-auto pt-2">{footer}</div>}
      </div>
    </article>
  );
}
