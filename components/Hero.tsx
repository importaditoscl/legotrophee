"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/images/banner-PGl08Xtc.jpg"
          alt="LEGO FIFA World Cup Trophy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Trophee Officiel de la Coupe du Monde de la FIFA
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            LEGO Editions #43020 - 2842 pieces
          </p>
          <a
            href="#buy"
            className="btn-primary text-lg prisma-visible-trigger"
          >
            Acheter Maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
