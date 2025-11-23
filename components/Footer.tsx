import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-slate-950/80 py-8 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-2 text-sm">
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">BC-ELITE Command</p>
          <p className="text-sm text-slate-300">Sentinel Quantum Vanguard – Cellule Cyber Défense</p>
        </div>

        <nav className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.45em] text-slate-400">
          <Link href="mailto:operations@bc-elite.sec" className="transition-colors hover:text-cyan-200">
            Contact Ops
          </Link>
          <Link href="#scan" className="transition-colors hover:text-cyan-200">
            Scan
          </Link>
          <Link href="#vanguard" className="transition-colors hover:text-cyan-200">
            Vanguard
          </Link>
          <Link href="#comparison" className="transition-colors hover:text-cyan-200">
            Comparatif
          </Link>
        </nav>
      </div>

      <div className="mx-auto mt-6 max-w-6xl border-t border-white/5 px-4 pt-4 text-xs tracking-[0.35em] text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} BC-ELITE. Classification interne – diffusion contrôlée.
      </div>
    </footer>
  );
}