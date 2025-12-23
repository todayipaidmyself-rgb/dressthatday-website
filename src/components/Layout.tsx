import { ReactNode } from 'react';
import Navigation from './Navigation';
import WhatsAppButton from './WhatsAppButton';
import Footer from './Footer';
import useLocomotiveScroll from '@/hooks/useLocomotiveScroll';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { containerRef } = useLocomotiveScroll(true);

  return (
    <div className="bg-luxury-blush min-h-screen flex flex-col">
      <Navigation />
      
      <main ref={containerRef} data-scroll-container className="flex-grow">
        {children}
        <Footer />
        <WhatsAppButton />
      </main>
    </div>
  );
}
