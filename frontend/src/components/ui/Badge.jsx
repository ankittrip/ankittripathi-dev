export default function Badge({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-sky-500/20
        bg-sky-500/10
        px-3
        py-1.5
        text-xs
        font-medium
        text-sky-300
      "
    >
      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />

      {children}
    </span>
  );
}