import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
// --- MASTER MENU DATA (All Categories Merged Into One Array) ---
const menuCategories = [
  {
  id: "ice-tea-special",
  title: "Ice Tea Collection",
  icon: "🧊",
  items: [
    { 
      name: "Ginger Lime Ice Tea", 
      basePrice: 60, 
      detail: "Zesty ginger meets cool citrus punch.", 
      img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc" 
    },
    { 
      name: "Mint Lime Ice Tea", 
      basePrice: 60, 
      detail: "Refreshing garden mint with a lime twist.", 
      img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87" 
    },
    { 
      name: "Rose Ice Tea", 
      basePrice: 70, 
      detail: "Elegant rose petals infused with cold brew tea.", 
      img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3" 
    },
    { 
      name: "Strawberry Water", 
      basePrice: 75, 
      detail: "Light, fruity, and naturally sweetened hydration.", 
      img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888" 
    },
    { 
      name: "Green Apple Ice Tea", 
      basePrice: 70, 
      detail: "Crisp and tart green apple flavor.", 
      img: "https://images.unsplash.com/photo-1536935338788-846bb9981813" 
    },
    { 
      name: "Blue Curacao Ice Tea", 
      basePrice: 75, 
      detail: "Tropical blue lagoon vibes in a glass.", 
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" 
    }
  ]
},

{
  id: "lassi-special",
  title: "Lassi & Creamy Blends",
  icon: "🥛",
  items: [
    { 
      name: "Sweet Lassi", 
      basePrice: 80, 
      detail: "Traditional thick yogurt whisked to perfection.", 
      img: "https://images.unsplash.com/photo-1627662056598-75c3c7a5c1d7" 
    },
    { 
      name: "Mango Lassi", 
      basePrice: 90, 
      detail: "Alphonso mango pulp blended with rich curd.", 
      img: "https://images.unsplash.com/photo-1546173159-315724a31696" 
    },
    { 
      name: "Passion Fruit Lassi", 
      basePrice: 100, 
      detail: "Exotic tropical twist with a tangy punch.", 
      img: "https://images.unsplash.com/photo-1590701966587-2059ac2b8f3c" 
    },
    { 
      name: "Strawberry Lassi", 
      basePrice: 95, 
      detail: "Fresh strawberry puree in a creamy blend.", 
      img: "https://images.unsplash.com/photo-1612392062631-94dd858cba88" 
    },
    { 
      name: "Tender Coconut Lassi", 
      basePrice: 110, 
      detail: "Refreshing coconut chunks and cooling lassi.", 
      img: "https://images.unsplash.com/photo-1590701966587-2059ac2b8f3c" 
    },
    { 
      name: "Jackfruit Lassi", 
      basePrice: 105, 
      detail: "Unique seasonal jackfruit for a sweet aroma.", 
      img: "https://images.unsplash.com/photo-1627662056598-75c3c7a5c1d7" 
    },
    { 
      name: "Custard Apple Lassi", 
      basePrice: 115, 
      detail: "Grainy custard apple (Sitaphal) richness.", 
      img: "https://images.unsplash.com/photo-1546173159-315724a31696" 
    }
  ]
},
{
  id: "mojitos-special",
  title: "Sparkling Mojitos",
  icon: "🍃",
  items: [
    { name: "Mint Lime Mojito", basePrice: 90, detail: "The original classic minty refresher.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Blue Curacao Mojito", basePrice: 95, detail: "Vibrant blue orange flavour with fizz.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Strawberry Mojito", basePrice: 100, detail: "Sweet muddled strawberries and lime.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Orange Mojito", basePrice: 95, detail: "Tangy citrus blast with fresh mint.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Green Apple Mojito", basePrice: 95, detail: "Crisp green apple with a minty kick.", img: "https://images.unsplash.com/photo-1536935338788-846bb9981813" },
    { name: "Ginger Lime Mojito", basePrice: 90, detail: "Spicy ginger punch with fresh lime.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Blue Berry Mojito", basePrice: 110, detail: "Muddled blueberries & sparkling soda.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Lychee Mojito", basePrice: 105, detail: "Exotic sweetness of lychee and mint.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Nannari Mojito", basePrice: 85, detail: "Traditional root extract with a fizzy twist.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Mango Mojito", basePrice: 100, detail: "Seasonal mango mashup with mint.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Banana Mojito", basePrice: 90, detail: "Unique creamy banana refresher.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Chicku Mojito", basePrice: 95, detail: "Sapota fruit fusion with sparkling soda.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Watermelon Mojito", basePrice: 90, detail: "Fresh summer watermelon and lime.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" },
    { name: "Muskmelon Mojito", basePrice: 90, detail: "Cool muskmelon essence with mint.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" }
  ]
},

{
  id: "fresh-juices",
  title: "Fresh Juices & Detox",
  icon: "🍊",
  items: [
    { 
      name: "Lemon / Mint / Soda", 
      basePrice: 40, 
      detail: "Classic citrus refresher in your choice of style.", 
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" 
    },
    { 
      name: "Grape / Grape Lemon", 
      basePrice: 60, 
      detail: "Deep purple grape extract with a tangy twist.", 
      img: "https://images.unsplash.com/photo-1596333522248-10186b28c971" 
    },
    { 
      name: "Pineapple / Pineapple Lemon", 
      basePrice: 70, 
      detail: "Tropical sweetness meets zesty lemon.", 
      img: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2" 
    },
    { 
      name: "Watermelon / Muskmelon", 
      basePrice: 60, 
      detail: "Hydrating summer favorites, 100% natural.", 
      img: "https://images.unsplash.com/photo-1563229283-12692af7b0be" 
    },
    { 
      name: "Orange / Sweet Lemon", 
      basePrice: 80, 
      detail: "Freshly squeezed Vitamin C boost.", 
      img: "https://images.unsplash.com/photo-1613478223719-2ab802602422" 
    },
    { 
      name: "Apple / Chicku / Mango", 
      basePrice: 90, 
      detail: "Thick, pulpy, and energy-packed fruit juice.", 
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce" 
    },
    { 
      name: "Pomo / Fig Juice", 
      basePrice: 110, 
      detail: "Premium antioxidant-rich health blends.", 
      img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5" 
    },
    { 
      name: "Pure Amla Juice", 
      basePrice: 50, 
      detail: "Powerful Vitamin C detox drink.", 
      img: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04" 
    },
    { 
      name: "ABC Juice (Pure)", 
      basePrice: 95, 
      detail: "Apple, Beetroot & Carrot - The ultimate detox.", 
      img: "https://images.unsplash.com/photo-1611080648211-b43a96568425" 
    },
    { 
      name: "Kiwi Juice", 
      basePrice: 120, 
      detail: "Zesty and exotic green kiwi extract.", 
      img: "https://images.unsplash.com/photo-1589010588553-46e8e7c21788" 
    },
    { 
      name: "Pure Carrot Juice", 
      basePrice: 80, 
      detail: "Freshly juiced carrots for healthy eyes & skin.", 
      img: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25" 
    }
  ]
},
{
  id: "milkshakes-delight",
  title: "Creamy Milkshakes",
  icon: "🍨",
  items: [
    { name: "Apple / Chikku / Mango", basePrice: 100, detail: "Classic creamy fruit-blended thick shakes.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699" },
    { name: "Fig / Pomo Milkshake", basePrice: 130, detail: "Energy-boosting shake with real fruit bits.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699" },
    { name: "Avocado (Butter Fruit)", basePrice: 150, detail: "Ultra-creamy premium avocado richness.", img: "https://images.unsplash.com/photo-1543644676-46c339225a99" },
    { name: "Strawberry Shake", basePrice: 120, detail: "Classic pink delight with fresh strawberry puree.", img: "https://images.unsplash.com/photo-1549741065-983eda6f56f6" },
    { name: "Dates / Red Banana", basePrice: 110, detail: "Naturally sweet and iron-rich healthy shake.", img: "https://images.unsplash.com/photo-1626078297492-b7ce55294061" },
    { name: "Custard Apple / Cherry", basePrice: 140, detail: "Seasonal specialty thick fruit shakes.", img: "https://images.unsplash.com/photo-1546173159-315724a31696" },
    { name: "Dragon Fruit Shake", basePrice: 140, detail: "Exotic pink dragon fruit blended with chilled milk.", img: "https://images.unsplash.com/photo-1525385133336-254847240f92" },
    { name: "Oreo / Dry Fruit Shake", basePrice: 120, detail: "Crunchy cookies or nutty indulgence.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699" },
    { name: "Sharjah / Tender Coconut", basePrice: 110, detail: "The famous Sharjah blend or refreshing coconut.", img: "https://images.unsplash.com/photo-1590701966587-2059ac2b8f3c" },
    { name: "Milo with Choco / Cocktail", basePrice: 130, detail: "Chocolatey energy or a mix of seasonal fruits.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699" }
  ]
},

{
  id: "sandwiches-hub",
  title: "Gourmet Sandwiches",
  icon: "🥪",
  items: [
    { 
      name: "Grill Veg Sandwich", 
      basePrice: 90, 
      detail: "Crunchy seasonal veggies with house-made green chutney & grill marks.", 
      img: "https://images.unsplash.com/photo-1528733918455-5a59687cedf0" 
    },
    { 
      name: "Chocolate Sandwich", 
      basePrice: 80, 
      detail: "Loaded with melted dark chocolate and a hint of butter.", 
      img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929" 
    },
    { 
      name: "Sweet Corn Sandwich", 
      basePrice: 95, 
      detail: "Golden corn kernels mixed with creamy mayo and herbs.", 
      img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847" 
    },
    { 
      name: "Paneer Sandwich", 
      basePrice: 110, 
      detail: "Spiced paneer cubes grilled to perfection with capsicum.", 
      img: "https://images.unsplash.com/photo-1528733918455-5a59687cedf0" 
    },
    { 
      name: "Chicken Sandwich", 
      basePrice: 130, 
      detail: "Shredded chicken seasoned with black pepper and creamy spread.", 
      img: "https://images.unsplash.com/photo-1567234665766-4740e29683c3" 
    },
    { 
      name: "Peanut Butter Sandwich", 
      basePrice: 85, 
      detail: "High-protein creamy peanut butter spread on toasted bread.", 
      img: "https://images.unsplash.com/photo-1528733918455-5a59687cedf0" 
    },
    { 
      name: "Club Veg Sandwich", 
      basePrice: 140, 
      detail: "Double-decker classic with garden-fresh greens and cheese.", 
      img: "https://images.unsplash.com/photo-1528733918455-5a59687cedf0" 
    },
    { 
      name: "Club Chicken Sandwich", 
      basePrice: 170, 
      detail: "Triple-layered with chicken, egg, and extra cheese slices.", 
      img: "https://images.unsplash.com/photo-1567234665766-4740e29683c3" 
    }
  ]
},

{
  id: "pizzas-vault",
  title: "Woodfire Style Pizzas",
  icon: "🍕",
  items: [
    { 
      name: "Veg Pizza", 
      basePrice: 160, 
      detail: "Garden fresh vegetables topped with premium mozzarella cheese.", 
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591" 
    },
    { 
      name: "Corn Pizza", 
      basePrice: 170, 
      detail: "Golden sweet corn kernels with a double cheese burst layer.", 
      img: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad50" 
    },
    { 
      name: "Paneer Pizza", 
      basePrice: 190, 
      detail: "Soft marinated paneer cubes with capsicum and spicy pizza sauce.", 
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591" 
    },
    { 
      name: "Chicken Pizza", 
      basePrice: 220, 
      detail: "Spicy chicken chunks, olives, and extra cheese for the meat lovers.", 
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591" 
    }
  ]
},

{
  id: "fries-starters",
  title: "Fries & Crispy Starters",
  icon: "🍟",
  items: [
    { 
      name: "French Fries", 
      basePrice: 80, 
      detail: "Classic golden-fried salted potato strips.", 
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877" 
    },
    { 
      name: "Peri Peri Fries", 
      basePrice: 95, 
      detail: "Hot and spicy African bird's eye chili seasoning.", 
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877" 
    },
    { 
      name: "Potato Smiley", 
      basePrice: 85, 
      detail: "Fun and crispy potato snacks (6 pieces).", 
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877" 
    },
    { 
      name: "Veg Nuggets", 
      basePrice: 90, 
      detail: "Crunchy golden fried veggie bites served with dip.", 
      img: "https://images.unsplash.com/photo-1562967914-6c8273ba3d0c" 
    },
    { 
      name: "Chicken Nuggets", 
      basePrice: 120, 
      detail: "Classic tender chicken pops (8 pieces).", 
      img: "https://images.unsplash.com/photo-1562967914-6c8273ba3d0c" 
    },
    { 
      name: "Chicken Cheese Ball", 
      basePrice: 140, 
      detail: "Gooey melted cheese inside crispy chicken balls.", 
      img: "https://images.unsplash.com/photo-1562967914-6c8273ba3d0c" 
    }
  ]
},

{
  id: "fried-chicken-hub",
  title: "Crispy Fried Chicken",
  icon: "🍗",
  items: [
    { 
      name: "Chicken Strips", 
      basePrice: 120, 
      detail: "Boneless crispy golden strips served with garlic mayo.", 
      img: "https://pngimg.com/d/fried_chicken_PNG14091.png" 
    },
    { 
      name: "Chicken Wings", 
      basePrice: 150, 
      detail: "Spicy and crunchy wings tossed in secret spices.", 
      img: "https://pngimg.com/d/fried_chicken_PNG14091.png" 
    },
    { 
      name: "Chicken Breast", 
      basePrice: 140, 
      detail: "Juicy, large fried breast piece for a heavy bite.", 
      img: "https://pngimg.com/d/fried_chicken_PNG14091.png" 
    },
    { 
      name: "Chicken Bites", 
      basePrice: 110, 
      detail: "Small bite-sized crunchies for quick snacking.", 
      img: "https://pngimg.com/d/fried_chicken_PNG14091.png" 
    },
    { 
      name: "Chicken Lollipop", 
      basePrice: 160, 
      detail: "Classic party starter with a spicy kick (5 pieces).", 
      img: "https://pngimg.com/d/fried_chicken_PNG14091.png" 
    },
    { 
      name: "Chicken Popcorn", 
      basePrice: 130, 
      detail: "Mini popcorn chicken bucket, perfect for movies or groups.", 
      img: "https://pngimg.com/d/fried_chicken_PNG14091.png" 
    }
  ]
},

{
  id: "parotta-rolls",
  title: "Flaky Parotta Rolls",
  icon: "🌯",
  items: [
    { 
      name: "Chicken Roll", 
      basePrice: 90, 
      detail: "Spiced chicken chunks wrapped in a crispy, flaky parotta.", 
      img: "https://images.unsplash.com/photo-1626776876729-babd3f19f83a" 
    },
    { 
      name: "Egg Roll", 
      basePrice: 70, 
      detail: "Double egg filling with crunchy veggies and house sauces.", 
      img: "https://images.unsplash.com/photo-1626776876729-babd3f19f83a" 
    },
    { 
      name: "Veg Roll", 
      basePrice: 60, 
      detail: "Fresh garden veggie mix with a dash of lime and spices.", 
      img: "https://images.unsplash.com/photo-1626776876729-babd3f19f83a" 
    },
    { 
      name: "Corn Roll", 
      basePrice: 85, 
      detail: "Creamy sweet corn and butter filling in a hot parotta.", 
      img: "https://images.unsplash.com/photo-1626776876729-babd3f19f83a" 
    },
    { 
      name: "Paneer Roll", 
      basePrice: 85, 
      detail: "Soft paneer cubes tossed in tandoori masala and wrapped.", 
      img: "https://images.unsplash.com/photo-1626776876729-babd3f19f83a" 
    }
  ]
},

{
  id: "burgers-fort",
  title: "Stack Burgers",
  icon: "🍔",
  items: [
    { 
      name: "Veg Cheese Burger", 
      basePrice: 100, 
      detail: "Crispy veg patty with melted cheese slice and house dressing.", 
      img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add" 
    },
    { 
      name: "Chicken Cheese Burger", 
      basePrice: 130, 
      detail: "Juicy chicken patty, fresh lettuce, and extra cheese punch.", 
      img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add" 
    },
    { 
      name: "Paneer Cheese Burger", 
      basePrice: 125, 
      detail: "Spiced paneer patty with herbs and creamy melted cheese.", 
      img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add" 
    },
    { 
      name: "Zinger Cheese Burger", 
      basePrice: 150, 
      detail: "Extra crispy chicken fillet burger – a true crunch master.", 
      img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add" 
    }
  ]
},

{
  id: "quick-bites-others",
  title: "Comfort Bites & Momos",
  icon: "🍜",
  items: [
    { 
      name: "Maggi (Special)", 
      basePrice: 50, 
      detail: "Choose your style: Veg, Egg, Chicken, Corn, or Paneer.", 
      img: "https://images.unsplash.com/photo-1612927601601-6638404737ce" 
    },
    { 
      name: "Omelette Variety", 
      basePrice: 40, 
      detail: "Freshly made: Bread, Chicken, Double, or Plain Omelette.", 
      img: "https://images.unsplash.com/photo-1510629954389-c1e0da47d414" 
    },
    { 
      name: "Saucy Momos", 
      basePrice: 120, 
      detail: "Veg/Chicken/Paneer momos tossed in creamy White or spicy Red sauce.", 
      img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9" 
    },
    { 
      name: "Classic Momos", 
      basePrice: 100, 
      detail: "Fried or Steamed - available in Veg, Paneer, or Chicken fillings.", 
      img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9" 
    }
  ]
},

{
    id: "hot-beverages",
    title: "Hot Beverages",
    icon: "☕",
    items: [
      { name: "Tea / Black / Lemon", basePrice: 20, detail: "Traditional chai infusions.", img: "https://images.unsplash.com/photo-1544787210-22bb840c5bcd" },
      { name: "Coffee / Sukku Coffee", basePrice: 25, detail: "Rich blend or herbal ginger.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
      { name: "Hot Badam Milk", basePrice: 40, detail: "Warm almond goodness.", img: "https://images.unsplash.com/photo-1553909489-cd47e0907980" },
      { name: "Ragi / Horlicks / Boost", basePrice: 35, detail: "Healthy energy malts.", img: "https://images.unsplash.com/photo-1553909489-cd47e0907980" },
      { name: "Milo with Choco", basePrice: 45, detail: "Kids' favorite chocolate malt.", img: "https://images.unsplash.com/photo-1553909489-cd47e0907980" }
    ]
  }
];



const sizes = [
  { label: "200ml", multiplier: 1 },
  { label: "350ml", multiplier: 1.4 },
  { label: "550ml", multiplier: 1.8 }
];

export default function PremiumTipTopMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(menuCategories[0].items[0]);
  const [selectedOrder, setSelectedOrder] = useState(null); 
  const [activeSize, setActiveSize] = useState(sizes[0]);

  // Delivery Redirect Function
  const handleDelivery = (platform) => {
    const finalPrice = Math.round(selectedOrder.basePrice * activeSize.multiplier);
    const phoneNumber = "919876543210"; 

    if (platform === 'whatsapp') {
      const text = `Hi Tip Top! I want to order: ${selectedOrder.name}\nSize: ${activeSize.label}\nPrice: ₹${finalPrice}`;
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
    } else if (platform === 'swiggy') {
      window.open(selectedOrder.swiggy, "_blank");
    } else if (platform === 'zomato') {
      window.open(selectedOrder.zomato, "_blank");
    }
  };

  const filteredMenu = useMemo(() => {
    return menuCategories.map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(cat => cat.items.length > 0);
  }, [searchTerm]);

  return (
    <section id="menu"className="relative min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedItem.img}
            src={selectedItem.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            className="w-full h-full object-cover blur-[100px]"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl"></div>
      </div>

     {/* --- HYPER-PREMIUM CAFE HERO SECTION --- */}
<section className="relative min-h-screen bg-[#020202] flex items-center justify-center overflow-hidden font-sans">
  
  {/* 1. CINEMATIC BACKGROUND LAYER */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedItem.img}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.4, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {/* Background Image - Neenga inga unga cafe-oda nalla photo-vai pottukalam */}
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale-[20%]"
          alt="Premium Cafe Ambience"
        />
      </motion.div>
    </AnimatePresence>

    {/* LUXURY VIGNETTE (Corner-la irunthu dark-ah center-la light-ah varum) */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-80" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
  </div>

  {/* 2. FLOATING AMBIENCE (Optional: Dust particles effect) */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-amber-500/20 rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>

  {/* 3. HERO CONTENT */}
  <div className="relative z-10 text-center px-6">
    <motion.div 
      initial={{ opacity: 0, letterSpacing: "-0.05em" }}
      animate={{ opacity: 1, letterSpacing: "0em" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.span 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-amber-500 font-black tracking-[0.8em] text-[10px] uppercase mb-6 block drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]"
      >
        The Art of Taste • Anna Nagar
      </motion.span>
      
      <h1 className="text-7xl md:text-[12rem] font-black text-white leading-[0.85] tracking-tighter mb-8">
        TIP TOP<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 italic font-serif">
          Experience.
        </span>
      </h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-white/50 max-w-lg mx-auto mb-12 text-sm md:text-base font-light leading-relaxed italic"
      >
        "Where every sip tells a story and every bite is a memory."
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="group relative px-14 py-6 overflow-hidden rounded-full bg-white text-black font-black uppercase tracking-widest text-[11px] transition-all"
        >
          <span className="relative z-10">Explore the Vault ↗</span>
          <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
        </motion.button>

        <button className="px-10 py-6 border border-white/20 rounded-full text-white font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-black transition-all">
          Our Story
        </button>
      </div>
    </motion.div>
  </div>

  {/* SCROLL INDICATOR */}
  <motion.div 
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
  >
    <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent" />
    <span className="text-[8px] text-white/30 uppercase tracking-[0.4em]">Scroll</span>
  </motion.div>
</section>

     {/* --- FULL SCREEN MENU DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30 }} className="fixed inset-0 z-50 bg-[#080808] flex flex-col md:flex-row">
            {/* Desktop Left Preview */}
            <div className="hidden lg:flex w-2/5 items-center justify-center p-20 border-r border-white/5 bg-[#0a0a0a]">
              <motion.div key={selectedItem.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <img src={selectedItem.img} className="w-96 h-[30rem] object-cover rounded-[3rem] shadow-2xl mb-8 border border-white/10" alt="" />
                <h3 className="text-4xl font-black uppercase italic tracking-tighter text-amber-500">{selectedItem.name}</h3>
                <p className="text-white/40 mt-4 text-sm max-w-xs mx-auto">{selectedItem.detail}</p>
              </motion.div>
            </div>

            {/* Right Scrollable List */}
            <div className="flex-1 overflow-y-auto px-6 md:px-16 py-12 no-scrollbar">
              <div className="flex justify-between items-center mb-10 sticky top-0 bg-[#080808]/95 backdrop-blur-md py-4 z-20">
                <h2 className="text-2xl font-black italic uppercase tracking-widest">Our <span className="text-amber-500">Selection.</span></h2>
                <button onClick={() => setIsOpen(false)} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">✕</button>
              </div>

              <input 
                type="text" placeholder="Search craving..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 mb-12 text-white outline-none focus:border-amber-500"
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {filteredMenu.map((cat) => (
                <div key={cat.id} className="mb-16">
                  <h4 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span> {cat.title}
                  </h4>
                  <div className="grid gap-4">
                    {cat.items.map((item) => (
                      <motion.div 
                        key={item.name} 
                        onMouseEnter={() => setSelectedItem(item)}
                        className={`group p-6 rounded-[2rem] border transition-all flex justify-between items-center cursor-pointer ${selectedItem.name === item.name ? "bg-white text-black border-white" : "bg-white/5 text-white border-white/5 hover:border-white/20"}`}
                      >
                        <div className="max-w-[60%]">
                          <h5 className="font-black text-xl uppercase tracking-tight">{item.name}</h5>
                          <p className="text-[10px] font-bold opacity-50 uppercase mt-1">{item.detail}</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="text-2xl font-black italic">₹{item.basePrice}</span>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedOrder(item); }}
                            className="bg-amber-500 text-black px-6 py-3 rounded-xl font-black text-[10px] uppercase hover:bg-black hover:text-white transition-colors"
                          >
                            Add
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ORDER CUSTOMIZATION MODAL --- */}
      <AnimatePresence>
        {selectedOrder && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-[#111] w-full max-w-md rounded-[3rem] p-10 border border-white/10 relative">
              <button onClick={() => setSelectedOrder(null)} className="absolute top-8 right-8 text-white/30 text-xl">✕</button>
              
              <div className="text-center mb-8">
                <img src={selectedOrder.img} className="w-32 h-32 rounded-3xl object-cover mx-auto mb-6 shadow-2xl border-2 border-amber-500/20" alt="" />
                <h2 className="text-4xl font-black uppercase italic text-white leading-none">{selectedOrder.name}</h2>
              </div>

              <div className="mb-10">
                <p className="text-amber-500 text-[10px] font-black uppercase mb-4 tracking-widest text-center">Select Your Size</p>
                <div className="flex gap-2">
                  {sizes.map(s => (
                    <button 
                      key={s.label} onClick={() => setActiveSize(s)}
                      className={`flex-1 py-4 rounded-2xl font-black text-[10px] border transition-all ${activeSize.label === s.label ? 'bg-white text-black border-white' : 'text-white border-white/10 hover:bg-white/5'}`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center py-6 border-t border-white/5 mb-8">
                <span className="text-white/30 text-[10px] font-black uppercase">Total Amount</span>
                <span className="text-5xl font-black text-amber-500 italic">₹{Math.round(selectedOrder.basePrice * activeSize.multiplier)}</span>
              </div>

              <div className="grid gap-3">
                <button onClick={() => handleDelivery('whatsapp')} className="w-full py-5 bg-[#25D366] text-white font-black rounded-2xl flex items-center justify-center gap-3 text-[11px] uppercase tracking-widest shadow-lg shadow-green-500/10">WhatsApp Order</button>
                <button onClick={() => handleDelivery('swiggy')} className="w-full py-5 bg-white/5 text-white font-bold rounded-2xl text-[11px] uppercase tracking-widest border border-white/5">Other Platforms</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    
  );   </section>
  );
}