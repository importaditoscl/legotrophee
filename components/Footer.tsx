"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/lego-logo.png"
              alt="LEGO Logo"
              width={60}
              height={60}
              className="h-10 w-auto brightness-0 invert"
            />
            <span className="text-2xl font-bold italic">Editions</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politica de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            LEGO, the LEGO logo, and the Minifigure are trademarks of the LEGO Group.
          </p>
          <p className="mt-2">
            2026 LEGO Editions. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
