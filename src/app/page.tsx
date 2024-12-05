'use client'; // Add this line at the top of the file

import React, { useState } from 'react';
import About from '@/components/about';
import Blog1 from '@/components/blog1';
import Blog2 from '@/components/blog2';
import Blog3 from '@/components/blog3';
import Footer from '@/components/footer';
import Intro from '@/components/intro';

import Services from '@/components/services';
import Shaxsiy from '@/components/shaxsiy';
import Navbar from '@/components/navbar';

const Home = () => {
  const [activeComponent, setActiveComponent] = useState<string>(''); // Use React hooks

  return (
    <main className='flex flex-col items-center container mx-auto'>
      <Navbar/>
      <Intro />
      <About />
      <Services />
      <Blog1 />
      <Blog2 />
      <Blog3 />
      <Shaxsiy />
      <Footer/>
    </main>
  );
};

export default Home;
