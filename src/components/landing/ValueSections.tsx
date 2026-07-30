import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

const problems = [
  { label: "Escultura decorativa em loja", price: "R$ 189" },
  { label: "Quadro geométrico 3D", price: "R$ 240" },
  { label: "Peça de parede minimalista", price: "R$ 320" },
  { label: "Kit de decoração para festa", price: "R$ 450" },
];

const steps = [
  { n: "01", title: "Baixe", text: "Acesso imediato ao acervo completo em PDF, direto no seu celular ou computador." },
  { n: "02", title: "Imprima", text: "Papel A4 comum ou couché. Qualquer impressora caseira já dá conta." },
  { n: "03", title: "Recorte", text: "Linhas guiadas e numeradas. Nada de adivinhação: é só seguir o traçado." },
  { n: "04", title: "Monte", text: "Dobre, cole e veja a peça 3D ganhar forma em poucos minutos." },
];

const benefits = [
  { icon: "💸", title: "Economize de verdade", text: "Peças de R$ 200 saem por centavos de papel e cola." },
  { icon: "🏠", title: "Decore cada canto", text: "Sala, quarto, festa, loja. Ambientes com cara de projeto autoral." },
  { icon: "📈", title: "Renda extra real", text: "Venda as peças montadas ou por encomenda. O lucro é 100% seu." },
  { icon: "🎯", title: "Resultado profissional", text: "Moldes desenhados por designers, com encaixes precisos." },
  { icon: "♾️", title: "Use quantas vezes quiser", text: "Imprima e monte infinitas vezes, sem limite algum." },
  { icon: "⚡", title: "Comece hoje", text: "Entrega imediata após a compra. Em 5 minutos você já está montando." },
];

export function ValueSections() {
  return (
    <>
      {/* Problema */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="craft-label text-[0.7rem] uppercase tracking-[0.14em]">
              O problema
            </span>
            <h2 className="craft-title mt-4 text-[clamp(1.7rem,7vw,2rem)] sm:text-4xl">
              Decorar sua casa está absurdamente caro
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Uma única peça decorativa custa mais do que um mês inteiro de criatividade.
              Veja quanto você pagaria por aí:
            </p>
          </Reveal>
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {problems.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 60}>
              <div className="flex items-center justify-between gap-4 craft-card rounded-2xl p-5">
                <span className="min-w-0 text-sm font-medium">{item.label}</span>
                <span className="shrink-0 text-base font-bold text-destructive line-through">
                  {item.price}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-xl rounded-2xl bg-primary/15 p-5 text-center text-base font-semibold">
            Com o acervo, você monta todas essas peças gastando menos de R$ 30 — uma única vez.
          </p>
        </Reveal>
      </section>

      {/* Solução / Como funciona */}
      <section id="como-funciona" className="bg-card px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="craft-label text-[0.7rem] uppercase tracking-[0.14em]">
                A solução
              </span>
              <h2 className="craft-title mt-4 text-[clamp(1.7rem,7vw,2rem)] sm:text-4xl">
                Quatro passos entre uma folha em branco e uma peça de galeria
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <div className="h-full craft-card rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="text-sm font-bold text-primary-hover">{step.n}</span>
                  <h3 className="mt-3 text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mx-auto mt-10 max-w-sm">
            <CTAButton
              href="https://checkout.wiven.com.br/checkout/cms82d3m30jy501pxu556i81d?offer=PQ4J11J"
              external
            >
              Começar agora por R$ 29,90
            </CTAButton>
          </Reveal>
        </div>
      </section>

      {/* Benefícios */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="craft-title text-[clamp(1.7rem,7vw,2rem)] sm:text-4xl">
                Muito mais do que moldes bonitos
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 70}>
                <div className="h-full craft-card rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(70,40,20,0.16)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-xl">
                    {b.icon}
                  </span>
                  <h3 className="mt-5 text-lg">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
