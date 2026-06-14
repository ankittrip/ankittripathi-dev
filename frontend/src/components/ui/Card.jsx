export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-sky-500/30
        ${className}
      `}
    >
      {children}
    </div>
  );
}