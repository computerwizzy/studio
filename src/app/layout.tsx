import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google'; // Use Inter font from Google Fonts
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster

// Configure the Inter font
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Pelham Auto Outfitters - Lift & Leveling Kits',
  description: 'Your trusted experts for lift kits, leveling kits, and auto repairs in Pelham.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster /> {/* Add Toaster here */}
      </body>
    </html>
  );
}
