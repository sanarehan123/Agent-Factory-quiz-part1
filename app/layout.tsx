import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Factory Thesis — Quiz",
  description: "100-question quiz covering the Agent Factory Thesis by Panaversity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
