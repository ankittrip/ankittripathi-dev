import BackgroundEffects from "../components/background/BackgroundEffects";

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">

      <BackgroundEffects />

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}