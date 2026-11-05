import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/content/projects";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-8 border-t border-line pt-8 pb-14 sm:pt-9 sm:pb-20"
    >
      <SectionHeading
        id="work-heading"
        number="01"
        title="Selected work"
        aside="A few things I've helped build."
      />

      <ol>
        {projects.map((project, index) => (
          <li key={project.slug} className="border-b border-line last:border-b-0">
            <Link
              href={`/work/${project.slug}/`}
              className={`group grid grid-cols-[1.5rem_1fr_1.25rem] items-start gap-x-3 gap-y-4 sm:grid-cols-[2rem_1fr_1.5rem] sm:gap-x-6 lg:grid-cols-[2rem_1fr_auto_1.5rem] lg:items-center ${
                index === 0 ? "pt-0 pb-8 sm:pb-10" : "py-8 sm:py-10"
              }`}
            >
              <span className="pt-1.5 text-xs text-muted tabular-nums sm:text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl leading-tight font-semibold tracking-[-0.04em] sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {project.summary}
                </p>
                <p className="mt-4 text-xs text-muted lg:hidden">{project.category}</p>
              </div>
              <p className="hidden text-xs text-muted lg:block">{project.category}</p>
              <ArrowRightIcon className="mt-2 size-5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none lg:mt-0" />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
