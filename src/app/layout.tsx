
import './globals.css';
import type { Metadata } from 'next';
import InnerLayout from './inner-layout';

const siteUrl = "https://your-portfolio-url.com"; // Replace with your actual domain
const ogImageUrl = `${siteUrl}/og-image.png`; // Replace with a path to your OG image

export const metadata: Metadata = {
  title: 'Kasun Harsha | UI/UX Designer & Frontend Developer',
  description: 'Personal portfolio of Kasun Harsha, a product-focused creator specializing in user-centered design and modern frontend engineering.',
  keywords: 'UI/UX designer Sri Lanka, frontend developer, user-focused design, portfolio, Kasun Harsha, web design',
  authors: [{ name: 'Kasun Harsha' }],
  metadataBase: new URL(siteUrl),
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Kasun Harsha | UI/UX Designer & Frontend Developer',
    description: 'Portfolio of a UI/UX designer from Sri Lanka creating intuitive and scalable web experiences with a focus on user-centered design.',
    images: ogImageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    url: siteUrl,
    title: 'Kasun Harsha | UI/UX Designer & Frontend Developer',
    description: 'Portfolio of a UI/UX designer from Sri Lanka creating intuitive and scalable web experiences with a focus on user-centered design.',
    images: ogImageUrl,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <InnerLayout>{children}</InnerLayout>
      </body>
    </html>
  );
}
