import { SITE } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M14.25 3c.32 1.84 1.52 3.58 3.25 4.45.97.49 2 .72 3 .75v3.15a9.5 9.5 0 0 1-3.37-.62 9.2 9.2 0 0 1-1.88-1v6.12a5.85 5.85 0 1 1-5.85-5.85c.37 0 .74.04 1.1.11v3.22a2.83 2.83 0 1 0 1.73 2.62V3h2.02Z" />
    </svg>
  );
}

export function SocialProofBanner() {
  const hashtag = `#${SITE.name.toLowerCase()} ile paylaş`;

  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center text-white sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
          Sosyal Kanıt
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">{hashtag}</h2>
        <p className="max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
          Spinora anlarını Instagram ve TikTok&apos;ta paylaş, topluluğa katıl ve
          gerçek kullanıcı deneyimlerini keşfet.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={SITE.socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-purple-600 transition-transform duration-200 hover:scale-105 hover:bg-purple-50"
          >
            <InstagramIcon />
            Instagram&apos;da Gör
          </a>
          <a
            href={SITE.socialLinks.tiktok}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 hover:bg-white/15"
          >
            <TikTokIcon />
            TikTok&apos;ta İzle
          </a>
        </div>
      </div>
    </section>
  );
}
