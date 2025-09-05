import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BotblyWidget } from "@/components/BotblyWidget";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Olive and Ember - Modern Mediterranean Cuisine',
  description: 'Fire-kissed Mediterranean plates with seasonal Virginia produce. Located in Arlington, VA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream text-charcoal">
        <BotblyWidget />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}