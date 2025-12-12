/**
 * GROQ queries for fetching content from Sanity CMS.
 * These queries are used by the data fetching functions.
 */

// Fetch the hero section content
export const heroQuery = `*[_type == "heroSection"][0] {
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage
}`;

// Fetch all features ordered by display order
export const featuresQuery = `*[_type == "feature"] | order(order asc) {
  _id,
  title,
  description,
  icon,
  order
}`;

// Combined query for landing page (more efficient - single request)
export const landingPageQuery = `{
  "hero": *[_type == "heroSection"][0] {
    title,
    subtitle,
    ctaText,
    ctaLink,
    backgroundImage
  },
  "features": *[_type == "feature"] | order(order asc) {
    _id,
    title,
    description,
    icon
  }
}`;
