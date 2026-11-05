import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-8 border-t border-line pt-8 pb-16 sm:pt-9 sm:pb-24"
    >
      <SectionHeading id="about-heading" number="03" title="About" />
      <p className="max-w-4xl text-2xl leading-[1.4] font-medium tracking-[-0.035em] sm:text-3xl lg:text-4xl">
        {profile.about}
      </p>
      <ul
        className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted sm:mt-8 sm:text-base"
        aria-label="Selected technologies"
      >
        {profile.skills.map((skill, index) => (
          <li key={skill} className="inline-flex gap-3">
            {index > 0 ? (
              <span aria-hidden="true" className="text-line">
                /
              </span>
            ) : null}
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
