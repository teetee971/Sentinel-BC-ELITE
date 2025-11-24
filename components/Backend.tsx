const backendLayers = [
  {
    title: "Kernel Sentinel",
    detail: "Instrumentation du noyau, filtration des appels systèmes et verrouillage des privilèges.",
  },
  {
    title: "Trace & Replay",
    detail: "Journalisation granulaire des paquets, relecture isolée et génération d&apos;analyses forensiques.",
  },
  {
    title: "Data Fortress",
    detail: "Chiffrement quantique multi-niveaux, stockage redondant et rotation automatique des clés.",
  },
];

const backendChecks = [
  "Durcissement CIS niveau 5 et patching continu",
  "Compatibilité Cloudflare Workers, Kubernetes, bare-metal",
  "Observabilité Prometheus, Grafana et export OTAN STANAG",
];

export default function Backend() {
  return (
    <section
      id="backend"
      className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-slate-950/85 px-6 py-16 shadow-[0_0_90px_rgba(0,234,255,0.12)] backdrop-blur-2xl sm:px-10 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,234,255,0.14),transparent_55%),radial-gradient(circle_at_80%_50%,rgba(92,251,148,0.18),transparent_65%)]"
      />

      <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <article className="space-y-6">
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">Backend Defense</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Infrastructure blindée pour services critiques.</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Un socle backend calibré pour absorber les charges massives, préserver l&apos;intégrité des données et assurer la continuité de mission.
          </p>

          <ul className="space-y-3 text-sm text-cyan-200">
            {backendChecks.map((check) => (
              <li key={check} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-lime-300" aria-hidden />
                <span className="leading-relaxed">{check}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="space-y-6">
          <div className="rounded-3xl border border-cyan-500/20 bg-slate-950/70 p-6 shadow-[0_0_80px_rgba(0,234,255,0.14)]">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300">Couches de défense</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {backendLayers.map((layer) => (
                <li key={layer.title} className="rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-slate-200">
                  <p className="font-semibold text-white">{layer.title}</p>
                  <p className="mt-2 text-slate-400">{layer.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/15 to-slate-900/70 p-6 text-sm text-cyan-100">
            <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">Health check</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Charge CPU", value: "41%" },
                { label: "IO sécurisées", value: "8.4M/s" },
                { label: "Tickets ouverts", value: "0" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-center">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}