import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEGO Editions - Trophee Officiel de la Coupe du Monde de la FIFA",
  description: "LEGO Editions Trophee Officiel de la Coupe du Monde de la FIFA #43020 - 2842 pieces",
  openGraph: {
    title: "LEGO Editions - Trophee Officiel de la Coupe du Monde de la FIFA",
    description: "LEGO Editions Trophee Officiel de la Coupe du Monde de la FIFA #43020 - 2842 pieces",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="bg-white">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "66bc01d541bac8287853602e";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids=""
          async
          defer
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
