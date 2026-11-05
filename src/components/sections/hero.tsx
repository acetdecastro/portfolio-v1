import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="intro-enter pt-20 pb-24 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-36"
    >
      <p className="mb-6 text-[11px] leading-relaxed font-semibold tracking-[0.13em] text-muted uppercase sm:mb-7 sm:text-xs">
        {profile.role} / {profile.location}
      </p>

      <h1
        id="hero-heading"
        className="text-[clamp(2.65rem,7.15vw,6.25rem)] leading-[1.07] font-semibold tracking-[-0.06em]"
      >
        <span className="block">Thoughtful engineering.</span>
        <span className="block">Reliable software.</span>
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-relaxed tracking-[-0.02em] text-muted sm:mt-8 sm:text-xl lg:text-2xl">
        {profile.introduction}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 sm:mt-10">
        <Link
          href="/#work"
          className="inline-flex min-h-12 items-center justify-center gap-3 bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80 sm:px-6"
        >
          Explore my work
          <ArrowUpRightIcon className="size-4" />
        </Link>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link inline-flex min-h-12 items-center text-sm"
        >
          View résumé
          <span className="sr-only"> (Google Drive, opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
