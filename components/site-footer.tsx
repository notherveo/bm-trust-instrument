import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#14213D] text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <span className="text-[1.125rem] font-semibold block mb-4">
              TRUST INSTRUMENT ADVISORY
            </span>
            <p className="text-[0.875rem] text-[#9ca3af] leading-relaxed">
              A mid-size **CPA & advisory firm** (tax, outsourced CFO, audit, wealth). The feeling: clarity is the product.
            </p>
          </div>
          <div>
            <span className="text-[0.8125rem] font-medium text-[#C9A227] block mb-3">
              Services
            </span>
            <ul className="space-y-2 text-[0.9375rem] text-[#9ca3af]">
              <li><Link href="/services" className="hover:text-white transition-colors">Tax planning</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Outsourced CFO</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Audit prep</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Wealth management</Link></li>
            </ul>
          </div>
          <div>
            <span className="text-[0.8125rem] font-medium text-[#C9A227] block mb-3">
              Company
            </span>
            <ul className="space-y-2 text-[0.9375rem] text-[#9ca3af]">
              <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <span className="text-[0.8125rem] font-medium text-[#C9A227] block mb-3">
              Contact
            </span>
            <p className="text-[0.9375rem] text-[#9ca3af]">
              123 Commerce Street, Suite 400<br />
              San Francisco, CA 94105
            </p>
            <p className="text-[0.9375rem] text-[#9ca3af] mt-2">
              +1 (415) 555-0199
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-[#2b3543] flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.8125rem] text-[#7d8794]">
          <p>© 2026 TRUST INSTRUMENT ADVISORY. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
