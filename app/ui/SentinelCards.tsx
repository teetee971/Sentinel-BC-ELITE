"use client";
export default function SentinelCards() {
  return (
    <section className="w-full py-24 bg-black flex flex-col items-center">
      <h2 className="text-4xl font-bold text-cyan-400 tracking-widest mb-12">
        SENTINEL SYSTEM ARCHITECTURE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-11/12 max-w-7xl">

        {/* CARD A */}
        <div className="border border-cyan-500/40 rounded-xl p-6 bg-black/40 backdrop-blur-lg shadow-[0_0_25px_rgba(0,255,255,0.25)] hover:shadow-[0_0_35px_rgba(0,255,255,0.5)] transition">
          <h3 className="text-cyan-300 font-semibold text-xl mb-3">
            A — Backend API Routes
          </h3>
          <p className="text-gray-300 text-sm mb-4">(Cloudflare-compatible)</p>
          <ul className="text-gray-400 space-y-2">
            <li>• API intégrées au frontend</li>
            <li>• Déploiement automatique</li>
            <li>• Ultra clean</li>
          </ul>
        </div>

        {/* CARD B */}
        <div className="border border-cyan-500/40 rounded-xl p-6 bg-black/40 backdrop-blur-lg shadow-[0_0_25px_rgba(0,255,255,0.25)] hover:shadow-[0_0_35px_rgba(0,255,255,0.5)] transition">
          <h3 className="text-cyan-300 font-semibold text-xl mb-3">
            B — Sentinel Core Shield
          </h3>
          <p className="text-gray-300 text-sm mb-4">(niveau entreprise)</p>
          <ul className="text-gray-400 space-y-2">
            <li>• Protection complète</li>
            <li>• Détection avancée</li>
            <li>• Super robuste</li>
          </ul>
        </div>

        {/* CARD C */}
        <div className="border border-green-500/40 rounded-xl p-6 bg-black/40 backdrop-blur-lg shadow-[0_0_25px_rgba(0,255,0,0.25)] hover:shadow-[0_0_35px_rgba(0,255,0,0.5)] transition">
          <h3 className="text-green-300 font-semibold text-xl mb-3">
            C — Sentinel Quantum Vanguard
          </h3>
          <p className="text-gray-300 text-sm mb-4">(niveau militaire)</p>
          <ul className="text-gray-400 space-y-2">
            <li>• Systèmes quantiques</li>
            <li>• Défense autonome</li>
            <li>• Surveillance continue</li>
          </ul>
        </div>

      </div>
    </section>
  );
}