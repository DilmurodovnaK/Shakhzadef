import React, { useEffect, useRef } from 'react';
import ScrollReveal from "scrollreveal"
interface FooterProps {
  setActiveComponent: (component: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveComponent }) => {
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
    <footer ref={eventRef} className="bg-[2A4E8D] text-white px-28 py-16 xl:px-0 w-full  ">
      <div className="px-20 xl:px-12 nb:px-5 grid grid-cols-4 gap-8 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
        {/* Info Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#F7EF8A]">Info</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button
                onClick={() => setActiveComponent('about')}
                className="hover:text-white"
              >
                Asosiy
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveComponent('services')}
                className="hover:text-white"
              >
               Men Haqimda
              </button>
            </li>
            <li>
              <a href="" className="hover:text-white">
               Servis
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
             Bog`lanish
              </a>
            </li>
          </ul>
        </div>

        {/* Explore Section */}
        <div>
          <h4 className="text-xl font-semibold text-[#F7EF8A] mb-4">Servislar</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="" className="hover:text-white">Pedagog</a></li>
            <li><a href="" className="hover:text-white">Dizayner</a></li>
            <li><a href="" className="hover:text-white">Rassom</a></li>
            <li><a href="" className="hover:text-white">Libos Dizayneri</a></li>
            <li><a href="" className="hover:text-white">Qalam Ustasi</a></li>
            <li><a href="" className="hover:text-white">Libos Rassomi</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="text-xl font-semibold text-[#F7EF8A] mb-4">Bog`lanish</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="https://t.me/shakhzade_f"className="hover:text-white">Telegram</a></li>
            <li><a href="https://www.instagram.com/shakhzade_f?igsh=d2NrMW44ZHNlMnlx" className="hover:text-white">Instagram</a></li>
            <li><a href="" className="hover:text-white">+998 971073404</a></li>
         
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-xl font-semibold text-[#F7EF8A] mb-4">Email</h4>
          <p className="text-gray-400 mb-4">
           Sen hamma narsani uddalaysan
          </p>
          <form className="flex flex-col gap-4">
            <button className="p-3 rounded bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none"
            > fotixovashaxzoda@icloud.com</button>
            <button
              type="submit"
              className="p-3 rounded bg-white text-[#10182F] hover:bg-gray-300 transition"
            >
              Bosh Sahifaga O`tish`
            </button>
          </form>
          <div className="flex space-x-4 mt-6">
            <a href="" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-gray-400 hover:text-white">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
