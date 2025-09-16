import { Categorias } from "@/components/Categorias";
import { Destaques } from "@/components/Destaques";
import { DestaquesFeminino } from "@/components/DestaquesFeminino";
import Footer from "@/components/Footer";
import { Galeria } from "@/components/Galeria";
import { Hero } from "@/components/Hero";
import { HeroFeminino } from "@/components/HeroFeminino";
import Navbar from "@/components/Navbar";
import { Tendencias } from "@/components/Tendencias";
import { TendenciasFeminino } from "@/components/TendenciasFeminino";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section
        id="masculino"
        className="py-4 bg-gray-950/80 text-4xl font-bold text-light-100 text-center"
      >
        <h1 className=" text-gray-200">Masculinos</h1>
        <Hero />
        <Destaques />
        <Tendencias />
      </section>
      <section
        id="feminino"
        className="py-4 bg-pink-300 text-4xl font-bold text-purple-900 text-center"
      >
        <h1 className="bg-pink-400 mt-4">Femininos</h1>
        <HeroFeminino />
        <DestaquesFeminino />
        <Galeria />
        <TendenciasFeminino />
        <Categorias />
      </section>
      <Footer />
    </main>
  );
}
