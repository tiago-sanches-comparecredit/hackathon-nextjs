import { siteConfig } from "@/config/site";
import Link from "next/link";

interface HeroProps {
  // Content comes from Sanity CMS
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

// Default content - shown only when Sanity has no data
const defaults = {
  title: `Welcome to ${siteConfig.name}`,
  subtitle: "Add your hero content in Sanity CMS to customize this section.",
  ctaText: "Get Started",
  ctaLink: "/signup",
};

/**
 * Hero section component for the landing page.
 * Content should come from Sanity CMS.
 */
export function Hero({
  title = defaults.title,
  subtitle = defaults.subtitle,
  ctaText = defaults.ctaText,
  ctaLink = defaults.ctaLink,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${siteConfig.primaryColor} 0%, transparent 50%)`,
        }}
      />

      <div className="container relative mx-auto px-4 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          {subtitle}
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href={ctaLink}
            className="rounded-full px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: siteConfig.primaryColor }}
          >
            {ctaText}
          </Link>

          <Link
            href="#features"
            className="rounded-full border border-gray-300 px-8 py-3 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
