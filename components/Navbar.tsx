import Link from "next/link";

const navigation = [
  { label: "Mission", href: "#hero" },
  { label: "Sentinels", href: "#sentinels" },
  { label: "Pegasus", href: "#scan" },
  { label: "Vanguard", href: "#vanguard" },
  { label: "Backend", href: "#backend" },
  { label: "Comparatif", href: "#comparison" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.6em] text-cyan-200">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 text-base text-cyan-200">
            BC
          </span>
          ELITE OPS
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-300 transition-colors duration-200 hover:text-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-100 transition-colors duration-200 hover:bg-cyan-500/20 md:inline-flex"
        >
          Briefing
        </Link>

        <details className="relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-200 transition hover:border-cyan-300" aria-label="Ouvrir le menu">
            <span className="sr-only">Ouvrir le menu</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-6 rounded-full bg-cyan-200" />
              <span className="block h-0.5 w-6 rounded-full bg-cyan-200" />
              <span className="block h-0.5 w-6 rounded-full bg-cyan-200" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 w-56 space-y-2 rounded-2xl border border-cyan-500/20 bg-slate-950/90 p-4 shadow-[0_0_60px_rgba(0,234,255,0.18)]">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.45em] text-slate-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-100"
            >
              Briefing
            </Link>
          </div>
        </details>
      </div>
    </nav>
  );
}