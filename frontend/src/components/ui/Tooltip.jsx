export default function Tooltip({
  children,
  label,
}) {
  return (
    <div className="group relative inline-flex">

      {children}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-full
          z-50
          mt-3
          -translate-x-1/2
          whitespace-nowrap
          rounded-xl
          border
          border-slate-700
          bg-slate-900/95
          px-3
          py-2
          text-xs
          text-slate-200
          opacity-0
          shadow-xl
          transition-all
          duration-200
          group-hover:opacity-100
        "
      >
        {label}
      </div>

    </div>
  );
}