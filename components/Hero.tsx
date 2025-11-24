import Link from "next/link";

const heroMetrics = [
  {
    label: "Opérations neutralisées",
    value: "312",
    detail: "Interventions globales depuis 2023",
  },
  {
    label: "Taux de prévention",
    value: "99.7%",
    detail: "Menaces stoppées avant exécution",
  },
  {
    label: "Temps de réponse",
    value: "3.2 ms",
    detail: "Analyse neuronale temps réel",
  },
] as const;

const heroHighlights = [
  "Monitoring quantique distribué sur 42 zones critiques",
  "IA Sentinel de niveau militaire avec détection proactive",
  "Interopérabilité Cloudflare / Zero-Trust / réseaux classifiés",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/90 px-6 py-16 shadow-[0_0_120px_rgba(0,234,255,0.18)] backdrop-blur-3xl sm:px-10 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top,#00eaff22,transparent_60%)]"
      />

      <div className="relative flex flex-col gap-16 lg:flex-row lg:items-start">
        <div className="w-full max-w-2xl space-y-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.45em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(92,251,148,0.8)]" />
              Sentinel Quantum Vanguard
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Architecture cyberdéfense <span className="text-cyan-300">BC-ELITE</span> calibrée pour missions critiques.
            </h1>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
              Déployez un réseau de protection autonome capable de scanner, corréler et neutraliser les attaques en moins d&apos;une seconde. La plateforme intègre un moteur neuronal, une télémétrie temps réel et un contrôle militaire de bout en bout.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#scan"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition duration-300 hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
            >
              Lancer un scan stratégique
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#comparison"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 px-6 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:border-cyan-300 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Analyse comparative mondiale
            </Link>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {heroHighlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-300 shadow-[0_0_25px_rgba(0,234,255,0.08)] backdrop-blur-lg"
              >
                <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-[420px]">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950/70 p-8 shadow-[0_0_90px_rgba(0,234,255,0.2)] backdrop-blur-xl">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" aria-hidden />
            <header className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.4em] text-cyan-200">
              <span>Neural Ops Center</span>
              <span className="rounded-full border border-lime-300/40 bg-lime-300/10 px-2 py-0.5 text-lime-200">Online</span>
            </header>

            <p className="mt-6 text-sm text-slate-300">
              Fusion des signaux Pegasus, Sentinel et Vanguard orchestrée via le noyau quantique BC-ELITE. Chaque paquet réseau est fingerprinté, corrélé et classé en temps réel.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-cyan-500/20 bg-slate-950/60 px-4 py-5 text-center">
                  <dt className="text-xs uppercase tracking-[0.35em] text-slate-400">{metric.label}</dt>
                  <dd className="mt-2 space-y-1 text-cyan-200">
                    <span className="block text-2xl font-semibold">{metric.value}</span>
                    <span className="block text-xs text-slate-500">{metric.detail}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 rounded-2xl border border-white/5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-5 text-xs text-slate-300">
              <p className="font-semibold uppercase tracking-[0.35em] text-cyan-200">Protocoles actifs</p>
              <div className="mt-4 grid gap-3">
                <div className="flex items-center justify-between rounded-xl border border-cyan-500/10 bg-slate-950/70 px-4 py-3">
                  <span>GhostNet Defense</span>
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-[10px] font-semibold text-cyan-200">Live</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-cyan-500/10 bg-slate-950/70 px-4 py-3">
                  <span>Pegasus Zero-Click</span>
                  <span className="rounded-full bg-lime-400/20 px-3 py-1 text-[10px] font-semibold text-lime-200">Analyse</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-cyan-500/10 bg-slate-950/70 px-4 py-3">
                  <span>Vanguard Quantum Shield</span>
                  <span className="rounded-full bg-amber-400/20 px-3 py-1 text-[10px] font-semibold text-amber-200">Armé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}