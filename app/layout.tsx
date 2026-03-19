import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Markets — March 2026",
  description:
    "An interactive presentation on AI infrastructure, semiconductor markets, and the forces reshaping technology investing.",
  openGraph: {
    title: "AI Markets — March 2026",
    description:
      "An interactive presentation on AI infrastructure, semiconductor markets, and the forces reshaping technology investing.",
    type: "website",
  },
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}
