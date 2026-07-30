import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Reveal } from "./Reveal";

const testimonials = [
  {
    src: "/images/acervo/depoimento.webp",
    alt: "Depoimento de cliente satisfeito com o Mega Acervo de Moldes Decorativos 3D",
    width: 941,
    height: 1672,
  },
  {
    src: "/images/acervo/depoimento-2.webp",
    alt: "Outro depoimento de cliente aprovando os moldes decorativos 3D",
    width: 949,
    height: 1658,
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-card px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="craft-title text-[clamp(1.7rem,7vw,2rem)] sm:text-4xl">
            Quem já está montando não para mais
          </h2>
        </Reveal>

        <Reveal className="mt-10" delay={70}>
          <div className="relative">
            <figure className="craft-card overflow-hidden rounded-3xl p-3 sm:p-4">
              <img
                key={testimonials[index].src}
                src={testimonials[index].src}
                alt={testimonials[index].alt}
                width={testimonials[index].width}
                height={testimonials[index].height}
                className="w-full rounded-2xl"
                loading="lazy"
              />
              <figcaption className="sr-only">
                Depoimento real de quem comprou e aprovou o acervo de moldes 3D.
              </figcaption>
            </figure>

            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={() => go(-1)}
              className="craft-card absolute left-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-foreground sm:-left-5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={() => go(1)}
              className="craft-card absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-foreground sm:-right-5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.src}
                type="button"
                aria-label={`Ver depoimento ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={
                  i === index
                    ? "h-2.5 w-6 rounded-full bg-primary transition-all"
                    : "h-2.5 w-2.5 rounded-full bg-border transition-all"
                }
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
