import { useState } from "react";
import { menuItems, type MenuCategory } from "@/data/menu";
import { SectionTitle } from "./SectionTitle";

const categories: Array<{ value: MenuCategory; label: string }> = [
  { value: "bebidas", label: "☕ Bebidas" },
  { value: "quitandas", label: "🥐 Quitandas" },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("bebidas");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="menu" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <SectionTitle eyebrow="Seleção Especial" title="Nosso Menu" />
        </div>

        <div className="mb-20 flex flex-wrap justify-center gap-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`border-b-2 pb-4 text-sm font-light uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.value
                  ? "border-amber-600 text-amber-600"
                  : "border-transparent text-white/50 hover:text-white/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems[activeCategory].map((item, index) => (
            <div
              key={item.title}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group cursor-pointer"
            >
              <div className="relative mb-6 h-48 overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  width="480"
                  height="320"
                  className={`h-full w-full object-cover transition-transform duration-500 ${
                    hoveredItem === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                    hoveredItem === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredItem === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="font-light tracking-wider text-white">VER DETALHES</span>
                </div>
              </div>

              <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-amber-600">
                {item.title}
              </h3>
              <p className="mb-4 text-sm font-light text-white/70">{item.desc}</p>
              <p className="text-lg font-bold text-amber-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
