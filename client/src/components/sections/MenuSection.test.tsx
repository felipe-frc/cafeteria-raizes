import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { MenuSection } from "./MenuSection";

describe("MenuSection", () => {
  it("renderiza a categoria inicial de bebidas", () => {
    render(<MenuSection onAddToCart={vi.fn()} onCartOpen={vi.fn()} />);

    expect(screen.getByText(/Nosso Menu/i)).toBeInTheDocument();
    expect(screen.getByText(/Espresso Colonial/i)).toBeInTheDocument();
    expect(screen.getByText(/Cappuccino Tradicional/i)).toBeInTheDocument();
  });

  it("alterna para a categoria de quitandas", async () => {
    const user = userEvent.setup();

    render(<MenuSection onAddToCart={vi.fn()} onCartOpen={vi.fn()} />);

    await user.click(screen.getByRole("button", { name: /quitandas/i }));

    expect(screen.getByText(/Pão de Queijo/i)).toBeInTheDocument();
    expect(screen.getByText(/Bolo de Milho/i)).toBeInTheDocument();
  });

  it("adiciona produto ao carrinho e abre o carrinho", async () => {
    const user = userEvent.setup();
    const onAddToCart = vi.fn();
    const onCartOpen = vi.fn();

    render(<MenuSection onAddToCart={onAddToCart} onCartOpen={onCartOpen} />);

    const addButtons = screen.getAllByRole("button", { name: /adicionar/i });

    await user.click(addButtons[0]);

    expect(onAddToCart).toHaveBeenCalledTimes(1);
    expect(onCartOpen).toHaveBeenCalledTimes(1);
  });
});