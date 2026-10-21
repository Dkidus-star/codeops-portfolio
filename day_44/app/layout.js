import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Providers } from "@/components/Providers";
import { getSession } from "@/lib/session";
import { signOut } from "@/app/auth-actions";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Day 44: Metadata Base & Open Graph Defaults
export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ),
  title: {
    default: "Addis Eats — Authentic Ethiopian Food Delivery",
    template: "%s | Addis Eats",
  },
  description:
    "Order fresh, authentic Ethiopian dishes delivered hot across Addis Ababa.",
  openGraph: {
    title: "Addis Eats — Authentic Ethiopian Food Delivery",
    description:
      "Order fresh wats, sizzling tibs, kitfo, and vegetarian platters delivered across Addis Ababa.",
    siteName: "Addis Eats",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Addis Eats",
    description: "Authentic Ethiopian Food Delivery in Addis Ababa",
  },
};

export default async function RootLayout({ children }) {
  const user = await getSession();

  // Day 44: Schema.org Restaurant Structured Data
  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Addis Eats",
    description: "Authentic Ethiopian food ordering and delivery service",
    servesCuisine: "Ethiopian",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    currenciesAccepted: "ETB",
    openingHours: "Mo-Su 10:00-22:00",
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-slate-50 text-slate-900 min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-slate-200">
          <Link href="/" className="font-bold text-xl text-blue-900">
            Addis Eats
          </Link>
          <nav className="flex items-center gap-5 text-sm font-medium">
            <Link href="/menu" className="hover:text-blue-600">
              Menu
            </Link>
            <Link href="/cart" className="hover:text-blue-600">
              Cart
            </Link>
            <Link href="/checkout" className="hover:text-blue-600">
              Checkout
            </Link>
            {user?.role === "staff" && (
              <Link
                href="/kitchen"
                className="text-amber-700 font-bold hover:text-amber-800"
              >
                Kitchen
              </Link>
            )}
            {user ? (
              <div className="flex items-center gap-3 ml-2 border-l border-slate-200 pl-4">
                <span className="text-slate-600 font-normal">
                  Hi, {user.name}
                </span>
                <form action={signOut}>
                  <button
                    type="submit"
                    className="text-red-600 hover:underline"
                  >
                    Sign Out
                  </button>
                </form>
              </div>
            ) : (
              <Link
                href="/signin"
                className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Sign In
              </Link>
            )}
          </nav>
        </header>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
