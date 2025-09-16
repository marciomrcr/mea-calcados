import Image from "next/image";
import Link from "next/link";

interface TrendingProduct {
  id: number;
  title: string;
  imageSrc: string;
  href: string;
}

const trendingProducts: TrendingProduct[] = [
  {
    id: 1,
    title: "Summer Must-Haves: Air Max Dia",
    imageSrc: "/tendencia1.webp",
    href: "/#",
  },
  {
    id: 2,
    title: "Air Jordan 11 Retro Low LE",
    imageSrc: "/tendencia2.webp",
    href: "#",
  },
];

export function Tendencias() {
  return (
    <section className="py-16 bg-gray-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-light-100 mb-8">Trending Now</h2>

        {/* React Presto Banner */}
        <div className="mb-8 relative bg-dark-900 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 opacity-80"></div>
          <div className="relative z-10 p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">RDW 101</h2>
                <p className="text-lg mb-6 opacity-90">
                  Com tecnologia React para o Presto mais confortável até hoje.
                </p>
                <Link
                  href="/#"
                  className="inline-block bg-white text-dark-900 px-6 py-3 rounded-full font-medium hover:bg-light-200 transition-colors"
                >
                  Compre agora
                </Link>
              </div>
              <div className="relative bg-gray-800 rounded-xl p-4">
                <Image
                  src="/hero.png"
                  alt="Nike React Presto"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trending Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {trendingProducts.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group relative bg-blue-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] bg-light-500">
                <Image
                  src={product.imageSrc}
                  alt={product.title}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl font-bold bg-dark-900 bg-opacity-70 px-3 py-1 rounded">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
