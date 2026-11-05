import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { getProject, projects } from "@/content/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/work/${project.slug}/`,
    },
    twitter: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const otherProject = projects.find((item) => item.slug !== project.slug);

  return (
    <main id="main-content" className="flex-1" tabIndex={-1}>
      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <Link href="/#work" className="text-link inline-flex items-center gap-2 text-sm text-muted">
          <ArrowRightIcon className="size-4 rotate-180" />
          All work
        </Link>

        <header className="pt-16 pb-14 sm:pt-20 sm:pb-20">
          <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
            {project.category}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed tracking-[-0.02em] text-muted sm:text-2xl">
            {project.summary}
          </p>
        </header>

        <div className="grid gap-14 border-t border-line pt-10 lg:grid-cols-[1fr_2fr] lg:gap-24 lg:pt-14">
          <h2 className="text-xs font-semibold tracking-[0.12em] uppercase">The work</h2>
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted sm:text-xl">{project.overview}</p>

            <h2 className="mt-12 text-lg font-semibold tracking-[-0.025em]">
              Contributions & outcomes
            </h2>
            <ul className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-2.5 size-1 shrink-0 bg-muted" aria-hidden="true" />
                  {outcome}
                </li>
              ))}
            </ul>

            {project.technologies.length > 0 ? (
              <div className="mt-12 border-t border-line pt-7">
                <h2 className="text-xs font-semibold tracking-[0.12em] uppercase">Built with</h2>
                <p className="mt-3 text-sm text-muted">{project.technologies.join(" / ")}</p>
              </div>
            ) : null}
          </div>
        </div>

        {otherProject ? (
          <nav aria-label="More work" className="mt-20 border-t border-line pt-8 sm:mt-28">
            <Link
              href={`/work/${otherProject.slug}/`}
              className="group flex items-center justify-between gap-6"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                  More work
                </p>
                <p className="mt-3 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                  {otherProject.title}
                </p>
              </div>
              <ArrowRightIcon className="size-6 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
            </Link>
          </nav>
        ) : null}
      </Container>
    </main>
  );
}
