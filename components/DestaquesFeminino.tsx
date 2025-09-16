import CardFeminino from "./CardFeminino";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  imageSrc: string;
  badge: { label: string; tone: "red" | "orange" | "green" };
}

const MeAProducts: Product[] = [
  {
    id: 1,
    title: "Tênis SoftStep Anabela Médio 1",
    subtitle: "Feminino",
    price: 98,
    imageSrc: "/femininos/img1.webp",
    badge: { label: "Best Seller", tone: "red" as const },
  },
  {
    id: 2,
    title: "Tênis SoftStep Anabela Médio 2",
    subtitle: "Feminino",
    price: 98,
    imageSrc: "/femininos/img2.webp",
    badge: { label: "Extra 20% off", tone: "orange" as const },
  },
  {
    id: 3,
    title: "Tênis SoftStep Anabela Médio 3",
    subtitle: "Feminino",
    price: 98,
    imageSrc: "/femininos/img3.webp",
    badge: { label: "Extra 15% off", tone: "green" as const },
  },
  {
    id: 4,
    title: "Tênis SoftStep Anabela Médio 4",
    subtitle: "Feminino",
    price: 98,
    imageSrc: "/femininos/img4.webp",
    badge: { label: "Best Seller", tone: "red" as const },
  },
  {
    id: 5,
    title: "Tênis SoftStep Anabela Médio 5",
    subtitle: "Feminino",
    price: 98,
    imageSrc: "/femininos/img5.webp",
    badge: { label: "Extra 20% off", tone: "orange" as const },
  },
  {
    id: 6,
    title: "Tênis SoftStep Anabela Médio 6",
    subtitle: "Feminino",
    price: 98,
    imageSrc: "/femininos/img6.webp",
    badge: { label: "Extra 15% off", tone: "green" as const },
  },
];

export function DestaquesFeminino() {
  return (
    <section className="py-16 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8">Top RDW</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MeAProducts.map((product) => (
            <CardFeminino
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              imageSrc={product.imageSrc}
              price={product.price}
              badge={product.badge}
              href={`/#`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
