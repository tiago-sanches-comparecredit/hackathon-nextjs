import { getClient, isSanityConfigured } from "./sanity";
import { heroQuery, featuresQuery, landingPageQuery } from "./queries";

/**
 * Types for Sanity content
 */
export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: {
    asset: {
      _ref: string;
    };
  };
}

export interface Feature {
  _id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LandingPageContent {
  hero: HeroContent | null;
  features: Feature[];
}

/**
 * Fetch hero section content from Sanity.
 * Returns null if Sanity is not configured or content doesn't exist.
 */
export async function getHero(): Promise<HeroContent | null> {
  if (!isSanityConfigured()) {
    return null;
  }

  try {
    const client = getClient();
    if (!client) return null;
    return await client.fetch<HeroContent>(heroQuery);
  } catch (error) {
    console.error("Error fetching hero content:", error);
    return null;
  }
}

/**
 * Fetch all features from Sanity.
 * Returns empty array if Sanity is not configured or on error.
 */
export async function getFeatures(): Promise<Feature[]> {
  if (!isSanityConfigured()) {
    return [];
  }

  try {
    const client = getClient();
    if (!client) return [];
    return await client.fetch<Feature[]>(featuresQuery);
  } catch (error) {
    console.error("Error fetching features:", error);
    return [];
  }
}

/**
 * Fetch all landing page content in a single request.
 * More efficient than separate calls for hero and features.
 */
export async function getLandingPageContent(): Promise<LandingPageContent> {
  if (!isSanityConfigured()) {
    return { hero: null, features: [] };
  }

  try {
    const client = getClient();
    if (!client) return { hero: null, features: [] };
    return await client.fetch<LandingPageContent>(landingPageQuery);
  } catch (error) {
    console.error("Error fetching landing page content:", error);
    return { hero: null, features: [] };
  }
}
