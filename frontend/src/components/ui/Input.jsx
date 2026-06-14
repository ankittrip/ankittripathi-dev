export default function Input({
  className = "",
  ...props
}) {
  return (
    <input
      className={`
        w-full
        rounded-2xl
        border
        border-slate-800
        bg-slate-950
        px-4
        py-3
        text-slate-100
        outline-none
        transition-all
        duration-300
        placeholder:text-slate-500
        focus:border-sky-500
        focus:ring-2
        focus:ring-sky-500/20
        ${className}
      `}
      {...props}
    />
  );
}