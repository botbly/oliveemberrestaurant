'use client';

import { Camera, Heart, Users, Utensils } from 'lucide-react';

export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      alt: "Wood-fired lamb with herbs",
      category: "Food",
      caption: "Our signature lamb shoulder, slow-roasted with Mediterranean herbs"
    },
    {
      src: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg", 
      alt: "Grilled octopus dish",
      category: "Food",
      caption: "Fresh octopus grilled to perfection over our wood-fired coals"
    },
    {
      src: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg",
      alt: "Mediterranean mezze spread",
      category: "Food", 
      caption: "Our seasonal mezze featuring local vegetables and house-made spreads"
    },
    {
      src: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
      alt: "Restaurant interior dining room",
      category: "Interior",
      caption: "Main dining room with view of our open wood-fired kitchen"
    },
    {
      src: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
      alt: "Private dining room setup", 
      category: "Interior",
      caption: "The Olive Room set for an intimate private dinner"
    },
    {
      src: "https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg",
      alt: "Wine selection and bar area",
      category: "Interior",
      caption: "Our carefully curated wine selection featuring Mediterranean varietals"
    },
    {
      src: "https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg",
      alt: "Chef preparing food at wood-fired grill",
      category: "Kitchen",
      caption: "Chef Maria working at our signature wood-fired grill"
    },
    {
      src: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
      alt: "Kitchen team plating dishes",
      category: "Kitchen", 
      caption: "Our culinary team crafting each dish with Mediterranean passion"
    },
    {
      src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
      alt: "Private event celebration",
      category: "Events",
      caption: "Celebrating life's special moments at Olive & Ember"
    }
  ];

  const categories = ["All", "Food", "Interior", "Kitchen", "Events"];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Gallery
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            A visual journey through our Mediterranean kitchen and dining experience
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-white border border-sage/30 text-charcoal hover:bg-olive hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-sm border border-sage/20">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Overlay Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">
                      {image.caption}
                    </p>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-olive text-white text-xs font-medium rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
              Ready to Experience Olive & Ember?
            </h2>
            <p className="text-charcoal/80 mb-6">
              Join us for an unforgettable Mediterranean dining experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5550147264"
                className="bg-olive text-white px-6 py-3 rounded-md hover:bg-olive/90 transition-colors"
              >
                Make Reservation
              </a>
              <a 
                href="mailto:events@oliveandember.example"
                className="border-2 border-olive text-olive px-6 py-3 rounded-md hover:bg-olive hover:text-white transition-colors"
              >
                Plan Private Event
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}