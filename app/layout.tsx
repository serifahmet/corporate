import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Translation Services - Professional Translation & Localization",
  description: "Trusted by Fortune 500 companies for accurate translation, localization, and interpreting services in over 100 languages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <Script 
          src="https://cdn.tailwindcss.com" 
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}