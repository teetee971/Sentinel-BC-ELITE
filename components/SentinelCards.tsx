const sentinelModules = [
  {
    code: "Sentinel A",
    title: "Command & Recon",
    description: "Supervision réseau globale, corrélation des alertes inter-op et pilotage des drones logiciels.",
    metrics: ["92 flux surveillés", "Auth militaire niveau 4", "Escalade automatique"],
  },
  {
    code: "Sentinel B",
    title: "Forensics Core",
    description: "Extraction des artefacts, reconstruction de la kill chain et analyse post-mortem en sandbox chiffrée.",
    metrics: ["Rétention 180 j", "Analyse GPU", "Rapports OTAN"],
  },
  {
    code: "Sentinel C",
    title: "Threat Disruptor",
    description: "Blocage des commandes C2, injection de leurres, isolement automatique des segments vulnérables.",
    metrics: ["Neutralisations 128", "Honeynets 24", "Temps de coupure 1.6s"],
  },
];

export default function SentinelCards() {
  return (
    <section
      id="sentinels"
      className="rounded-3xl border border-cyan-500/15 bg-slate-950/80 px-6 py-16 shadow-[0_0_80px_rgba(0,234,255,0.14)] backdrop-blur-2xl sm:px-10 lg:px-16"
    >
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">Escadrille Sentinel</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Cartographie des unités A / B / C</h2>
        </div>
        <p className="max-w-xl text-sm text-slate-300 sm:text-right">
          Chaque Sentinel opère comme un bunker numérique autonome et se synchronise avec le noyau BC-ELITE pour distribuer les contre-mesures au milliseconde près.
        </p>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {sentinelModules.map((module) => (
          <article
            key={module.code}
            className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950/85 via-slate-950/70 to-slate-900/60 p-7 shadow-[0_0_70px_rgba(0,234,255,0.12)] transition-transform duration-300 will-change-transform hover:-translate-y-1"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#00eaff18,transparent_75%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="relative space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.45em] text-cyan-200">
                {module.code}
              </span>
              <h3 className="text-2xl font-semibold text-white">{module.title}</h3>
              <p className="text-sm text-slate-300">{module.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-cyan-200">
                {module.metrics.map((metric) => (
                  <li key={metric} className="flex items-center gap-3">
                    <span className="h-1 w-8 rounded-full bg-cyan-400/70" aria-hidden />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}