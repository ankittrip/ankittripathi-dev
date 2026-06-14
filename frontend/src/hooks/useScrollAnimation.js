import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.remove(
            "opacity-0",
            "translate-y-10"
          );

          entry.target.classList.add(
            "opacity-100",
            "translate-y-0"
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
      }
    );

    const elements =
      document.querySelectorAll("[data-animate]");

    elements.forEach((element) => {
      element.classList.add(
        "opacity-0",
        "translate-y-10",
        "transition-all",
        "duration-700"
      );

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}