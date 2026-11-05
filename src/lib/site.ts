// Set NEXT_PUBLIC_SITE_URL when deploying to your own domain, then rebuild.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ace-de-castro-portfolio.woodsybiscuit.chatgpt.site",
);
