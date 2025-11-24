export default function Backend() {
  return (
    <section className="py-32 bg-black text-gray-300">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-cyan-400 neon-text">
            Backend NEXTJS API Routes
          </h3>
          <ul className="space-y-3">
            <li>✔ API intégrées côté serveur</li>
            <li>✔ Compatibles Cloudflare</li>
            <li>✔ Déploiement automatique</li>
            <li>✔ Ultra Clean / Ultra Secure</li>
          </ul>
        </div>

        <img
          src="/images/Interface de scan Pegasus futuriste.png"
          alt="Interface de scan Pegasus futuriste"
          className="rounded-xl shadow-[0_0_25px_#00eaff40]"
        />
      </div>
    </section>
  );
}