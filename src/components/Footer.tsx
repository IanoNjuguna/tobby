import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="relative text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/footer.png')] bg-cover bg-center opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/15 to-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <h3
              className="text-2xl mb-5 tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              TOBILLION HOMES
            </h3>
            <p
              className="text-neutral-400 leading-relaxed"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}
            >
              We specialize in the exclusive and iconic homes of Westlands, Riverside, Karen, Runda, Kitisuru, Loresho, Kilimani, Kileleshwa, Parklands, Kiambu Road and Syokimau.
            </p>
          </div>
          <div>
            <h4
              className="text-sm mb-6 tracking-widest text-neutral-500"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}>
              <li><Link to="/property" className="text-neutral-400 hover:text-white transition-colors">Properties</Link></li>
              <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
              <li><Link to="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4
              className="text-sm mb-6 tracking-widest text-neutral-500"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}
            >
              CONTACT
            </h4>
            <ul className="space-y-3 text-neutral-400" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}>
              <li className="flex items-center gap-3">
                <span className="text-[#FAFAFA]">📍</span> Nairobi, Kenya
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FAFAFA]">📞</span> +254 758 264 337
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FAFAFA]">📧</span> tobillionhomes@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-10 flex justify-center">
          <p
            className="text-neutral-500 text-sm"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400 }}
          >
            © {new Date().getFullYear()} Tobillion Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
