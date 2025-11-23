const vanguardCapabilities = [
  {
    name: "Quantum Shield",
    description: "Projection de tunnels chiffrés dynamiques avec rotation des clés à la milliseconde.",
  },
  {
    name: "Sentinel Mesh",
    description: "Nœuds autonomes orchestrés par IA pour entourer les actifs critiques et bloquer toute propagation.",
  },
  {
    name: "Adaptive Counterstrike",
    description: "Réécrit le trafic malveillant en temps réel, applique des honeypots miroirs et trace l&apos;agresseur.",
  },
];

const vanguardTelemetry = [
  {
    label: "Latence cœur quantique",
    value: "0.8 ms",
  },
  {
    label: "Charges neutralisées",
    value: "218",
  },
  {
    label: "Dispositifs synchronisés",
    value: "4 612",
  },
];

export default function VanguardModule() {
  return (
    <section
      id="vanguard"
      className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-gradient-to-br from-slate-950/85 via-slate-950/70 to-slate-900/70 px-6 py-16 shadow-[0_0_110px_rgba(0,234,255,0.16)] backdrop-blur-2xl sm:px-10 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#00eaff15,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(110deg,rgba(92,251,148,0.18),transparent_60%)]"
      />

      <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-8">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">Module Vanguard Quantum</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Mur de défense adaptatif coordonné par IA militaire.
            </h2>
            <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
              Vanguard supervise les flux entrants, déclenche des contre-mesures IA et maintient un périmètre cybernétique renforcé en synchronisant les agents BC-ELITE.
            </p>
          </header>

          <div className="rounded-3xl border border-cyan-500/20 bg-slate-950/70 p-6 shadow-[0_0_80px_rgba(0,234,255,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300">Capacités actives</p>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {vanguardCapabilities.map((capability) => (
                <li key={capability.name} className="rounded-2xl border border-white/5 bg-white/5 p-5 text-sm text-slate-200">
                  <p className="font-semibold text-white">{capability.name}</p>
                  <p className="mt-2 text-slate-400">{capability.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6 rounded-3xl border border-cyan-500/20 bg-slate-950/70 p-6 shadow-[0_0_90px_rgba(0,234,255,0.15)]">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">Core status</p>
            <span className="rounded-full border border-lime-300/40 bg-lime-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-lime-200">
              Stable
            </span>
          </div>

          <p className="text-sm text-slate-300">
            Les flux quantiques maintiennent un anneau défensif actif autour des systèmes critiques. Les protocoles adaptatifs pivotent automatiquement entre neutralisation, diversion et confinement.
          </p>

          <dl className="grid gap-4 sm:grid-cols-3">
            {vanguardTelemetry.map((telemetry) => (
              <div key={telemetry.label} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-5 text-center">
                <dt className="text-[10px] uppercase tracking-[0.35em] text-slate-400">{telemetry.label}</dt>
                <dd className="mt-2 text-xl font-semibold text-cyan-200">{telemetry.value}</dd>
              </div>
            ))}
          </dl>

          <div className="rounded-2xl border border-white/5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-5 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">Doctrine Vanguard</p>
            <p className="mt-2">
              Surveillance continue, patching automatisé des surfaces exposées, redirection des flux suspects vers des honeynets et atténuation élastique.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}