export default function Button({
  children,
  href,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-sky-500 text-slate-950 hover:bg-sky-400 shadow-lg shadow-sky-500/20",

    secondary:
      "border border-slate-700 bg-slate-900/60 text-slate-100 hover:border-sky-500 hover:text-sky-400",
  };

  const isExternal =
    href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-0.5
        ${styles[variant]}
      `}
    >
      {children}
    </a>
  );
}
