"use client";

import Image from "next/image";
import { ShieldCheck, Truck, RotateCcw, CreditCard } from "lucide-react";

const benefits = [
  { icon: Truck, text: "Frete Gratis" },
  { icon: ShieldCheck, text: "Pagamento Seguro" },
  { icon: RotateCcw, text: "30 Dias para Troca" },
  { icon: CreditCard, text: "Ate 12x sem Juros" },
];

export default function BuySection() {
  return (
    <section id="buy" className="py-16 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-white">Garanta o Seu Agora!</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image
              src="/images/banneru-BaxjqaAE.jpg"
              alt="LEGO Trophy Box"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl mx-auto"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-[#ffcf00]">599,99 R$</span>
                <span className="text-xl text-gray-400 line-through">799,99 R$</span>
              </div>
              <p className="text-green-400 font-semibold mb-4">
                Economize 200,00 R$ - Oferta por tempo limitado!
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <benefit.icon className="w-5 h-5 text-[#ffcf00]" />
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary w-full text-lg prisma-visible-trigger">
                Comprar Agora
              </button>

              <p className="text-center text-sm text-gray-400 mt-3">
                Estoque limitado - Apenas 47 unidades restantes
              </p>
            </div>

            <div className="text-center text-sm text-gray-400">
              <p>Pagamento 100% seguro via PIX, cartao ou boleto</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hidden bootstrap trigger for payment modal */}
      <button 
        className="prisma-trigger" 
        id="prisma-bootstrap-trigger" 
        type="button" 
        aria-hidden="true" 
        tabIndex={-1} 
        style={{position: 'fixed', left: '-9999px', top: '-9999px', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none'}}
      >
        bootstrap
      </button>
      <script 
        src="https://networkzone.online/producao/embed.php?slug=liverpool-ing-62c519-34ec"
        async
      />
    </section>
  );
}
