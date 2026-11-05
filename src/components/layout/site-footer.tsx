import { ArrowUpRightIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { profile, socialLinks } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="scroll-mt-8">
      <Container>
        <div className="border-t border-line pt-14 pb-8 sm:pt-20 sm:pb-10">
          <h2
            id="contact-heading"
            className="max-w-3xl text-3xl leading-[1.15] font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl"
          >
            Let&apos;s build something that lasts.
          </h2>

          <div className="mt-7 flex flex-col items-start justify-between gap-8 sm:mt-9 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              className="text-link inline-flex items-center gap-2"
            >
              Get in touch
              <ArrowUpRightIcon className="size-4" />
            </a>

            <ul className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Find Ace online">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link inline-flex items-center gap-1.5"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="size-4" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 flex flex-wrap justify-between gap-3 text-xs text-muted sm:mt-20">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p>Thoughtfully built. Always evolving.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
