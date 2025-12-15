'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { usePageReloader } from '@/hooks/use-page-reloader';

// Note: Metadata is not supported in client components. 
// If you need to set metadata, you would do it in a server component parent or on a page-by-page basis.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  usePageReloader();

  return (
    <html lang="en">
      <head>
        <title>Kasun Harsha | UI/UX Designer & Frontend Developer</title>
        <meta name="description" content="Personal portfolio of Kasun Harsha, a product-focused creator specializing in user-centered design and modern frontend engineering." />
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
