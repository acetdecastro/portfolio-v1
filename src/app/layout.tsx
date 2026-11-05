import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.description,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: profile.name,
    title: `${profile.name} — ${profile.role}`,
    description: profile.description,
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.role}`,
    description: profile.description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} flex min-h-screen flex-col font-sans`}>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only z-50 bg-foreground p-4 text-background focus:fixed focus:top-4 focus:left-4 focus:not-sr-only"
          >
            Skip to content
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
