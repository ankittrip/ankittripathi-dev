```jsx
export default function ProjectTechStack({ tech }) {
  return (
    <span
      className="
        rounded-full
        border
        border-slate-700
        bg-slate-900/60
        px-3
        py-1
        text-xs
        font-medium
        text-slate-300
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-sky-500/40
        hover:text-sky-300
      "
    >
      {tech}
    </span>
  );
}
```
