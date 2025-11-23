export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* HUD Scan animation */}
      <div className="absolute inset-0 hud-scan opacity-30"></div>

      {/* Content */}
      <div className="z-10 text-center max-w-3xl px-6">
        <h2 className="text-5xl font-extrabold text-white tracking-tight neon-text">
          SENTINEL QUANTUM VANGUARD
        </h2>

        <p className="mt-6 text-lg text-gray-300">
          Le premier système de cybersécurité militaire entièrement autonome.
        </p>

        <div className="mt-10 flex gap-6 justify-center">
          <button className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-md glow-hover">
            Lancer le Scan
          </button>
          <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-600/20">
            En savoir plus
          </button>
        </div>
      </div>

      {/* Soldier Image */}
      <img
        src="/images/Interface futuriste de défense SENTINEL.png"
        alt="Interface futuriste de défense SENTINEL"
        className="absolute right-0 bottom-0 w-[55%] opacity-90 drop-shadow-[0_0_30px_#00eaff50]"
      />
    </section>
  );
}