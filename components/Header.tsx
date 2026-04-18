"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#ffcf00] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Image
          src="/images/lego-logo.png"
          alt="LEGO Logo"
          width={60}
          height={60}
          className="h-10 w-auto"
        />
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-black">
          <a href="#product" className="hover:underline">Produit</a>
          <a href="#gallery" className="hover:underline">Galerie</a>
          <a href="#reviews" className="hover:underline">Avis</a>
        </nav>
        <a
          href="#buy"
          className="bg-[#e3000b] text-white px-4 py-2 rounded font-bold text-sm hover:bg-red-700 transition-colors prisma-visible-trigger"
        >
          ACHETER
        </a>
      </div>
    </header>
  );
}
