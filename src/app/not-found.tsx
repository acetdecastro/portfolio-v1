import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main id="main-content" className="flex-1" tabIndex={-1}>
      <Container className="py-28 sm:py-40">
        <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
          404 / Not found
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
          A little off course.
        </h1>
        <p className="mt-5 text-lg text-muted">
          This page may have moved, or it doesn&apos;t exist yet.
        </p>
        <Link href="/" className="text-link mt-9 inline-block">
          Back to home
        </Link>
      </Container>
    </main>
  );
}
