"use client"

import React, { useEffect, useRef } from 'react'
import photo from "../app/images/intro2.png"
import ScrollReveal from "scrollreveal"

const Intro: React.FC = () => {
  const newsRef = useRef<HTMLDivElement | null>(null);
  const eventRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Dynamically import ScrollReveal to avoid SSR issues
    const loadScrollReveal = async () => {
      if (typeof window !== "undefined") {
        const ScrollReveal = (await import("scrollreveal")).default;

        if (newsRef.current) {
          ScrollReveal().reveal(newsRef.current, {
            origin: "top",
            distance: "80px",
            duration: 1000,
            delay: 300,
            easing: "ease",
            reset: false,
          });
        }

        if (circleRef.current) {
          ScrollReveal().reveal(circleRef.current, {
            origin: "top",
            distance: "80px",
            duration: 1000,
            delay: 300,
            easing: "ease",
            reset: false,
          });
        }

        if (eventRef.current) {
          ScrollReveal().reveal(eventRef.current, {
            origin: "top",
            distance: "80px",
            duration: 1000,
            delay: 300,
            easing: "ease",
            reset: false,
          });
        }
      }
    };

    loadScrollReveal();
  }, []);

  return (
    <div className='w-full bg-[#2A4E8D] pt-4 px-28 xl:px-0'>
      <div className='flex px-20 items-center h-[600px] md:h-[500px] nb:h-[400px] xl:px-12 justify-between nb:px-5'>
        <div ref={newsRef} className='flex flex-col w-[50%] items-start gap-3 xl:gap-4 md:w-[100%]'>
          <h1 className='font-bold text-[60px] ms:text-[26px] mm:text-[22px] ms:leading-[30px] nb:text-[30px] xl:text-[48px] leading-[65px] text-[#CEA92F] max-w-[650px] md:text-[40px] md:leading-[40px]'>
            Fotihova Khalilova Shakhzoda Dilmurodovna
          </h1>
          <p className='font-medium text-[23px] text-white leading-[30px] max-w-[580px] md:font-light md:text-[15px] md:leading-[22px]'>
            Maktabgacha Ta`lim Pedagogi Sohasi <br /> Oliy Toifadagi Pedagog <br />Libos Dizayneri
          </p>
        </div>

        <div ref={circleRef} className='max-w-[500px]'>
          <img src={photo.src} alt="" width={500} className='max-w-[650px] w-[90%] md:w-[100%] md:max-w-[400px] md:max-h-[420px] transform transition-transform duration-300 hover:scale-105' />
        </div>
      </div>
    </div>
  );
}

export default Intro;
