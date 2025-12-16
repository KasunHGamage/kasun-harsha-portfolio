
'use client';

import { Toaster } from "@/components/ui/toaster"
import { usePageReloader } from "@/hooks/use-page-reloader";

export default function InnerLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    usePageReloader();

    return (
        <>
            {children}
            <Toaster />
        </>
    );
}
