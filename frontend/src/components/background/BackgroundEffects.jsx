import AuroraBackground from "./AuroraBackground";
import GridBackground from "./GridBackground";

export default function BackgroundEffects() {
  return (
    <>
      <AuroraBackground />

      <GridBackground />

      {/* Top Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-sky-500/5
          blur-[120px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/5
          blur-[120px]
        "
      />
    </>
  );
}