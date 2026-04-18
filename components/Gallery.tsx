"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/product-1-C5dxxT2Q.webp", alt: "Trophy Front View" },
  { src: "/images/product-2-D0_44eKf.webp", alt: "Trophy Side View" },
  { src: "/images/product-3-43byRKqf.webp", alt: "Trophy Detail" },
  { src: "/images/product-4-CCBh02TU.webp", alt: "Trophy Base" },
  { src: "/images/product-5-DpWgP4wF.webp", alt: "Trophy Complete" },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="gallery" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Galerie</h2>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-lg h-[400px] md:h-[500px] mb-6">
            <Image
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === index
                    ? "border-[#ffcf00] shadow-lg"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
