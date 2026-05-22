import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CartItem } from "@/hooks/useCart";
import { formatCurrency } from "@/utils/currency";
import { createWhatsappOrderUrl } from "@/utils/whatsapp";

type CartDrawerProps = {
  isOpen: boolean;
  items: CartItem[];
  totalPrice: number;
  onClose: () => void;
  onIncrease: (itemId: string) => void;
  onDecrease: (itemId: string) => void;
  onRemove: (itemId: string) => void;
  onClear: () => void;
};

export function CartDrawer({
  isOpen,
  items,
  totalPrice,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
}: CartDrawerProps) {
  const hasItems = items.length > 0;
  const whatsappUrl = createWhatsappOrderUrl(items, totalPrice);

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={onClose}
      />

      <aside
        className={`fixed bottom-0 right-0 top-0 z-[70] flex w-full max-w-md flex-col border-l border-amber-700/20 bg-stone-950 shadow-2xl shadow-black/40 transition-transform duration-300 sm:rounded-l-3xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Carrinho de pedidos"
        aria-hidden={!isOpen}
      >
        <header className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">Pedido</p>
            <h2 className="mt-1 text-2xl font-bold text-white">Seu carrinho</h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Fechar carrinho"
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {!hasItems ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 bg-white/[0.03] p-8 text-center">
              <ShoppingBag className="mb-5 size-12 text-amber-500" />
              <h3 className="text-2xl font-bold text-white">Carrinho vazio</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Escolha uma bebida ou quitanda no menu para montar seu pedido de retirada.
              </p>
              <Button className="mt-6 rounded-2xl px-6" onClick={onClose}>
                Ver menu
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-black/10"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="88"
                      height="88"
                      className="size-20 rounded-2xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-bold text-white">{item.title}</h3>
                          <p className="mt-1 text-sm text-white/60">{item.price}</p>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          className="rounded-full p-2 text-white/45 transition-colors hover:bg-red-500/10 hover:text-red-300"
                          aria-label={`Remover ${item.title}`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center rounded-full border border-white/10 bg-black/20 p-1">
                          <button
                            type="button"
                            onClick={() => onDecrease(item.id)}
                            className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            aria-label={`Diminuir quantidade de ${item.title}`}
                          >
                            <Minus className="size-4" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-bold text-white">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onIncrease(item.id)}
                            className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            aria-label={`Aumentar quantidade de ${item.title}`}
                          >
                            <Plus className="size-4" />
                          </button>
                        </div>

                        <strong className="text-sm text-amber-500">
                          {formatCurrency(item.priceCents * item.quantity)}
                        </strong>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <footer className="border-t border-white/10 bg-stone-950 px-6 py-5">
          <div className="mb-4 flex items-center justify-between text-white">
            <span className="text-sm uppercase tracking-[0.25em] text-white/50">Total</span>
            <strong className="text-2xl text-amber-500">{formatCurrency(totalPrice)}</strong>
          </div>

          <div className="grid gap-3">
            <Button
              asChild
              className="h-12 rounded-2xl bg-green-700 text-white hover:bg-green-800"
              aria-disabled={!hasItems}
            >
              <a
                href={hasItems ? whatsappUrl : undefined}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => {
                  if (!hasItems) {
                    event.preventDefault();
                  }
                }}
              >
                Enviar pedido pelo WhatsApp
              </a>
            </Button>

            {hasItems && (
              <button
                type="button"
                onClick={onClear}
                className="text-sm font-semibold text-white/50 transition-colors hover:text-white"
              >
                Limpar carrinho
              </button>
            )}
          </div>
        </footer>
      </aside>
    </>
  );
}
