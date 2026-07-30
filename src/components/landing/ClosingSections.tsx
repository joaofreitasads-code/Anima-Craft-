import { useState } from "react";

import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Preciso de impressora especial?",
    a: "Não. Qualquer impressora caseira com papel A4 comum já funciona. Papel mais grosso deixa a peça mais firme, mas é opcional.",
  },
  {
    q: "É difícil de montar?",
    a: "Não. Todos os moldes vêm com linhas de corte e dobra marcadas, além do guia de montagem passo a passo incluso.",
  },
  {
    q: "Posso vender as peças que eu montar?",
    a: "Sim. O uso comercial está liberado em ambos os planos. Tudo o que você vender é 100% seu.",
  },
  {
    q: "Como recebo o acesso?",
    a: "A entrega é imediata e automática após a confirmação do pagamento, direto no seu e-mail.",
  },
  {
    q: "O acesso expira?",
    a: "Nunca. O acesso é vitalício e você pode baixar e imprimir quantas vezes quiser.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Basta pedir o reembolso e devolvemos todo o valor, sem burocracia.",
  },
];

export function ClosingSections() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* Garantia */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <Reveal className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] sm:p-12">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-2xl">
              🛡️
            </span>
            <h2 className="mt-6 text-[1.6rem] leading-tight sm:text-3xl">
              Garantia incondicional de 7 dias
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Teste o acervo inteiro sem risco. Se não for para você, é só pedir o reembolso
              dentro de 7 dias — devolvemos tudo, sem perguntas e sem burocracia.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-card px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <h2 className="craft-title text-[clamp(1.7rem,7vw,2rem)] sm:text-4xl">Perguntas frequentes</h2>
          </Reveal>

          <ul className="mt-10 space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal as="li" key={item.q} delay={(i % 3) * 50}>
                  <div className="overflow-hidden craft-card rounded-2xl">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 px-6 py-4 text-left"
                    >
                      <span className="min-w-0 text-sm font-bold sm:text-base">{item.q}</span>
                      <span
                        className={`shrink-0 text-lg transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="craft-title text-[clamp(2rem,8.5vw,2.5rem)] sm:text-5xl">
            Sua próxima peça de decoração está a uma folha A4 de distância
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            <span className="craft-highlight">Mais de 3.500 moldes</span>,{" "}
            <span className="craft-highlight">acesso vitalício</span> e{" "}
            <span className="craft-highlight">uso comercial</span> liberado por um valor
            menor que um lanche.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <CTAButton
              href="https://checkout.wiven.com.br/checkout/cms82d3m30jy501pxu556i81d?offer=PQ4J11J"
              external
            >
              Quero o acervo completo por R$ 29,90
            </CTAButton>
            <p className="mt-3 text-xs text-muted-foreground">
              Entrega imediata • Garantia de 7 dias • Pagamento único
            </p>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold">Mega Acervo de Moldes Decorativos 3D</p>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground">
            Produto 100% digital. Nenhum item físico é enviado. Os resultados variam de
            acordo com a dedicação de cada pessoa.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mega Acervo 3D. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
