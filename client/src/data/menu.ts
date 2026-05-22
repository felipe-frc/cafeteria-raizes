export type MenuCategory = "bebidas" | "quitandas";

export type MenuItem = {
  title: string;
  desc: string;
  price: string;
  image: string;
};

export const menuItems: Record<MenuCategory, MenuItem[]> = {
  bebidas: [
    {
      title: "Espresso Colonial",
      desc: "Intenso e encorpado",
      price: "R$ 8,00",
      image: "/images/menu/espresso-colonial.png",
    },
    {
      title: "Cappuccino Tradicional",
      desc: "Leite vaporizado artesanal",
      price: "R$ 12,00",
      image: "/images/menu/cappuccino-tradicional.png",
    },
    {
      title: "Café com Leite",
      desc: "Combinação perfeita",
      price: "R$ 10,00",
      image: "/images/menu/cafe-com-leite.png",
    },
    {
      title: "Macchiato Clássico",
      desc: "Espresso com espuma",
      price: "R$ 11,00",
      image: "/images/menu/macchiato-classico.png",
    },
    {
      title: "Café Coado",
      desc: "Método tradicional",
      price: "R$ 7,00",
      image: "/images/menu/cafe-coado.png",
    },
    {
      title: "Café Gelado",
      desc: "Refrescante sofisticado",
      price: "R$ 10,00",
      image: "/images/menu/cafe-gelado.png",
    },
  ],
  quitandas: [
    {
      title: "Pão de Queijo",
      desc: "Quentinho artesanal",
      price: "R$ 6,00",
      image: "/images/menu/pao-de-queijo.png",
    },
    {
      title: "Bolo de Milho",
      desc: "Receita tradicional",
      price: "R$ 8,00",
      image: "/images/menu/bolo-de-milho.png",
    },
    {
      title: "Broa de Milho",
      desc: "Crocante e macia",
      price: "R$ 7,00",
      image: "/images/menu/broa-de-milho.png",
    },
    {
      title: "Bolo de Chocolate",
      desc: "Chocolate belga",
      price: "R$ 10,00",
      image: "/images/menu/bolo-de-chocolate.png",
    },
    {
      title: "Biscoito de Polvilho",
      desc: "Crocante leve",
      price: "R$ 5,00",
      image: "/images/menu/biscoito-de-polvilho.png",
    },
    {
      title: "Croissant Artesanal",
      desc: "Amanteigado especial",
      price: "R$ 9,00",
      image: "/images/menu/croissant.png",
    },
  ],
};
