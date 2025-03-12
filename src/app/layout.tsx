import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import LocalFont from 'next/font/local';
import './globals.css';

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Portfólio Lucas Macedo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black ${geistMono.variable} ${calSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
