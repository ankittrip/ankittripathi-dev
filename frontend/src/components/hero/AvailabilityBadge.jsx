export default function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2.5 backdrop-blur-sm">

      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
      </span>

      <span className="text-sm font-medium tracking-wide text-emerald-300">
        Open to Full Stack, Backend & AI Engineering Roles
      </span>

    </div>
  );
}
