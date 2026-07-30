import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

const CHECKOUT_29_90 =
  "https://checkout.wiven.com.br/checkout/cms82d3m30jy501pxu556i81d?offer=PQ4J11J";

const comparison = [
  ["Gasta R$ 200+ por peça pronta", "Monta peças por centavos"],
  ["Decoração igual a de todo mundo", "Peças exclusivas feitas por você"],
  ["Depende de loja e frete", "Imprime em casa, na hora"],
  ["Nenhuma renda extra", "Vende quantas peças quiser"],
  ["Espera dias pela entrega", "Acesso imediato após a compra"],
];

const basico = [
  "Pacote Premium",
  "23 categorias",
  "Mais de 1.000 moldes",
  "Acesso vitalício",
  "Uso comercial",
];

const basicoOut = ["Super Combo", "Atualizações futuras"];

const completo = [
  "Tudo do Pacote Básico (+1.000 moldes Premium)",
  "+ SUPER COMBO completo (47 categorias extras)",
  "+ 3.500 moldes no total — o maior acervo do Brasil",
  "Inclui Pokémon, Dragon Ball, Naruto, Cavaleiros, Star Wars, Harry Potter",
  "Inclui Origami, Papercut, Low Poly, Mandalas",
  "Acesso vitalício + atualizações futuras grátis",
  "Permissão para uso comercial (venda quanto quiser)",
  "Envio imediato por e-mail e WhatsApp",
];


function Check({ ok = true }: { ok?: boolean }) {
  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
        ok ? "bg-primary/25" : "bg-muted text-muted-foreground"
      }`}
    >
      {ok ? "✓" : "×"}
    </span>
  );
}

export function OfferSections() {
  return (
    <>
      {/* Comparação */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <h2 className="craft-title text-[clamp(1.7rem,7vw,2rem)] sm:text-4xl">
              A diferença entre antes e depois
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card/60 p-6">
                <h3 className="text-base font-bold text-muted-foreground">SEM O ACERVO</h3>
                <ul className="mt-5 space-y-4">
                  {comparison.map(([before]) => (
                    <li key={before} className="flex gap-3 text-sm text-muted-foreground">
                      <Check ok={false} />
                      <span className="min-w-0">{before}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full craft-card rounded-3xl border-2 border-primary p-6">
                <h3 className="text-base font-bold">COM O ACERVO</h3>
                <ul className="mt-5 space-y-4">
                  {comparison.map(([, after]) => (
                    <li key={after} className="flex gap-3 text-sm font-medium">
                      <Check />
                      <span className="min-w-0">{after}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="bg-card px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <span className="craft-label text-[0.7rem] uppercase tracking-[0.14em]">
              Escolha seu acesso
            </span>
            <h2 className="craft-title mt-4 text-[clamp(1.7rem,7vw,2rem)] sm:text-4xl">
              Pagamento único. Acesso para sempre.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {/* Básico */}
            <Reveal>
              <div className="craft-card rounded-3xl p-7">
                <h3 className="text-xl">Plano Básico</h3>
                <p className="mt-4">
                  <span className="craft-price">R$ 10,90</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Pagamento único</p>

                <ul className="mt-6 space-y-3">
                  {basico.map((f) => (
                    <li key={f} className="flex gap-3 text-sm font-medium">
                      <Check />
                      <span className="min-w-0">{f}</span>
                    </li>
                  ))}
                  {basicoOut.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 text-sm text-muted-foreground line-through"
                    >
                      <Check ok={false} />
                      <span className="min-w-0">{f}</span>
                    </li>
                  ))}
                </ul>

                <CTAButton href={CHECKOUT_29_90} external className="mt-7">
                  Quero o Básico
                </CTAButton>
              </div>
            </Reveal>

            {/* Completo */}
            <Reveal delay={80}>
              <div className="craft-card relative rounded-3xl border-2 border-primary p-7">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
                  Mais popular
                </span>
                <h3 className="text-xl">Plano Completo</h3>
                <p className="mt-4">
                  <span className="text-sm text-muted-foreground line-through">R$ 97,00</span>
                  <span className="craft-price ml-2">R$ 29,90</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Pagamento único</p>

                <ul className="mt-6 space-y-3">
                  {completo.map((f) => (
                    <li key={f} className="flex gap-3 text-sm font-medium">
                      <Check />
                      <span className="min-w-0">{f}</span>
                    </li>
                  ))}
                </ul>

                <CTAButton href={CHECKOUT_29_90} external className="mt-7">
                  Quero o Completo
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
