'use client';

import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { usePageReloader } from '@/hooks/use-page-reloader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  usePageReloader();

  const siteUrl = "https://your-portfolio-url.com"; // Replace with your actual domain
  const ogImageUrl = `${siteUrl}/og-image.png`; // Replace with a path to your OG image

  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <title>Kasun Harsha | UI/UX Designer & Frontend Developer</title>
        <meta name="description" content="Personal portfolio of Kasun Harsha, a product-focused creator specializing in user-centered design and modern frontend engineering." />
        <meta name="keywords" content="UI/UX designer Sri Lanka, frontend developer, user-focused design, portfolio, Kasun Harsha, web design" />
        <meta name="author" content="Kasun Harsha" />
        <link rel="canonical" href={siteUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Kasun Harsha | UI/UX Designer & Frontend Developer" />
        <meta property="og:description" content="Portfolio of a UI/UX designer from Sri Lanka creating intuitive and scalable web experiences with a focus on user-centered design." />
        <meta property="og:image" content={ogImageUrl} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content="Kasun Harsha | UI/UX Designer & Frontend Developer" />
        <meta property="twitter:description" content="Portfolio of a UI/UX designer from Sri Lanka creating intuitive and scalable web experiences with a focus on user-centered design." />
        <meta property="twitter:image" content={ogImageUrl} />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
