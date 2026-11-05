import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="main-content" className="flex-1" tabIndex={-1}>
      <Container>
        <Hero />
        <SelectedWork />
        <Experience />
        <About />
      </Container>
    </main>
  );
}
