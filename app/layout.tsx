import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import ClientProviders from "@/components/ClientProviders";
import Navigation from "@/components/Navigation";

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

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
            <Navigation />
            <ClientProviders>{children}</ClientProviders>
        </body>
        </html>
    );
}
