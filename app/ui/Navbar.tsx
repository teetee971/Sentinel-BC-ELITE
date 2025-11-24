export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_0_15px_#00eaff40]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-cyan-400 text-2xl font-bold tracking-widest neon-text">
          SENTINEL VANGUARD
        </h1>

        {/* Menu */}
        <nav className="flex gap-8 text-sm text-gray-300">
          <a className="hover:text-cyan-400 transition">Accueil</a>
          <a className="hover:text-cyan-400 transition">Technologie</a>
          <a className="hover:text-cyan-400 transition">Scan Pegasus</a>
          <a className="hover:text-cyan-400 transition">Comparaison</a>
        </nav>
      </div>
    </header>
  );
}