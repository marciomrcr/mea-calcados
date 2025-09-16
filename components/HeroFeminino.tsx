import Image from "next/image";
import Link from "next/link";

export function HeroFeminino() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 lg:py-20">
          {/* Left Content */}
          <div className="text-left space-y-6">
            <div className="text-caption text-white font-medium tracking-wider uppercase">
              {" "}
              Runner & Sporty
            </div>
            <h1 className="text-4xl rounded-bl-xl rounded-tr-xl text-white  lg:text-6xl pl-1.5 font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 opacity-80 leading-tight">
              Cada passo uma conquista.
            </h1>
            <p className="text-lg text-light-300 max-w-md">
              Not just style. Not just comfort. Footwear that effortlessly moves
              with your every step.
            </p>
            <Link
              href="/#"
              className="inline-block bg-dark-900 text-light-100 px-6 py-3 mb-4 rounded-full font-medium hover:bg-dark-700 transition-colors"
            >
              Peça agora mesmo
            </Link>
          </div>
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-200 rounded-3xl transform rotate-12"></div>
            <div className="relative z -10">
              <Image
                src="/femininos/hero.jpg"
                alt="RDW Tênis"
                width={600}
                height={300}
                className="w-full h-auto object-contain"
                priority
              />
              {/* <div className="absolute mt-4 top-4 right-0 text-6xl font-bold opacity-80 text-amber-400 select-none">
                RDW 101
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
