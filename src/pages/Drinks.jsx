import InteractiveMenu from "../components/InteractiveMenu";

export default function Drinks() {
  return (
    <InteractiveMenu
      title="Cool Drinks"
      subtitle="Refreshing Since 2010"
      categories={[
        {
          id: "drinks",
          title: "Beverages",
          icon: "🍹",
          items: [
            {
              name: "Tip Top Special Tea",
              price: "25",
              detail: "Iconic Anna Nagar blend",
              img: "https://images.unsplash.com/photo-1544787210-2211d247156e"
            },
            {
              name: "Blueberry Mojito",
              price: "75",
              detail: "Fresh berries & mint",
              img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
            }
          ]
        }
      ]}
    />
  );
}
