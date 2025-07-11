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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Primary Meta Tags */}
        <title>cevirim.com - Profesyonel Çeviri ve Yerelleştirme Hizmetleri</title>
        <meta name="title" content="cevirim.com - Profesyonel Çeviri ve Yerelleştirme Hizmetleri" />
        <meta name="description" content="100'den fazla dilde doğru çeviri, yerelleştirme ve tercümanlık hizmetleri. Fortune 500 şirketleri tarafından güvenilen profesyonel dil hizmetleri." />
        <meta name="keywords" content="çeviri, translation, yerelleştirme, localization, tercümanlık, interpreting, dil hizmetleri, language services, türkçe çeviri, english translation" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Turkish" />
        <meta name="author" content="cevirim.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cevirim.com/" />
        <meta property="og:title" content="cevirim.com - Profesyonel Çeviri ve Yerelleştirme Hizmetleri" />
        <meta property="og:description" content="100'den fazla dilde doğru çeviri, yerelleştirme ve tercümanlık hizmetleri. Fortune 500 şirketleri tarafından güvenilen profesyonel dil hizmetleri." />
        <meta property="og:image" content="https://cevirim.com/og-image.jpg" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="cevirim.com" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cevirim.com/" />
        <meta property="twitter:title" content="cevirim.com - Profesyonel Çeviri ve Yerelleştirme Hizmetleri" />
        <meta property="twitter:description" content="100'den fazla dilde doğru çeviri, yerelleştirme ve tercümanlık hizmetleri. Fortune 500 şirketleri tarafından güvenilen profesyonel dil hizmetleri." />
        <meta property="twitter:image" content="https://cevirim.com/twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://cevirim.com/" />
        
        {/* Fonts */}
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