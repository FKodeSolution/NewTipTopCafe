import InteractiveMenu from "../components/InteractiveMenu";

export default function Specials() {
  return (
    <InteractiveMenu
      title="Chef Specials"
      subtitle="Signature Items"
      categories={[
        {
          id: "specials",
          title: "Crispy Eats",
          icon: "🍗",
          items: [
            {
              name: "Classic Fried Chicken",
              price: "125",
              detail: "12 spice secret recipe",
              img: "https://images.unsplash.com/photo-1626645738196-c2a7c8d08f58"
            },
            {
              name: "Saucy Momos",
              price: "80",
              detail: "Schezwan tossed",
              img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9"
            }
          ]
        }
      ]}
    />
  );
}
