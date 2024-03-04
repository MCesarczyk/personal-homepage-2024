import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michał Cesarczyk homepage",
  description: "Welcome to my portfolio app. Please, take a look around :)",
  metadataBase: new URL("https://cesarczyk.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "pl-PL": "/pl-PL",
    },
  },
  openGraph: {
    images: "/ogimage.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">{children}</body>
    </html>
  );
}
