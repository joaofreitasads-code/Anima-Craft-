import { Reveal } from "./Reveal";

const bonus = [
  { icon: "📘", title: "Guia de montagem", text: "Passo a passo ilustrado para montar peças perfeitas desde a primeira tentativa." },
  { icon: "🖨️", title: "Ajustes de impressão", text: "Configurações prontas para papel, escala e qualidade em qualquer impressora." },
  { icon: "💰", title: "Manual de vendas", text: "Como precificar, fotografar e vender suas peças em marketplaces e no Instagram." },
  { icon: "🎁", title: "Atualizações vitalícias", text: "Todo molde novo adicionado ao acervo cai automaticamente na sua conta." },
];

export function BonusSection() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="craft-label text-[0.7rem] uppercase tracking-[0.14em]">
            Bônus inclusos
          </span>
          <h2 className="craft-title mt-4 text-[clamp(1.7rem,7vw,2rem)] sm:text-4xl">
            Você leva junto, sem pagar nada a mais
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {bonus.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 70}>
              <div className="h-full craft-card rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(70,40,20,0.16)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-highlight/40 text-xl">
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
  );
}
