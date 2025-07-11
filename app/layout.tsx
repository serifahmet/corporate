import type { Metadata } from "next";
import Script from "next/script";
import LocaleProvider from "../components/LocaleProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "cevirim.com - Profesyonel Çeviri ve Yerelleştirme Hizmetleri",
  description: "100'den fazla dilde doğru çeviri, yerelleştirme ve tercümanlık hizmetleri için Fortune 500 şirketleri tarafından güvenilir.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
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
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}