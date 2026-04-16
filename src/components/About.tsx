const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-standard relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="hidden lg:block group relative overflow-hidden border border-white/5 shadow-[8px_8px_0px_0px_transparent] hover:shadow-[8px_8px_0px_0px_#F97316] transition-shadow duration-300">
            <img
              src="/family.jpg"
              alt="Family viewing luxury home"
              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
                Our story
              </p>
              <h3 className="mt-3 text-3xl text-white font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                Family-first luxury living
              </h3>
            </div>
          </div>
          <div>
            <h2
              className="text-5xl text-white mb-8 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              What sets us apart
            </h2>
            <ul className="space-y-4 text-lg text-neutral-300 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              <li className="flex items-start">
                <span className="text-[#FAFAFA] mr-3">·</span>
                <span>Exclusive access to off-market and pre-market opportunities in Nairobi's prime neighborhoods</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FAFAFA] mr-3">·</span>
                <span>Tailored advisory</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FAFAFA] mr-3">·</span>
                <span>End-to-end service, i.e: valuation, negotiation, due diligence, and closing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FAFAFA] mr-3">·</span>
                <span>A network of trusted architects, designers, and legal advisors</span>
              </li>
            </ul>
            <a
              href="https://wa.me/254758264337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#FAFAFA] text-black hover:bg-[#F97316] transition-all tracking-widest font-bold shadow-[4px_4px_0px_0px_#F97316] hover:shadow-[4px_4px_0px_0px_#FAFAFA] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              BOOK A HOUSE TOUR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
