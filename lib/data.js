export const products = [
  {
    id: 1,
    name: "Upcycled Denim Tote Bag",
    price: "$45",
    description: "Crafted from post-consumer denim waste, this durable tote bag is perfect for everyday use while significantly reducing textile waste in landfills.",
    materials: "100% Upcycled Denim Cotton",
    carbonFootprint: "2.4 kg CO2e (75% lower than virgin cotton bags)",
    image: "/images/denim_tote_bag.png",
    calcParams: { weightKg: 0.6, origin: "Local", transportMethod: "Land", materialComplexity: "Low", packaging: "Minimal" }
  },
  {
    id: 2,
    name: "Recycled Glass Carafe",
    price: "$38",
    description: "Hand-blown from 100% recycled glass. Its elegant design makes it a beautiful centerpiece while promoting circular economy.",
    materials: "100% Recycled Glass",
    carbonFootprint: "1.1 kg CO2e (energy-efficient kiln process)",
    image: "/images/glass_carafe.png",
    calcParams: { weightKg: 1.2, origin: "Overseas", transportMethod: "Sea", materialComplexity: "Medium", packaging: "Premium" }
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: "$35",
    description: "A wardrobe essential made entirely from certified organic cotton, grown without harmful pesticides or synthetic fertilizers.",
    materials: "100% GOTS Certified Organic Cotton",
    carbonFootprint: "3.2 kg CO2e (carbon offset via reforestation)",
    image: "/images/organic_tshirt.png",
    calcParams: { weightKg: 0.2, origin: "Local", transportMethod: "Land", materialComplexity: "Medium", packaging: "Minimal" }
  },
  {
    id: 4,
    name: "Biodegradable Phone Case",
    price: "$28",
    description: "Protect your phone and the planet. This phone case is made from plant-based materials and is 100% compostable at the end of its life.",
    materials: "Flax Straw & Plant-based Biopolymers",
    carbonFootprint: "0.8 kg CO2e (climate neutral certified)",
    image: "/images/biodegradable_case.png",
    calcParams: { weightKg: 0.05, origin: "Local", transportMethod: "Land", materialComplexity: "High", packaging: "Minimal" }
  },
  {
    id: 5,
    name: "Reclaimed Wood Side Table",
    price: "$210",
    description: "A minimalist side table crafted from locally sourced reclaimed timber, preserving forest ecosystems and reducing logging.",
    materials: "Reclaimed Oak Wood, Water-based Finish",
    carbonFootprint: "Negative (carbon stored in wood > emissions)",
    image: "/images/wood_side_table.png",
    calcParams: { weightKg: 15.0, origin: "Local", transportMethod: "Land", materialComplexity: "High", packaging: "Standard" }
  },
  {
    id: 6,
    name: "Recycled Ocean Plastic Sunglasses",
    price: "$85",
    description: "Stylish eyewear made from plastic waste recovered from oceans. Each pair helps clean marine ecosystems.",
    materials: "100% Recycled HDPE Ocean Plastic",
    carbonFootprint: "1.5 kg CO2e (includes collection and recycling)",
    image: "/images/ocean_sunglasses.png",
    calcParams: { weightKg: 0.1, origin: "Overseas", transportMethod: "Air", materialComplexity: "High", packaging: "Premium" }
  },
  {
    id: 7,
    name: "Stainless Steel Bento Box",
    price: "$42",
    description: "Say goodbye to single-use plastic containers. This durable, food-grade stainless steel bento box is designed to last a lifetime.",
    materials: "304 Food-Grade Stainless Steel",
    carbonFootprint: "4.5 kg CO2e (high initial, near-zero lifetime emissions)",
    image: "/images/stainless_bento.png",
    calcParams: { weightKg: 0.5, origin: "Overseas", transportMethod: "Sea", materialComplexity: "High", packaging: "Standard" }
  },
  {
    id: 8,
    name: "Vegan Apple Leather Notebook",
    price: "$32",
    description: "Jot down your thoughts in this premium notebook bound in innovative vegan leather made from apple waste from the juice industry.",
    materials: "Apple Peel Fiber, Recycled Paper Pages",
    carbonFootprint: "1.2 kg CO2e",
    image: "/images/apple_leather_notebook.png",
    calcParams: { weightKg: 0.4, origin: "Local", transportMethod: "Land", materialComplexity: "Medium", packaging: "Minimal" }
  },
  {
    id: 9,
    name: "Reusable Beeswax Food Wraps",
    price: "$18",
    description: "A natural alternative to plastic wrap. Washable, reusable, and compostable at the end of their lifecycle.",
    materials: "Organic Cotton, Sustainably Harvested Beeswax, Jojoba Oil",
    carbonFootprint: "0.5 kg CO2e",
    image: "/images/beeswax_wraps.png",
    calcParams: { weightKg: 0.1, origin: "Local", transportMethod: "Land", materialComplexity: "Low", packaging: "Minimal" }
  },
  {
    id: 10,
    name: "Bamboo Toothbrush Set",
    price: "$15",
    description: "A set of four biodegradable toothbrushes with sustainably sourced bamboo handles, drastically reducing plastic bathroom waste.",
    materials: "Moso Bamboo Handle, BPA-free Nylon Bristles",
    carbonFootprint: "0.2 kg CO2e per brush",
    image: "/images/bamboo_toothbrush.png",
    calcParams: { weightKg: 0.08, origin: "Overseas", transportMethod: "Sea", materialComplexity: "Low", packaging: "Minimal" }
  },
  {
    id: 11,
    name: "Solar-Powered Portable Charger",
    price: "$65",
    description: "Harness the sun's energy to charge your devices on the go. Built with highly efficient solar panels and a durable recycled casing.",
    materials: "Recycled ABS Plastic, Monocrystalline Silicon Solar Panels",
    carbonFootprint: "8.5 kg CO2e (offsets itself after 1 year of use)",
    image: "/images/solar_charger.png",
    calcParams: { weightKg: 0.3, origin: "Overseas", transportMethod: "Air", materialComplexity: "High", packaging: "Premium" }
  },
  {
    id: 12,
    name: "Plant-Based Cleaning Sponge",
    price: "$12",
    description: "Ditch synthetic microplastics. These sponges are made entirely from natural fibers and are fully biodegradable.",
    materials: "Loofah, Wood Cellulose",
    carbonFootprint: "0.1 kg CO2e",
    image: "/images/plant_sponge.png",
    calcParams: { weightKg: 0.02, origin: "Local", transportMethod: "Land", materialComplexity: "Low", packaging: "Minimal" }
  }
];
