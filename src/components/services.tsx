"use client";
import Image from "next/image";
import book from "../app/images/book2.png";
import thread from "../app/images/thread2.png"
import art from "../app/images/art2.png"
import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal"
export const card = [
  {
    title: "Pedagog",
    description: "Maktabgacha Ta`lim Yo`nalishidagi Oliy Ma`lumotli Pedagog",
    image: book,
  },
  {
    title: "Dizayner",
    description: "Libos Rassomi Hamda Libos Dizayneri",
    image: thread,
  },
  {
    title: "Rassom",
    description: "Tasviriy San`at Sohasidagi Ijodkor Va Qalam Ustasi, ",
    image: art,
  },
] as const;

 

const Services: React.FC = () => {
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
    <div className="w-full px-28 py-16 bg-black xl:px-0 ">
      <div className="px-20 xl:px-12 nb:px-5 ">
        <h2 ref={eventRef} className="font-bold text-[30px] text-[#F7EF8A] text-center">Servislar</h2>
        <div  ref={circleRef} className="flex justify-center sm:flex-col sm:items-center gap-4 mt-6">
          {card.map((service, index) => (
            <div
              key={index}
              className="max-w-[330px] max-h-[330px] p-6 border border-[#F7EF8A] bg-[#71162c] rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </div>
              <h5 className="mb-2 text-2xl font-semibold text-[#F7EF8A] tracking-tight text-center dark:text-white">
                {service.title}
              </h5>
              <p className="mb-3 font-medium text-lg text-[#F7EF8A] text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;