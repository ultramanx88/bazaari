import { type Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Bazaari - Your Multi-Service Platform',
  description: 'Food delivery, Hotels, Spa, Visa services, Healthcare, Real estate, Marketplace - all in one platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <header className="flex justify-between items-center p-4 gap-4 h-16 bg-white shadow-sm border-b">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Bazaari
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-gray-600 hover:text-blue-600 font-medium text-sm">
              Sign In
            </a>
            <a href="/register" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm px-4 py-2 transition-colors">
              Sign Up
            </a>
          </div>
        </header>
        <Providers>
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}