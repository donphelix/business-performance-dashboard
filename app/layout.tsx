import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Provider as UIProvider} from "@/components/ui/provider";
import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

// Metadata for the Next.js application
export const metadata: Metadata = {
    title: "Business Performance Dashboard",
    description: "An interactive dashboard to visualize key business metrics.",
};

// Initialize React Query Client
const queryClient = new QueryClient();

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
            <UIProvider>{children}</UIProvider>
        </QueryClientProvider>
        </body>
        </html>
    );
}
