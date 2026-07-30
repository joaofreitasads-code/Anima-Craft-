import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

const badges = [
  "Download imediato",
  "Uso comercial",
  "Acesso vitalício",
  "+3.500 moldes",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brown px-5 pb-14 pt-10 text-brown-foreground sm:px-8 sm:pb-20 sm:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-highlight/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="text-center lg:text-left">
          <Reveal className="craft-label inline-flex items-center gap-2 text-xs">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Acervo digital com mais de 3.500 moldes prontos
          </Reveal>


          <Reveal delay={60}>
            <h1 className="craft-title-light mt-6 text-[clamp(2.25rem,9vw,2.75rem)] sm:text-5xl lg:text-[3.4rem]">
              Transforme{" "}
              <mark className="craft-highlight box-decoration-clone bg-transparent">
                R$ 0,50 de papel
              </mark>{" "}
              em peças de decoração que{" "}
              <mark className="craft-highlight box-decoration-clone bg-transparent">
                parecem custar R$ 300
              </mark>
            </h1>
          </Reveal>


          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brown-muted sm:text-lg lg:mx-0">
              Baixe, imprima, recorte e monte. Decore sua casa por centavos — ou venda as
              peças e transforme papel em renda extra.
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-8">
            <CTAButton
              href="https://checkout.wiven.com.br/checkout/cms82d3m30jy501pxu556i81d?offer=PQ4J11J"
              external
              className="sm:max-w-sm lg:mx-0"
            >
              Quero acesso imediato
            </CTAButton>
            <p className="mt-3 text-xs text-brown-muted">
              Pagamento único • Garantia de 7 dias • Entrega automática
            </p>

          </Reveal>

          <Reveal delay={240}>
            <ul className="mx-auto mt-7 grid max-w-md grid-cols-2 gap-x-4 gap-y-3 text-left text-sm font-medium lg:mx-0">
              {badges.map((badge) => (
                <li key={badge} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-[11px] font-bold">
                    ✓
                  </span>
                  <span className="min-w-0">{badge}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 lg:mt-0">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]">
            <img
              src="/images/hero-moldes.webp"
              alt="Esculturas decorativas 3D montadas com moldes de papel A4"
              width={1200}
              height={912}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
