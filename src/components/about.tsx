import React, { useEffect, useRef } from 'react'
import abouts from "../app/images/about.jpg"
import ScrollReveal from "scrollreveal"
const About = () => {
 
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
            origin: "left",
            distance: "80px",
            duration: 1000,
            delay: 300,
            easing: "ease",
            reset: false,
          });
        }

        if (circleRef.current) {
          ScrollReveal().reveal(circleRef.current, {
            origin: "right",
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
 <div className=' w-full  px-28 pt-16 nb:pb-16 bg-[#71162c]  xl:px-0  '>
      <div className='flex px-20 xl:px-12 items-center nb:px-5  nb:h-[800px] h-[550px] gap-x-5 nb:flex-col nb:items-center nb:justify-center  justify-between '>
          <div ref={newsRef} className='max-w-[500px] nb:max-w-[600px]'>
      <img src={abouts.src} alt="" width={500}  className='max-w-[650px] w-[90%] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg  md:w-[100%] md:max-w-[400px] md:max-h-[420px]' />
   </div>
      <div ref={circleRef} className='flex  flex-col w-[50%] gap-1 nb:items-center  items-start nb:w-[100%]  md:w-[80%]'>
         <h2 className=' font-bold text-[30px] text-white   max-w-[650px] '><span className='text-[#F7EF8A]'>Salom!</span> Men Shakhzadef</h2>
      <p className='font-medium text-[22px] text-[#F7EF8A] nb:text-center  max-w-[580px] md:font-light md:text-[16px] md:leading-[22px]'>Pedagog hamda Dizayner</p>
   <p className='font-medium text-[18px] text-white    max-w-[580px] md:font-light md:text-[16px] leading-[30px]'>Men Dunyo Qarashi Keng, Zamonaviy Fikrlaydigan, Ayol-Qizlar Huquqi Uchun Harakat Qiladigan,  Insonlarni Ko`ngliga Yo`l Topish Uchun Har Narsadan Foydalanadigan Insonman. Punktualniy, Qat`iyatli, Mehribon, O`z Vadasini Ustidan Chiqadigan Shaxsman </p>
  
    <div className='flex mt-2 justify-between  '>
      <div className='flex flex-col gap-1 w-[160px] ms:w-[130px]'>
         <span className=' text-white md:text-[16px]  font-medium text-[19px]'>Tug`ilgan Sana</span>
         <span className=' text-white md:text-[16px]  font-medium text-[19px]'>Telefon Raqam</span>
         <span className=' text-white md:text-[16px]  font-medium text-[19px]'></span>
         <span className=' text-white md:text-[16px] font-medium text-[19px]'>Email</span>
         <span className=' text-white md:text-[16px] font-medium text-[19px]'>Yashash Joyi</span>
         <span className=' text-white md:text-[16px]  font-medium text-[19px]'>Hobby</span>
      </div>
      <div className='flex flex-col gap-1'>
         <span className=' text-white md:text-[16px]  font-medium text-[19px]'>: Mart 11, 2002</span>
         <span className=' text-white md:text-[16px]  font-medium text-[19px]'>: +998 971073404</span>
         <span className=' text-white md:text-[16px]  font-medium text-[19px]'>: fotixovashaxzoda@icloud.com</span>
         <span className=' text-white md:text-[16px]  font-medium text-[19px]'>: Toshkent Shahar, Yakkasaroy Tumani, Rakat </span>
         <span className=' text-white md:text-[16px]  font-medium text-[19px]'>: Suratga Olish, Rassomchilik</span>
      </div>
    </div>
    
    </div>
 
    </div>
    </div>
  )
}

export default About