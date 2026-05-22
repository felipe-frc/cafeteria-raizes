import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Menu", href: "#menu" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-stone-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img
            src="/images/logo-cafeteria.png"
            alt="Cafeteria Raízes"
            className="h-12 object-contain"
          />
        </a>

        <div className="hidden items-center gap-12 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-light uppercase tracking-wider text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button
          asChild
          size="sm"
          className="rounded-2xl px-6 py-3 font-semibold uppercase tracking-widest !text-white shadow-lg shadow-amber-950/20 hover:bg-amber-800 hover:!text-white hover:shadow-amber-700/30"
        >
          <a href="#contato" aria-label="Reservar mesa">RESERVAR</a>
        </Button>
      </nav>
    </header>
  );
}
