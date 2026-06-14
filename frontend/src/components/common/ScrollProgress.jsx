
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        scrollHeight > 0
          ? (scrollTop / scrollHeight) * 100
          : 0;

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">
      <div
        className="
          h-full
          bg-gradient-to-r
          from-sky-400
          via-cyan-400
          to-blue-500
          shadow-[0_0_12px_rgba(56,189,248,0.9)]
          transition-all
          duration-150
        "
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
