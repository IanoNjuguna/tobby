import { useState, useEffect } from 'react';

export default function TermsOfService() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-black to-emerald-950">
      {/* Navbar */}
      <nav className={`inset-x-0 top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 transition-all duration-300 ${isScrolled ? 'fixed' : 'absolute'
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-8 py-5">
          <h1 className="text-xl sm:text-2xl tracking-tight text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
            TOBILLION HOMES
          </h1>
          <div className="flex gap-4 sm:gap-12 items-center">
            <a href="/" className="text-white/80 hover:text-white transition-colors text-sm tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>
              HOME
            </a>
            <a href="#about" className="hidden md:block text-white/80 hover:text-white transition-colors text-sm tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>
              ABOUT
            </a>
            <button
              className="hidden sm:block px-8 py-2.5 bg-[#FAFAFA] text-black hover:bg-[#F97316] transition-all text-xs sm:text-sm tracking-widest font-bold shadow-[3px_3px_0px_0px_#F97316] hover:shadow-[3px_3px_0px_0px_#FAFAFA] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <h1
            className="text-4xl sm:text-6xl text-white mb-12"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Terms of Service
          </h1>

          <div className="space-y-8 text-neutral-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            <section className="p-8 border-l-4 border-[#F97316] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">1. Acceptance of Terms</h2>
              <p className="leading-relaxed mb-4">
                You agree to be bound by these Terms of Service. These terms govern your relationship with Tobillion Homes.
              </p>
              <p className="leading-relaxed">
                These terms apply to all visitors, users, and clients of our platform.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#FAFAFA] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">2. Services Description</h2>
              <p className="leading-relaxed mb-4">
                Tobillion Homes provides comprehensive real estate concierge services including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Property consultation and needs assessment</li>
                <li>Access to exclusive and off-market property listings</li>
                <li>Property viewing coordination and scheduling</li>
                <li>Market analysis and property valuation</li>
                <li>Offer preparation and negotiation services</li>
                <li>Transaction coordination and closing assistance</li>
                <li>Referrals to mortgage lenders, inspectors, and attorneys</li>
                <li>Post-closing support and relocation services</li>
              </ul>
              <p className="leading-relaxed mt-4">
                All services are provided in compliance with applicable laws and regulations. Service availability may vary based on market conditions and your needs.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#F97316] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">3. Client Eligibility and Responsibilities</h2>
              <p className="leading-relaxed mb-4">
                Clients must meet the following requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 18 years of age and legally competent to enter contracts</li>
                <li>Provide accurate and complete information regarding financial qualifications</li>
                <li>Maintain timely communication regarding property interests and decisions</li>
                <li>Adhere to scheduled property viewing appointments with reasonable notice for cancellations</li>
                <li>Provide necessary documentation for mortgage pre-approval and transaction processing</li>
                <li>Act in good faith throughout all real estate transactions</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Clients are responsible for conducting their own due diligence on properties and are encouraged to seek independent legal and financial advice.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#FAFAFA] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">4. Agency Relationships</h2>
              <p className="leading-relaxed mb-4">
                Tobillion Homes operates under the following agency relationships:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Buyer Agency:</strong> We represent the buyer's interests in property transactions</li>
                <li><strong>Seller Agency:</strong> We represent the seller's interests in property marketing and sale</li>
                <li><strong>Dual Agency:</strong> With full disclosure, we may represent both parties with informed consent</li>
                <li><strong>Transaction Brokerage:</strong> We facilitate transactions without representing either party</li>
              </ul>
              <p className="leading-relaxed mt-4">
                All agency relationships are clearly defined in writing before any property showing or offer submission. Fiduciary duties vary based on the type of agency relationship established.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#F97316] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">5. Fees and Commission Structure</h2>
              <p className="leading-relaxed mb-4">
                Our fee structure is as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Buyer Representation:</strong> Typically paid by seller as part of transaction closing costs</li>
                <li><strong>Seller Representation:</strong> Commission percentage of final sale price (disclosed in listing agreement)</li>
                <li><strong>Consultation Services:</strong> Hourly or flat fee for specific services</li>
                <li><strong>Marketing Fees:</strong> Additional charges for premium marketing packages</li>
              </ul>
              <p className="leading-relaxed mt-4">
                All fees are disclosed in writing before service commencement. No hidden charges will be applied. Commission rates comply with industry standards and local regulations.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#FAFAFA] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">6. Property Information and Accuracy</h2>
              <p className="leading-relaxed mb-4">
                While we strive for accuracy, please note:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Property information is provided by sellers and third-party sources</li>
                <li>All measurements, square footage, and property details should be independently verified</li>
                <li>Property availability and pricing are subject to change without notice</li>
                <li>We recommend professional inspections for all property purchases</li>
                <li>Virtual tours and photographs may not reflect current property conditions</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Tobillion Homes is not responsible for errors or omissions in property information provided by third parties.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#F97316] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">7. Offer and Negotiation Process</h2>
              <p className="leading-relaxed mb-4">
                The offer process includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All offers must be submitted in writing with appropriate documentation</li>
                <li>Client authorization is required for all offer submissions and counteroffers</li>
                <li>Multiple offer situations are handled according to seller instructions and legal requirements</li>
                <li>Price negotiations are conducted based on market analysis and client instructions</li>
                <li>All contract terms must be reviewed by client's legal counsel before execution</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We provide guidance and recommendations throughout the negotiation process, but all final decisions remain with the client.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#FAFAFA] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">8. Confidentiality and Privacy</h2>
              <p className="leading-relaxed mb-4">
                We maintain strict confidentiality regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Client financial information and qualification details</li>
                <li>Property search criteria and preferences</li>
                <li>Offer amounts and negotiation strategies</li>
                <li>Personal circumstances affecting real estate decisions</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Information is only shared with necessary third parties (lenders, inspectors, attorneys) with client consent. We comply with all applicable privacy laws and regulations.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#F97316] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">9. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                Tobillion Homes' liability is limited as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We are not liable for decisions made by clients based on our recommendations</li>
                <li>We are not responsible for third-party service provider performance</li>
                <li>Our total liability is limited to the commission earned on a specific transaction</li>
                <li>We are not liable for consequential, indirect, or punitive damages</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Clients are encouraged to obtain independent professional advice for legal, financial, and tax matters related to real estate transactions.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#FAFAFA] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">10. Termination of Services</h2>
              <p className="leading-relaxed mb-4">
                Services may be terminated under the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Either party may terminate with written notice per agency agreement terms</li>
                <li>Client may terminate at any time for buyer representation</li>
                <li>Seller termination may be subject to marketing costs and commission obligations</li>
                <li>Termination does not affect obligations incurred prior to termination date</li>
              </ul>
              <p className="leading-relaxed mt-4">
                All active transactions at time of termination will be completed according to the terms of the original agreement.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#F97316] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">11. Dispute Resolution</h2>
              <p className="leading-relaxed mb-4">
                Disputes will be resolved through the following process:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Informal negotiation between parties</li>
                <li>Mediation through neutral third-party mediator</li>
                <li>Binding arbitration if mediation fails</li>
                <li>All disputes governed by laws of Kenya</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Each party bears their own costs for dispute resolution, except as otherwise required by law.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#FAFAFA] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">12. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on our website, including property listings, photographs, videos, and written materials, is protected by copyright and other intellectual property laws. Unauthorized use or reproduction is strictly prohibited.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#F97316] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">13. Force Majeure</h2>
              <p className="leading-relaxed">
                We are not liable for failures to perform due to events beyond our control, including natural disasters, acts of war, terrorism, pandemics, or government regulations that prevent service delivery.
              </p>
            </section>

            <section className="p-8 border-l-4 border-[#FAFAFA] bg-white/5">
              <h2 className="text-2xl mb-4 font-bold text-white">14. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                For questions about these terms or our services:
              </p>
              <div className="bg-black/20 p-4 rounded">
                <p className="mb-2"><strong>Email:</strong> tobillionhomes@gmail.com</p>
                <p className="mb-2"><strong>Phone:</strong> +254 758 264 337</p>
                <p className="mb-2"><strong>Address:</strong> Nairobi, Kenya</p>
                <p><strong>Response Time:</strong> Within 48 hours for all inquiries</p>
              </div>
            </section>

            <section className="pt-8">
              <p className="text-sm opacity-60">Last Updated: {new Date().getFullYear()}</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
