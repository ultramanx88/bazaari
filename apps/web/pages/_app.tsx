// apps/web/pages/_app.tsx
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      {/* แสดง Navbar ด้านบน */}
      <Navbar />

      {/* Header ส่วนปุ่ม SignIn/SignOut */}
      <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      {/* เนื้อหาหลัก */}
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;