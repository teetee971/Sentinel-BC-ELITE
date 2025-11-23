import Image from "next/image";

export default function Pegasus() {
  return (
    <section className="w-full py-24 bg-black flex flex-col items-center">
      <h2 className="text-4xl font-bold text-green-400 tracking-widest mb-10">
        PEGASUS THREAT SCAN
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl text-center mb-12">
        Analyse avancée des menaces type Pegasus, Zero-Click, IMSI Catcher,
        comportement anormal, réseau et signaux baseband.
      </p>

      <div className="relative w-10/12 max-w-5xl">
        <div className="absolute inset-0 blur-xl bg-green-500/20"></div>

        <Image
          src="/images/Interface de scan Pegasus futuriste.png"
          alt="Pegasus Scan Interface"
          width={1600}
          height={1000}
          className="relative rounded-xl shadow-[0_0_40px_rgba(0,255,150,0.3)]"
        />
      </div>
    </section>
  );
}