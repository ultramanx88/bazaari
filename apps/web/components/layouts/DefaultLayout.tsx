'use client';

import { ReactNode } from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import BasketCard from '../ui/BasketCard';

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {children}
      </div>

      <div>
        <Footer />
        <BasketCard />
      </div>
    </div>
  );
}