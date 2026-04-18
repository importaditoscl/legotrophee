"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    image: "/images/review-1.webp",
    name: "Carlos M.",
    rating: 5,
    text: "Incrivel! O nivel de detalhe e impressionante. Meu filho e eu montamos juntos em um fim de semana.",
  },
  {
    image: "/images/review-3.webp",
    name: "Ana P.",
    rating: 5,
    text: "Presente perfeito para qualquer fa de futebol. A qualidade LEGO como sempre impecavel.",
  },
  {
    image: "/images/review-4.webp",
    name: "Roberto S.",
    rating: 5,
    text: "A base rotativa e um diferencial. Fica lindo exposto na estante!",
  },
  {
    image: "/images/review-6.jpeg",
    name: "Maria L.",
    rating: 5,
    text: "Superou todas as expectativas. A montagem e desafiadora mas muito gratificante.",
  },
  {
    image: "/images/review-7.jpeg",
    name: "Pedro F.",
    rating: 5,
    text: "Um must-have para colecionadores. A atencao aos detalhes e fenomenal.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">O Que Dizem Nossos Clientes</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#ffcf00] text-[#ffcf00]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
