import "./globals.css";
import type { Metadata } from "next";
import {
  Inter,
  Poppins,
  Ubuntu,
  Rubik,
  Open_Sans,
  Gravitas_One,
  Kavoon,
} from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";
import { Navigation } from "@/shared/components/Navigation";

export const metadata: Metadata = {
  title: "Promise Portal",
  description:
    "The official Promise Portal for the Promise Scholars Program at Skyline College",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
