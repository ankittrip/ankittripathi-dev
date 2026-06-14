
export default function HeroStats() {
  const stats = [
  {
    value: "4+",
    label: "Flagship Projects",
    description: "AI & Backend Systems",
  },
  {
    value: "Redis",
    label: "Caching & Queues",
    description: "BullMQ Processing",
  },
  {
    value: "Real-Time",
    label: "Socket.IO Systems",
    description: "Live Updates",
  },
];

  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/60
            p-6
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-sky-500/40
          "
        >
          <h3 className="text-3xl font-bold text-white">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm font-medium text-slate-300">
            {stat.label}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}

