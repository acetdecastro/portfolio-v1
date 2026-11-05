import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-8 border-t border-line pt-8 pb-14 sm:pt-9 sm:pb-20"
    >
      <SectionHeading id="experience-heading" number="02" title="Experience" />

      <ul>
        {experience.map((role) => (
          <li
            key={role.company}
            className="grid gap-y-2 border-b border-line py-7 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:gap-x-8 sm:py-8"
          >
            <div>
              <h3 className="max-w-2xl text-lg leading-snug font-medium tracking-[-0.025em] sm:text-xl">
                {role.company}
              </h3>
              <p className="mt-1.5 text-sm text-muted sm:text-base">{role.position}</p>
            </div>
            <p className="pt-1 text-sm text-muted tabular-nums">{role.years}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
