import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    document.documentElement.classList.add(theme);
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme: () =>
      setTheme((prev) =>
        prev === "dark" ? "light" : "dark"
      ),
  };
}