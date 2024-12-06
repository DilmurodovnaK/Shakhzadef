"use client"

import Image from "next/image"; // Use Next.js's Image component
import benkov2 from "@/app/images/benkov2.jpg";
import benkov1 from "@/app/images/benkov1.jpg"

const Blog2: React.FC = () => {
  
  const cards = [
    {
      imgSrc: benkov2, // This is a StaticImageData type
      alt: "Hollywood Sign on The Hill",
      text: "Libos Dizayeni Asosidagi Jozibador Chizmalarim"
    },
    {
      imgSrc: benkov1, // External URL
      alt: "Palm Springs Road",
      text: "Libos Dizayneri Yo`nalishidagi Tikgan Libosim",
    },
  ];

 
  return (
    <div className="w-full px-28 pt-8 xl:px-0 bg-black">
      <div   className="px-20 xl:px-12 nb:px-5">
        <h2 className="font-bold text-[30px]  text-[#F7EF8A] text-center">Dizayner</h2>
        <div className="flex justify-center sm:flex-col sm:items-center gap-4 mt-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#71162c] border max-w-[560px]  border-[#F7EF8A]  rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {typeof card.imgSrc === "string" ? (
                // Use regular <img> for external URLs
                <img
                  src={card.imgSrc}
                  alt={card.alt}
                  className="w-[50%] h-[50%] object-cover"
                />
              ) : (
                // Use Next.js's <Image> for local images
                <Image
                  src={card.imgSrc}
                  alt={card.alt}
                  layout="responsive"
                  width={400}
                  height={200}
                  className="object-cover"
                />
              )}
              <div className="p-4">
               
                <p className="font-medium text-lg text-[#F7EF8A] text-center">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

       
        </div>


     
    </div>
  );
};

export default Blog2;
