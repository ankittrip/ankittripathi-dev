export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-sky-500/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          left-0
          top-1/3
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          right-0
          top-1/2
          h-[450px]
          w-[450px]
          rounded-full
          bg-indigo-500/10
          blur-3xl
        "
      />
    </div>
  );
}