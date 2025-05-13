import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  isLoggedIn: boolean;
  onLogout?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isLoggedIn, onLogout }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;