import type { SocialLink } from "@/types/portfolio";

export const profile = {
  name: "Ace De Castro",
  role: "Software Engineer",
  location: "Philippines",
  email: "acetdecastro@gmail.com",
  description:
    "Software engineer building full-stack applications with a focus on performance, clarity, and reliability.",
  introduction:
    "I build full-stack applications with a focus on performance, clarity, and reliability.",
  about:
    "I'm Ace, a software engineer who enjoys turning complex requirements into dependable products.",
  resume: "/ace-de-castro-resume.pdf",
  skills: ["Node.js", "TypeScript", "React", "Kotlin", "PostgreSQL"],
} as const;

export const socialLinks: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/acetdecastro",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ace-de-castro-a32056222",
  },
];

// Absolute homepage anchors also work from project detail pages.
export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;
