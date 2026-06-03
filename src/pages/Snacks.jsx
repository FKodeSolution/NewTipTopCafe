import InteractiveMenu from "../components/InteractiveMenu";

export default function Snacks() {
  return (
    <InteractiveMenu
      title="Hot Snacks"
      subtitle="Crunchy & Tasty"
      categories={[
        {
          id: "snacks",
          title: "Cafe Snacks",
          icon: "🍕",
          items: [
            {
              name: "Veg Cheese Pizza",
              price: "140",
              detail: "Mozzarella loaded",
              img: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
            }
          ]
        }
      ]}
    />
  );
}
