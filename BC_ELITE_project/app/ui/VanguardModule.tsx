import Image from "next/image";

export default function VanguardModule() {
  return (
    <section className="w-full py-24 bg-black flex flex-col items-center">
      <h2 className="text-4xl font-bold text-cyan-400 tracking-widest mb-10">
        SENTINEL QUANTUM VANGUARD
      </h2>

      <p className="text-gray-400 text-lg max-w-4xl text-center mb-12">
        Technologie militaire avancée — protection autonome, renforcement
        quantique, analyse comportementale en temps réel et défense continue.
      </p>

      <div className="relative w-10/12 max-w-5xl">
        <div className="absolute inset-0 blur-xl bg-cyan-600/20"></div>

        <Image
          src="/images/Interface futuriste de défense SENTINEL.png"
          alt="Sentinel Vanguard Interface"
          width={1600}
          height={1000}
          className="relative rounded-xl shadow-[0_0_40px_rgba(0,200,255,0.3)]"
        />
      </div>
    </section>
  );
}