import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renderiza a página principal da cafeteria", () => {
    render(<App />);

    expect(screen.getByText(/Cafeteria Colonial/i)).toBeInTheDocument();
    expect(screen.getByText(/Nosso Menu/i)).toBeInTheDocument();
    expect(screen.getByText(/Visite-nos/i)).toBeInTheDocument();
  });
});