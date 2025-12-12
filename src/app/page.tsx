import { Header, Hero, Features, Footer } from "@/components";
import { getLandingPageContent } from "@/lib";

/**
 * Home page - Landing page for the vertical.
 * Fetches content from Sanity CMS with fallback to environment variables.
 * This page is statically generated at build time.
 */
export default async function Home() {
  // Fetch content from Sanity (returns null/empty if not configured)
  const { hero, features } = await getLandingPageContent();

  // Transform Sanity features to component format (if available)
  const featureItems =
    features.length > 0
      ? features.map((f) => ({
          title: f.title,
          description: f.description,
          icon: f.icon,
        }))
      : undefined; // undefined = use default features from component

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero
          title={hero?.title}
          subtitle={hero?.subtitle}
          ctaText={hero?.ctaText}
          ctaLink={hero?.ctaLink}
        />
        <Features features={featureItems} />
      </main>

      <Footer />
    </div>
  );
}
