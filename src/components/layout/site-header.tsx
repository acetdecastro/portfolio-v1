import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Container } from "@/components/ui/container";
import { navigation, profile } from "@/content/profile";

export function SiteHeader() {
  return (
    <header>
      <Container className="flex flex-wrap items-center justify-between gap-x-6 pt-6 sm:pt-8">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-base font-semibold tracking-[-0.04em] sm:text-lg"
          aria-label={`${profile.name}, home`}
        >
          {profile.name}
        </Link>

        <nav
          aria-label="Main navigation"
          className="order-3 mt-4 flex w-full items-center justify-between gap-5 border-b border-line pb-3 text-sm sm:order-none sm:mt-0 sm:ml-auto sm:w-auto sm:justify-start sm:gap-7 sm:border-0 sm:pb-0"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center transition-colors hover:text-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sm:border-l sm:border-line sm:pl-4">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
