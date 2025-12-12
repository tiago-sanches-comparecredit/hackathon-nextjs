import { siteConfig } from "@/config/site";
import Link from "next/link";

/**
 * Header component with site logo and navigation.
 * Branding is loaded from environment variables via siteConfig.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white font-bold"
            style={{ backgroundColor: siteConfig.primaryColor }}
          >
            {siteConfig.name.charAt(0)}
          </div>
          <span className="text-xl font-semibold text-gray-900">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="/signup"
            className="rounded-full px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: siteConfig.primaryColor }}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
