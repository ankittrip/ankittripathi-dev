import { useEffect } from "react";

export default function Modal({
  children,
  onClose,
}) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/80
        p-4
        backdrop-blur-sm
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-4xl
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-8
          shadow-2xl
        "
      >
        {children}
      </div>
    </div>
  );
}