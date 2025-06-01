// apps/web/app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DownloadSection from '../components/DownloadSection';
import FooterSection from '../components/FooterSection';

import '../styles/globals.css';

export const metadata = {
  title: 'BAZAAARI',
  description: 'Your app description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
          <link
            href="https://fonts.googleapis.com/css2?family=Karma&display=swap"
            rel="stylesheet"
          />

        <body>
          {/* Navbar */}
          <Navbar />

          {/* Navbar / Header */}
          <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <HeroSection />
          <DownloadSection />
          <FooterSection />
          {/* Main content */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
