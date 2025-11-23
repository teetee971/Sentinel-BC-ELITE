const scanLayers = [
  {
    title: "Telemetry Mesh",
    detail: "Capture des signaux biométriques, IoT et réseaux isolés en 4.2 µs.",
  },
  {
    title: "Zero-Click Resolver",
    detail: "Détection Pegasus / NSO, corrélation des vecteurs sans interaction humaine.",
  },
  {
    title: "Quantum Threat Graph",
    detail: "Cartographie des dépendances et priorisation automatique des menaces critiques.",
  },
];

const detectionStats = [
  {
    label: "Signatures Malwares",
    value: "48 920",
    caption: "Mises à jour toutes les 6 minutes",
  },
  {
    label: "Zero-Day Bloqués",
    value: "131",
    caption: "Sur les 30 derniers jours",
  },
  {
    label: "Segments isolés",
    value: "62",
    caption: "Bulle de confinement automatique",
  },
];

export default function Pegasus() {
  return (
    <section
      id="scan"
      className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-slate-950/80 px-6 py-16 shadow-[0_0_90px_rgba(0,234,255,0.12)] backdrop-blur-2xl sm:px-10 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
      />

      <header className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-300">Pegasus Zero-Click Sentinel</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Scan avancé réseau, mobile et signaux classifiés.
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Les pipelines d&apos;inspection neuronale identifient les vecteurs Pegasus, isolent instantanément les ports compromis et modélisent les chemins d&apos;exfiltration.
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-cyan-500/20 bg-slate-950/70 px-5 py-4 text-xs text-cyan-200">
          <span className="rounded-full bg-lime-300/20 px-3 py-1 font-semibold text-lime-200">Mode actif</span>
          <span>Déploiement Cloudflare Edge</span>
        </div>
      </header>

      <div className="relative mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-cyan-500/15 bg-slate-950/80 p-6 shadow-[0_0_80px_rgba(0,234,255,0.1)]">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300">Pipeline d&apos;interception</p>
            <ul className="mt-6 grid gap-4">
              {scanLayers.map((layer) => (
                <li key={layer.title} className="group rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">{layer.title}</span>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-cyan-200 group-hover:text-cyan-100">Live</span>
                  </div>
                  <p className="mt-2 text-slate-400">{layer.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {detectionStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-6 shadow-[0_0_60px_rgba(0,234,255,0.12)]"
              >
                <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">{stat.label}</p>
                <p className="mt-3 text-3xl font-semibold text-cyan-200">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.caption}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6 rounded-3xl border border-cyan-500/15 bg-slate-950/80 p-6 shadow-[0_0_80px_rgba(0,234,255,0.1)]">
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">Timeline des signaux</p>
          <ol className="space-y-4">
            {[
              "Fingerprint réseau et bascule en sandbox isolée",
              "Corrélation avec les librairies Pegasus et vecteurs mobiles",
              "Réponse automatisée : coupure latérale / rotation de clé",
            ].map((step, index) => (
              <li key={step} className="flex gap-4 text-sm text-slate-200">
                <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-xs font-semibold text-cyan-200">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <div className="rounded-2xl border border-lime-300/20 bg-lime-300/10 p-5 text-xs text-lime-100">
            <p className="font-semibold uppercase tracking-[0.45em]">Anomalies majeures</p>
            <p className="mt-2 text-sm">
              Aucun pattern Pegasus actif. Renforcement automatique des politiques Zero-Trust et purge des artefacts volatiles finalisée.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}