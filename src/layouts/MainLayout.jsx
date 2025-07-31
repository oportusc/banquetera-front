import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <TopBar />
      <main className="mt-24 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 