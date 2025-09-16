import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const cairo = Cairo({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'Bazaari - Your Multi-Service Platform',
  description: 'Food delivery, Hotels, Spa, Visa services, Healthcare, Real estate, Marketplace - all in one platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body className={`${cairo.variable} font-cairo antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}