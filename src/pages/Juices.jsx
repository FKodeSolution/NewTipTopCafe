import InteractiveMenu from "../components/InteractiveMenu";

export default function Juices() {
  return (
    <InteractiveMenu
      title="Fresh Juices"
      subtitle="Pure & Natural"
      categories={[
        {
          id: "juice",
          title: "Juices & Shakes",
          icon: "🍊",
          items: [
            {
              name: "Royal Kesar Falooda",
              price: "140",
              detail: "Dry fruits & saffron",
              img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699"
            },
            {
              name: "Tender Coconut Special",
              price: "90",
              detail: "Fresh coconut pulp",
              img: "https://images.unsplash.com/photo-1596649299486-4cdea56fd59d"
            }
          ]
        }
      ]}
    />
  );
}
