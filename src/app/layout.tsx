import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lucas Macedo - Full-Stack Developer Portfolio',
  description:
    'Portfolio of Lucas Macedo - Full-Stack Developer specializing in Java, Next.js, and modern web technologies.',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'typescript', 'full-stack'],
  authors: [{ name: 'Lucas Macedo' }],
  creator: 'Lucas Macedo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lmacedo.site',
    title: 'Lucas Macedo - Full-Stack Developer Portfolio',
    description: 'Portfolio showcasing projects and expertise in modern web development.',
    siteName: 'Lucas Macedo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Macedo - Full-Stack Developer Portfolio',
    description: 'Portfolio showcasing projects and expertise in modern web development.',
    creator: '@meninodeinfo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
