import { Header, Hero, ProductList, Footer } from "@/components";
import { getLandingPageContent } from "@/lib";

/**
 * Home page - Landing page for the vertical.
 * Fetches content from Sanity CMS with fallback to defaults.
 * This page is statically generated at build time.
 */
export default async function Home() {
  // Fetch content from Sanity (returns null/empty if not configured)
  const { settings, home, products } = await getLandingPageContent();

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        siteName={settings?.siteName}
        logoUrl={settings?.logo?.asset?.url}
        logoAlt={settings?.logoAlt}
      />

      <main className="flex-1">
        <Hero
          title={home?.title}
          subtitle={home?.subtitle}
          ctaText={home?.ctaText}
          ctaLink={home?.ctaLink}
        />
        <ProductList products={products} />
      </main>

      <Footer />
    </div>
  );
}
