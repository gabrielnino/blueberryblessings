import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blueberry Blessings | Spray-Free Blueberry Farm in Suresalla, BC",
  description: "Welcome to Blueberry Blessings! Your premium local source for fresh, spray-free, and handpicked blueberries in Suresalla, British Columbia. Pre-order regular or bulk today.",
  keywords: [
    "blueberry farm",
    "spray-free blueberries",
    "organic blueberries BC",
    "Suresalla BC blueberries",
    "buy blueberries Surrey",
    "local blueberry harvest 2026",
    "fresh blueberries bulk"
  ],
  authors: [{ name: "Blueberry Blessings Farm" }],
  creator: "Blueberry Blessings Farm",
  publisher: "Blueberry Blessings Farm",
  metadataBase: new URL("https://blueberryblessings.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Blueberry Blessings | Spray-Free Blueberry Farm in Suresalla, BC",
    description: "Welcome to Blueberry Blessings! Your premium local source for fresh, spray-free, and handpicked blueberries in Suresalla, British Columbia. Pre-order regular or bulk today.",
    url: "https://blueberryblessings.ca",
    siteName: "Blueberry Blessings",
    images: [
      {
        url: "/blueberry_basket.jpg",
        width: 800,
        height: 800,
        alt: "Fresh Blueberry Basket at Blueberry Blessings Farm",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blueberry Blessings | Spray-Free Blueberry Farm in Suresalla, BC",
    description: "Welcome to Blueberry Blessings! Your premium local source for fresh, spray-free, and handpicked blueberries in Suresalla, British Columbia. Pre-order regular or bulk today.",
    images: ["/blueberry_basket.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
