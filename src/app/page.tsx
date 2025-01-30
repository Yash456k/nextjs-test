import React from 'react';
import HeroSection from '@/sections/HeroSection';
import Contact_me from '@/sections/Contact_me';
import Featured from '@/sections/Featured';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection />
      <Featured />
      <Contact_me />
    </main>
  );
}
