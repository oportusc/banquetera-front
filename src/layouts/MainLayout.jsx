import React from 'react';
import TopBar from '../components/TopBar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <TopBar />
      <main className="pt-24">
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 