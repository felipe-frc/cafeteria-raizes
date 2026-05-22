import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0">
        <img
          src="/images/cafeteria-identidade.png"
          alt="Identidade visual da Cafeteria Raízes"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-stone-900/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <a
          href="#sobre"
          aria-label="Ir para a próxima seção"
          className="absolute left-1/2 top-60 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-amber-700 text-white shadow-2xl transition-all duration-300 animate-bounce hover:bg-amber-800"
        >
          <ArrowRight className="h-6 w-6 rotate-90 text-white" />
        </a>
      </div>
    </section>
  );
}
