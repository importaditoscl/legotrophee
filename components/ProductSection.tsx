"use client";

import Image from "next/image";
import { Check, Star } from "lucide-react";

const features = [
  "2842 pieces pour les fans de LEGO et de football",
  "Reproduction authentique du trophee FIFA World Cup",
  "Base rotative pour une exposition parfaite",
  "Plaque FIFA World Cup incluse",
  "Instructions detaillees etape par etape",
  "Set de collection LEGO Editions exclusif",
];

export default function ProductSection() {
  return (
    <section id="product" className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Le Produit</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/product-1-C5dxxT2Q.webp"
              alt="LEGO FIFA Trophy"
              width={500}
              height={600}
              className="mx-auto drop-shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-[#ffcf00] text-[#ffcf00]" />
              ))}
              <span className="text-sm text-gray-600 ml-2">(4.9/5 - 2,847 avis)</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold">
              LEGO Editions #43020
            </h3>
            
            <p className="text-gray-600 text-lg">
              Celebrez le football mondial avec cette replique exceptionnelle du trophee 
              de la Coupe du Monde de la FIFA. Chaque detail a ete soigneusement reproduit 
              pour offrir une experience de construction unique.
            </p>
            
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-[#e3000b]">599,99 R$</span>
                <span className="text-lg text-gray-400 line-through">799,99 R$</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-semibold">
                  -25%
                </span>
              </div>
              
              <a
                href="#buy"
                className="btn-secondary w-full md:w-auto text-center prisma-visible-trigger"
              >
                Acheter Maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
