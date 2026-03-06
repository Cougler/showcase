import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Showcase — Aaron Cougle",
  description: "A visual showcase of shipped and concept product design work.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
