'use client';

import { Badge } from '@/components/ui/badge';

const menuSections = [
  {
    title: "Starters",
    items: [
      {
        name: "Wood-Fired Olives",
        description: "Warm Castelvetrano and Kalamata olives with rosemary, lemon, and chili",
        price: "$12",
        dietary: ["V", "VG", "GF"]
      },
      {
        name: "Grilled Halloumi",
        description: "Cypriot cheese with honey, za'atar, and grilled pita",
        price: "$16",
        dietary: ["V"]
      },
      {
        name: "Charred Octopus",
        description: "Tender octopus with white beans, capers, and lemon vinaigrette",
        price: "$22",
        dietary: ["GF"]
      },
      {
        name: "Lamb Meatballs",
        description: "House-made meatballs in spiced tomato sauce with yogurt and herbs",
        price: "$18",
        dietary: []
      }
    ]
  },
  {
    title: "Salads",
    items: [
      {
        name: "Village Salad",
        description: "Tomatoes, cucumber, olives, red onion, and feta with oregano dressing",
        price: "$16",
        dietary: ["V", "GF"]
      },
      {
        name: "Roasted Beet Salad",
        description: "Golden and red beets with arugula, goat cheese, and walnut vinaigrette",
        price: "$18",
        dietary: ["V", "GF"]
      },
      {
        name: "Grain Bowl",
        description: "Farro, quinoa, roasted vegetables, chickpeas, and tahini dressing",
        price: "$20",
        dietary: ["V", "VG"]
      }
    ]
  },
  {
    title: "Wood-Fired Mains",
    items: [
      {
        name: "Whole Branzino",
        description: "Mediterranean sea bass with lemon, herbs, and olive oil",
        price: "$32",
        dietary: ["GF"]
      },
      {
        name: "Lamb Shoulder",
        description: "Slow-roasted with rosemary, garlic, and seasonal vegetables",
        price: "$38",
        dietary: ["GF"]
      },
      {
        name: "Chicken Souvlaki",
        description: "Marinated chicken skewers with tzatziki and warm pita",
        price: "$26",
        dietary: []
      },
      {
        name: "Grilled Swordfish",
        description: "With caponata, pine nuts, and fresh herb oil",
        price: "$34",
        dietary: ["GF"]
      },
      {
        name: "Vegetable Moussaka",
        description: "Layers of eggplant, zucchini, and lentils with béchamel",
        price: "$24",
        dietary: ["V"]
      }
    ]
  },
  {
    title: "Sides",
    items: [
      {
        name: "Lemon Potatoes",
        description: "Roasted with herbs and olive oil",
        price: "$8",
        dietary: ["V", "VG", "GF"]
      },
      {
        name: "Grilled Asparagus",
        description: "With almonds and lemon zest",
        price: "$10",
        dietary: ["V", "VG", "GF"]
      },
      {
        name: "Wild Rice Pilaf",
        description: "With dried fruits and nuts",
        price: "$9",
        dietary: ["V", "VG"]
      }
    ]
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Baklava",
        description: "Traditional phyllo with honey, nuts, and cardamom ice cream",
        price: "$12",
        dietary: ["V"]
      },
      {
        name: "Fig Tart",
        description: "Seasonal figs with almond cream and pistachios",
        price: "$14",
        dietary: ["V"]
      },
      {
        name: "Greek Yogurt Panna Cotta",
        description: "With honey, walnuts, and seasonal fruit",
        price: "$10",
        dietary: ["V", "GF"]
      }
    ]
  },
  {
    title: "Non-Alcoholic Beverages",
    items: [
      {
        name: "Fresh Juices",
        description: "Orange, grapefruit, or seasonal selections",
        price: "$6",
        dietary: ["V", "VG", "GF"]
      },
      {
        name: "Mediterranean Iced Tea",
        description: "Mint and hibiscus blend",
        price: "$5",
        dietary: ["V", "VG", "GF"]
      },
      {
        name: "Sparkling Water",
        description: "San Pellegrino or Perrier",
        price: "$4",
        dietary: ["V", "VG", "GF"]
      }
    ]
  },
  {
    title: "Wines by the Glass",
    items: [
      {
        name: "Assyrtiko, Santorini",
        description: "Crisp Greek white with mineral notes",
        price: "$14",
        dietary: ["V", "VG"]
      },
      {
        name: "Rosé, Provence",
        description: "Dry and elegant French rosé",
        price: "$12",
        dietary: ["V", "VG"]
      },
      {
        name: "Nero d'Avola, Sicily",
        description: "Full-bodied red with Mediterranean character",
        price: "$13",
        dietary: ["V", "VG"]
      },
      {
        name: "Tempranillo, Spain",
        description: "Medium-bodied with cherry and spice notes",
        price: "$11",
        dietary: ["V", "VG"]
      }
    ]
  }
];

const dietaryLegend = {
  "V": { label: "Vegetarian", color: "bg-sage text-white" },
  "VG": { label: "Vegan", color: "bg-olive text-white" },
  "GF": { label: "Gluten Free", color: "bg-terracotta text-white" }
};

export default function Menu() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-olive text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Mediterranean flavors crafted with seasonal Virginia ingredients and wood-fired techniques
          </p>
        </div>
      </section>

      {/* Seasonal Note */}
      <section className="py-6 bg-terracotta text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">
            🍂 Our menu changes seasonally to highlight the best local ingredients
          </p>
        </div>
      </section>

      {/* Dietary Legend */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(dietaryLegend).map(([key, info]) => (
              <div key={key} className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${info.color}`}>
                  {key}
                </span>
                <span className="text-charcoal">{info.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-8 text-center border-b-2 border-sage/30 pb-4">
                {section.title}
              </h2>
              
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-semibold text-charcoal">
                        {item.name}
                      </h3>
                      <span className="font-bold text-olive text-lg">
                        {item.price}
                      </span>
                    </div>
                    
                    <p className="text-charcoal/80 mb-3">
                      {item.description}
                    </p>
                    
                    {item.dietary.length > 0 && (
                      <div className="flex gap-2">
                        {item.dietary.map((diet) => (
                          <span
                            key={diet}
                            className={`px-2 py-1 rounded-full text-xs font-medium ${dietaryLegend[diet as keyof typeof dietaryLegend].color}`}
                          >
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Menu CTA */}
      <section className="py-12 bg-sage/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
            Take Our Menu With You
          </h2>
          <p className="text-charcoal/80 mb-6">
            Download a PDF copy of our current menu
          </p>
          <button 
            className="bg-olive text-white px-6 py-3 rounded-md hover:bg-olive/90 transition-colors"
            onClick={() => alert('PDF download feature would be implemented here')}
          >
            Download Menu PDF
          </button>
        </div>
      </section>
    </div>
  );
}