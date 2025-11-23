const comparisonRows = [
  {
    capability: "Couverture Zero-Trust",
    bcElite: "Totale, propagation automatique",
    traditional: "Partielle, configuration manuelle",
  },
  {
    capability: "Détection Zero-Click Pegasus",
    bcElite: "IA neuronale 24/7",
    traditional: "Signatures en différé",
  },
  {
    capability: "Temps de réponse incident",
    bcElite: "< 1 seconde",
    traditional: "> 12 minutes",
  },
  {
    capability: "Déploiement cloud + défense Edge",
    bcElite: "Cloudflare, Kubernetes, bare-metal",
    traditional: "Intégrations limitées",
  },
  {
    capability: "Observabilité & Forensics",
    bcElite: "Rapports OTAN, replay sandbox",
    traditional: "Logs bruts non corrélés",
  },
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-slate-950/85 px-6 py-16 shadow-[0_0_90px_rgba(0,234,255,0.14)] backdrop-blur-2xl sm:px-10 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(0,234,255,0.18),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(92,251,148,0.14),transparent_65%)]"
      />

      <div className="relative space-y-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">Comparaison stratégique</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">BC-ELITE vs solutions standards</h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Les données proviennent des évaluations BC-ELITE 2025 sur des environnements OT, IT et militaires.
          </p>
        </header>

        <div className="overflow-hidden rounded-3xl border border-cyan-500/20">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/5 text-left text-sm text-slate-200">
              <thead className="bg-white/5 text-xs uppercase tracking-[0.35em] text-cyan-200">
                <tr>
                  <th scope="col" className="px-6 py-4">Capacité clé</th>
                  <th scope="col" className="px-6 py-4">BC-ELITE</th>
                  <th scope="col" className="px-6 py-4">Solutions traditionnelles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-slate-950/70">
                {comparisonRows.map((row) => (
                  <tr key={row.capability} className="transition-colors duration-200 hover:bg-white/5">
                    <th scope="row" className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-white">
                      {row.capability}
                    </th>
                    <td className="px-6 py-4 text-sm text-cyan-200">{row.bcElite}</td>
                    <td className="px-6 py-4 text-sm text-slate-400">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6 text-sm text-cyan-100">
            <p className="text-xs uppercase tracking-[0.45em]">Indice de dominance</p>
            <p className="mt-3 text-3xl font-semibold text-cyan-100">89%</p>
            <p className="mt-1 text-slate-200">Modèles de risque couverts par BC-ELITE dans les secteurs défense, énergie, satellite.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">Retour opérationnel</p>
            <p className="mt-3 text-slate-100">
              « BC-ELITE neutralise les attaques avancées avant même que nos équipes n&apos;aient le temps d&apos;ouvrir un ticket. » — Commandement Cyber Défense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}