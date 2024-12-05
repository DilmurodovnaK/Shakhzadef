"use client"
import React, { useEffect, useRef } from "react";
import blog1 from "../app/images/blog1.jpg";
import blog2 from "../app/images/blog2.jpg";
import blog3 from "../app/images/blog3.jpg";

const Shaxsiy = () => {
 
  return (
    <div className="w-full px-28 mt-20 xl:px-0 bg-[#71162c]">
      <div className="px-20 xl:px-12 nb:px-5">
        <div   className="flex flex-col justify-center gap-5 items-center">
          <h2 className="font-bold text-[30px] mt-20 text-[#F7EF8A] text-center">
            Shaxsiy Blog
          </h2>
          <p className="font-medium text-[20px] text-white text-center max-w-[800px] items-center md:font-light md:text-[17px] leading-[30px]">
            2022-Yil Turmushga Chiqib O`z Oilamni Barpo Etib 2023-Yil Farzandlik
            Bo`ldim. Hozirda Sevikli Rafiqa Hamda Namunali Ona Vazifasida Ish
            Olib Bormoqdaman
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 items-center mt-14 mb-20 ">
          <img
            src={blog1.src}
            alt=""
            className="w-[350px] md:w-[600px] md:h-[350px] h-[235px] sm:w-[400px] sm:h-[300px] ms:w-[350px] ms:h-[200px] mm:w-[310px] mm:h-[160px] border-2 border-[#F7EF8A] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />
          <img
            src={blog2.src}
            alt=""
            className="w-[350px] md:w-[600px] md:h-[350px] h-[235px] sm:w-[400px] sm:h-[300px] ms:w-[350px] ms:h-[200px] mm:w-[310px] mm:h-[180px] border-2 border-[#F7EF8A] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />
          <img
            src={blog3.src}
            alt=""
            className="w-[350px] md:w-[600px] md:h-[350px] h-[235px] sm:w-[400px] sm:h-[300px] ms:w-[350px] ms:h-[200px] mm:w-[310px] mm:h-[160px] border-2 border-[#F7EF8A] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />
        </div>
      </div>
      
    </div>
    
  );
};

export default Shaxsiy;
