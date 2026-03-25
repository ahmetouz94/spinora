import { SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-slate-900 py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-xl font-black text-white">{SITE.name}</p>
            <p className="mt-1 text-sm">{SITE.tagline}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="/returns" className="hover:text-white transition-colors">
              Returns
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs">
          <p>© {year} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
