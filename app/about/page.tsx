export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-sage text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Bringing the warmth and flavors of the Mediterranean to Arlington
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
                alt="Mediterranean landscape with olive trees"
                className="w-full h-96 object-cover rounded-lg shadow-sm"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">
                Mediterranean Inspiration
              </h2>
              <p className="text-charcoal/80 mb-4">
                Olive & Ember was born from a passion for authentic Mediterranean cuisine and the timeless tradition of cooking with fire. Our founders traveled extensively through Greece, Turkey, Spain, and Southern Italy, collecting recipes, techniques, and inspiration from local families and village cooks.
              </p>
              <p className="text-charcoal/80 mb-4">
                What struck them most was not just the incredible flavors, but the way food brought communities together around the warmth of wood-fired ovens and ember-kissed grills. They knew they had to bring this spirit of hospitality and authentic cooking to Virginia.
              </p>
              <p className="text-charcoal/80">
                Today, we honor those traditions while celebrating the incredible seasonal produce and artisanal products available right here in the Mid-Atlantic region.
              </p>
            </div>
          </div>

          {/* Chef Section */}
          <div className="bg-white rounded-lg shadow-sm border border-sage/20 p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
                  alt="Chef working in kitchen"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
                  Chef Maria Santos
                </h2>
                <p className="text-charcoal/80 mb-4">
                  Executive Chef Maria Santos brings over 15 years of experience in Mediterranean cuisine to Olive & Ember. Trained in the kitchens of Barcelona and later refined her skills in the fire-cooking traditions of rural Andalusia, Maria is passionate about wood-fired techniques and olive oil-forward cooking.
                </p>
                <p className="text-charcoal/80 mb-4">
                  "Cooking with fire is both ancient and immediate," Maria explains. "Each dish tells a story of the flames, the wood, the season, and the hands that prepared it. We're not just feeding people – we're connecting them to something timeless."
                </p>
                <p className="text-charcoal/80">
                  Under her leadership, our kitchen sources from over a dozen local farms and creates a menu that changes with Virginia's seasons, always staying true to Mediterranean principles of simplicity, quality, and bold flavors.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-8">
              Our Philosophy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-terracotta text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  🔥
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  Fire-Focused Techniques
                </h3>
                <p className="text-charcoal/80 text-sm">
                  Our wood-fired oven and ember grill are the heart of our kitchen, imparting unique flavors and textures that can't be replicated any other way.
                </p>
              </div>

              <div>
                <div className="bg-olive text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  🫒
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  Olive Oil Forward
                </h3>
                <p className="text-charcoal/80 text-sm">
                  We source premium extra virgin olive oils from family producers and use them not just as cooking medium, but as a featured ingredient.
                </p>
              </div>

              <div>
                <div className="bg-sage text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  🌿
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  Regional Spices
                </h3>
                <p className="text-charcoal/80 text-sm">
                  Our spice blends are crafted in-house using traditional Mediterranean combinations like za'atar, baharat, and herbes de Provence.
                </p>
              </div>
            </div>
          </div>

          {/* Sustainability */}
          <div className="bg-sage/10 rounded-lg p-8">
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 text-center">
              Sustainability Commitment
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-charcoal mb-3">Local Sourcing</h3>
                <p className="text-charcoal/80 text-sm mb-4">
                  We partner with over a dozen Virginia farms to source seasonal produce, herbs, and proteins. Our relationships with local growers allow us to plan menus around peak freshness and support our regional food system.
                </p>
                
                <h3 className="font-semibold text-charcoal mb-3">Seasonal Menus</h3>
                <p className="text-charcoal/80 text-sm">
                  Our menu changes four times yearly to highlight ingredients at their peak. This means better flavors for you and reduced environmental impact from transportation and storage.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-charcoal mb-3">Waste Reduction</h3>
                <p className="text-charcoal/80 text-sm mb-4">
                  We compost all organic waste, use reusable linens, and work with suppliers who share our commitment to minimal packaging and sustainable practices.
                </p>
                
                <h3 className="font-semibold text-charcoal mb-3">Energy Efficiency</h3>
                <p className="text-charcoal/80 text-sm">
                  Our wood-fired oven uses locally sourced hardwood, and we've invested in energy-efficient equipment throughout the kitchen and dining areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}