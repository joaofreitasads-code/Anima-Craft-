import { Reveal } from "./Reveal";

const carouselItems = [
  { src: "/images/acervo/naruto.webp", alt: "Naruto em papercraft 3D", label: "Naruto" },
  { src: "/images/acervo/venom.webp", alt: "Venom em papel 3D", label: "Venom" },
  { src: "/images/acervo/pikachu.webp", alt: "Molde de Pikachu low poly", label: "Pikachu · Pokémon" },
  { src: "/images/acervo/goku.webp", alt: "Goku de Dragon Ball em papercraft", label: "Goku · Dragon Ball" },
  { src: "/images/acervo/ferrari.webp", alt: "Carro esportivo vermelho em papercraft", label: "Coleção Carros" },
  { src: "/images/acervo/cachorro.webp", alt: "Cachorro em papercraft 3D", label: "Cachorro" },
  { src: "/images/acervo/passaro.webp", alt: "Pássaro low poly em papel", label: "Pássaros" },
  { src: "/images/acervo/raposa.webp", alt: "Raposa low poly em papel", label: "Raposa" },
  { src: "/images/acervo/animais.webp", alt: "Coleção de animais em papel low poly", label: "Animais selvagens" },
  { src: "/images/acervo/pinguim.webp", alt: "Pinguim em papercraft 3D", label: "Pinguim" },
];





const categories = [
  "Pokémon", "Dragon Ball", "Naruto", "Harry Potter", "Star Wars", "Cavaleiros",
  "Origami", "Papercraft", "Low Poly", "Mandalas", "Animais", "Dinossauros",
  "Esculturas", "Máscaras", "Flores", "Luminárias", "Caixas & Embalagens",
  "Festas", "Natal", "Aniversário", "Letras 3D", "Objetos", "Decoração de parede",
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-card px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="craft-label text-[0.7rem] uppercase tracking-[0.14em]">
              Galeria
            </span>
            <h2 className="craft-title mt-4 text-[clamp(1.7rem,7vw,2rem)] sm:text-4xl">
              O que você vai conseguir montar
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Um carrossel que nunca para: role e veja os estilos disponíveis no acervo.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="marquee-mask -mx-5 mt-10 overflow-hidden sm:mx-0">
            <ul className="marquee-track flex px-5 sm:px-0">
              {[...carouselItems, ...carouselItems].map((item, i) => (
                <li
                  key={`${item.src}-${i}`}
                  aria-hidden={i >= carouselItems.length}
                  className="group mr-4 w-[60vw] shrink-0 overflow-hidden rounded-3xl border border-border bg-background sm:w-[260px]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.src}
                      alt={i >= carouselItems.length ? "" : item.alt}
                      width={520}
                      height={520}
                      sizes="(max-width: 640px) 60vw, 260px"
                      loading={i < 3 ? "eager" : "lazy"}
                      fetchPriority={i < 3 ? "high" : "low"}
                      decoding="async"
                      className="aspect-square h-auto w-full bg-muted object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
                    />
                  </div>
                  <p className="p-4 text-sm font-semibold">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>


        <Reveal delay={120} className="mt-14 text-center">
          <h3 className="craft-title text-[clamp(1.35rem,6vw,1.6rem)] sm:text-2xl">70 categorias. Mais de 3.500 moldes.</h3>
          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                {c}
              </li>
            ))}
            <li className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
              + dezenas de outras
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
