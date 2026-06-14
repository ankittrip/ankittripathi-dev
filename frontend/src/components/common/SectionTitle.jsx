export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">

      {subtitle && (
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-sky-400
          "
        >
          {subtitle}
        </p>
      )}

      <h2
        className="
          mt-4
          text-4xl
          font-bold
          tracking-tight
          text-white
          md:text-5xl
        "
      >
        {title}
      </h2>

      {/* Premium Divider */}
      <div className="mt-6 flex justify-center">
        <div
          className="
            h-1
            w-28
            rounded-full
            bg-gradient-to-r
            from-sky-400
            via-cyan-400
            to-blue-500
            shadow-[0_0_20px_rgba(56,189,248,0.5)]
          "
        />
      </div>

    </div>
  );
}