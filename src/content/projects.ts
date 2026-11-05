import type { Project } from "@/types/portfolio";

// Project summaries and outcomes are grounded in the supplied résumé.
// Add a record here to create both a homepage entry and its detail page.
export const projects: readonly Project[] = [
  {
    slug: "audit-log-performance",
    title: "Audit log performance",
    summary: "From timeouts to sub-300ms queries across 190M+ records.",
    category: "Performance · Backend",
    overview:
      "At Paynamics Technologies, I optimized an audit log service handling more than 190 million records. The work focused on query performance, bringing responses that previously timed out down to under 300 milliseconds.",
    outcomes: [
      "Optimized query performance across a service handling 190M+ records.",
      "Improved response times from timeouts to sub-300ms responses.",
    ],
    technologies: [],
  },
  {
    slug: "invoice-allocation-api",
    title: "Invoice allocation API",
    summary: "Secure, concurrency-safe allocation for a multi-tenant platform.",
    category: "Kotlin · Spring Boot",
    overview:
      "At Paynamics Technologies, I developed a secure invoice series allocation API using Kotlin and Spring Boot. The API handles sequential range allocation in a multi-tenant environment, with validation, idempotency, and database constraints to support safe concurrent requests.",
    outcomes: [
      "Implemented validation and sequential invoice range allocation.",
      "Built idempotency and concurrency-safe database constraints into the allocation flow.",
      "Enforced tenant and subtenant data isolation.",
    ],
    technologies: ["Kotlin", "Spring Boot"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
