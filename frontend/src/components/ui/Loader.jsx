export default function Loader({
  size = "md",
}) {
  const sizes = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={`
        inline-block
        animate-spin
        rounded-full
        border-4
        border-slate-700
        border-t-sky-400
        ${sizes[size]}
      `}
    />
  );
}