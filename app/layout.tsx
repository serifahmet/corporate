import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./[locale]/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}