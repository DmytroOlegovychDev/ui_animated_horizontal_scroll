import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const images = [
  `${import.meta.env.BASE_URL}images/img-1.jpg`,
  `${import.meta.env.BASE_URL}images/img-2.jpg`,
  `${import.meta.env.BASE_URL}images/img-3.jpg`,
  `${import.meta.env.BASE_URL}images/img-4.jpg`,
  `${import.meta.env.BASE_URL}images/img-5.jpg`,
];

export default function HorizontalScroll() {
  const containerRef = useRef();
  const triggerRef = useRef();
  const imgsRef = useRef();
  useGSAP(
    () => {
      const images = imgsRef.current;
      gsap.to(images, {
        x: () => -(images.scrollWidth - containerRef.current.offsetWidth),
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () =>
            `+=${images.scrollWidth - containerRef.current.offsetWidth}`,
        },
      });
    },
    {
      scope: containerRef,
    },
  );
  return (
    <section ref={containerRef}>
      {/* hero */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl lg:text-8xl">
          Horizontal
          <br />
          <span className="text-lime-500 flex items-center gap-5">
            Scroll
            <img
              src={`${import.meta.env.BASE_URL}images/right-arrow.png`}
              alt="arrow images"
              width={120}
              height={120}
            />
          </span>
        </h1>
      </section>
      {/* images wrapper */}
      <section className="bg-emerald-900/20 overflow-hidden" ref={triggerRef}>
        <div className="flex items-center h-screen flex-nowrap will-change-transform">
          <div
            className=" flex flex-nowrap gap-3 sm:gap-5 will-change-transform"
            ref={imgsRef}
          >
            {images.map((img, index) => (
              <div
                className="w-[80vw] sm:w-[50vw] lg:w-[35vw] shrink-0 bg-emerald-800/20 shadow-2xl hover:shadow-lg hover:shadow-green-400/90 transition-shadow p-5"
                key={index}
              >
                <img
                  className="w-full h-full object-cover"
                  src={img}
                  alt="img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="py-40 flex items-center justify-center">
        <p className=" container text-center text-sm text-gray-600 dark:text-gray-500 ">
          &copy; {new Date().getFullYear()} Made with Dmytro coding
        </p>
      </footer>
    </section>
  );
}
