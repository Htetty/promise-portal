import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Ubuntu, Rubik, Open_Sans, Gravitas_One } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const rubik = Rubik({ weight: ['300', '500', '700'], subsets: ['latin'], variable: '--font-rubik', display: 'swap' });
const poppins = Poppins({ weight: ['300', '500'], subsets: ['latin'], variable: '--font-poppins', display: 'swap' });
const ubuntu = Ubuntu({ weight: ['300', '500', '700'], subsets: ['latin'], variable: '--font-ubuntu', display: 'swap' });
const openSans = Open_Sans({ weight: ['300', '500', '700'], subsets: ['latin'], variable: '--font-open-sans', display: 'swap' });
const gravitasOne = Gravitas_One({ weight: '400', subsets: ['latin'], variable: '--font-gravitas-one', display: 'swap' });

export const metadata: Metadata = {
  title: 'Promise Portal',
  description: 'The official Promise Portal for the Promise Scholars Program at Skyline College',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${poppins.variable} ${ubuntu.variable} ${rubik.variable} ${openSans.variable} ${gravitasOne.variable} antialiased min-h-screen`}
      >
        <Providers>
          {children}
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
