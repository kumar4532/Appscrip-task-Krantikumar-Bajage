import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LOGO | Online Shopping for Products",
  description:
    "Browse a wide range of products with the best prices. Discover trending items and popular picks.",

  openGraph: {
    title: "LOGO Store",
    description:
      "Explore trending products and shop online.",
    url: "https://scriplogo.netlify.app",
    siteName: "LOGO",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "LOGO Store",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LOGO Store",
    description: "Discover and shop trending products.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
