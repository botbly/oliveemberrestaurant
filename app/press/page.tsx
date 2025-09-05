import { Star, Calendar, ExternalLink } from 'lucide-react';

const pressItems = [
  {
    publication: "Arlington Dining Guide",
    date: "December 2024",
    headline: "Olive & Ember Brings Authentic Mediterranean Fire to Arlington",
    excerpt: "Chef Maria Santos has created something truly special with her wood-fired approach to Mediterranean cuisine. Every dish showcases the perfect balance of tradition and innovation.",
    rating: 5,
    type: "Review"
  },
  {
    publication: "Virginia Food & Wine",
    date: "November 2024", 
    headline: "Best New Restaurant: Olive & Ember",
    excerpt: "This intimate Arlington gem proves that exceptional Mediterranean cuisine doesn't require a trip to the coast. The wood-fired lamb alone is worth the visit.",
    rating: 5,
    type: "Award"
  },
  {
    publication: "DC Metro Eats",
    date: "October 2024",
    headline: "Fire and Flavor: A Night at Olive & Ember",
    excerpt: "From the moment you walk in, you're transported to a Mediterranean village. The open kitchen, warm hospitality, and incredible aromas create an unforgettable experience.",
    rating: 4,
    type: "Review"
  },
  {
    publication: "The Arlington Tribune",
    date: "September 2024",
    headline: "Local Restaurant Showcases Regional Ingredients",
    excerpt: "Olive & Ember's commitment to Virginia farms and seasonal menus sets a new standard for sustainable dining in our community.",
    rating: null,
    type: "Feature"
  },
  {
    publication: "Foodie Weekly",
    date: "August 2024",
    headline: "Mediterranean Magic in the Heart of Arlington",
    excerpt: "Chef Santos' background shines through in every carefully crafted dish. The grilled octopus and wood-fired vegetables are absolutely exceptional.",
    rating: 5,
    type: "Review"
  },
  {
    publication: "Capital City Magazine",
    date: "July 2024",
    headline: "Rising Star: Chef Maria Santos",
    excerpt: "With her innovative approach to traditional Mediterranean cooking, Chef Santos is quickly becoming one of the region's most celebrated culinary talents.",
    rating: null,
    type: "Profile"
  }
];

export default function Press() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-olive text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Press & Reviews
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            What food critics and local publications are saying about Olive & Ember
          </p>
        </div>
      </section>

      {/* Awards Banner */}
      <section className="py-8 bg-terracotta text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold">
            🏆 Winner: Best New Restaurant 2024 - Virginia Food & Wine Magazine
          </p>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {pressItems.map((item, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm border border-sage/20 p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-sage/20 text-sage text-xs font-medium rounded-full">
                        {item.type}
                      </span>
                      <span className="text-sm text-charcoal/60 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-charcoal mb-2">
                      {item.headline}
                    </h2>
                    <p className="text-sm font-medium text-olive">
                      {item.publication}
                    </p>
                  </div>
                  
                  {item.rating && (
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < item.rating! ? 'text-terracotta fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                <blockquote className="text-charcoal/80 italic text-lg leading-relaxed">
                  "{item.excerpt}"
                </blockquote>
              </article>
            ))}
          </div>

          {/* Media Contact */}
          <div className="mt-16 bg-sage/10 rounded-lg p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
              Media Inquiries
            </h2>
            <p className="text-charcoal/80 mb-6">
              For press inquiries, high-resolution images, or interview requests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:press@oliveandember.example"
                className="bg-olive text-white px-6 py-3 rounded-md hover:bg-olive/90 transition-colors inline-flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                press@oliveandember.example
              </a>
              <a 
                href="tel:5550147264"
                className="border-2 border-olive text-olive px-6 py-3 rounded-md hover:bg-olive hover:text-white transition-colors"
              >
                (555) 014-7264
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}