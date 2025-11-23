import Image from "next/image";

export default function Comparison() {
  return (
    <section className="w-full py-24 bg-black flex flex-col items-center">
      <h2 className="text-4xl font-bold text-cyan-400 tracking-widest mb-12">
        WORLD LEADER COMPARISON
      </h2>

      <div className="relative w-11/12 max-w-6xl">
        <div className="absolute inset-0 blur-xl bg-cyan-500/20"></div>

        <Image
          src="/images/Comparaison des Suites de Cybersecurité.png"
          alt="Cybersecurity Comparison"
          width={2000}
          height={1300}
          className="relative rounded-xl shadow-[0_0_40px_rgba(0,255,255,0.3)]"
        />
      </div>
    </section>
  );
}