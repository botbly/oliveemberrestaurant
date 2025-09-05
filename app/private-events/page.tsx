'use client';

import { Mail, Users, Calendar, DollarSign } from 'lucide-react';

export default function PrivateEvents() {
  const eventSpaces = [
    {
      name: "The Olive Room",
      capacity: "Up to 24 seated",
      description: "Intimate private dining room with garden views and fireplace",
      minimum: "20 guest minimum",
    },
    {
      name: "The Ember Room", 
      capacity: "Up to 40 seated",
      description: "Elegant space with wood-fired oven views and private bar",
      minimum: "30 guest minimum",
    },
    {
      name: "Full Restaurant Buyout",
      capacity: "Up to 80 seated",
      description: "Complete restaurant exclusivity with full kitchen and bar",
      minimum: "60 guest minimum",
    }
  ];

  const sampleMenus = [
    {
      name: "Mediterranean Feast Menu",
      price: "$65 per person",
      courses: [
        "Selection of mezze and appetizers",
        "Choice of wood-fired main course",
        "Seasonal dessert",
        "Coffee and tea service"
      ]
    },
    {
      name: "Executive Lunch Menu",
      price: "$45 per person", 
      courses: [
        "Garden salad or soup",
        "Choice of three main courses",
        "Dessert selection",
        "Beverages included"
      ]
    },
    {
      name: "Celebration Menu",
      price: "$85 per person",
      courses: [
        "Champagne reception with canapes",
        "Three-course seated dinner",
        "Wine pairings available",
        "Custom celebration cake"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-terracotta text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Private Events
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Create unforgettable memories with our Mediterranean hospitality and exceptional cuisine
          </p>
        </div>
      </section>

      {/* Event Spaces */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              Event Spaces
            </h2>
            <p className="text-lg text-charcoal/80">
              Choose the perfect setting for your special occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventSpaces.map((space, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-sage/20 overflow-hidden">
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                    {space.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <Users className="h-4 w-4 text-terracotta" />
                    <span className="text-sm font-semibold text-olive">{space.capacity}</span>
                  </div>
                  <p className="text-charcoal/80 mb-4">
                    {space.description}
                  </p>
                  <p className="text-sm text-charcoal/60 font-medium">
                    {space.minimum}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Menus */}
      <section className="py-16 bg-sage/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              Sample Menus
            </h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              Our executive chef will work with you to create a custom menu that perfectly suits your event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleMenus.map((menu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-sage/20 p-6">
                <div className="text-center mb-4">
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                    {menu.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <DollarSign className="h-4 w-4 text-olive" />
                    <span className="text-lg font-bold text-olive">{menu.price}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {menu.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="text-charcoal/80 text-sm">
                      • {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-charcoal/70 text-sm">
              All menus can be customized for dietary restrictions and preferences
            </p>
          </div>
        </div>
      </section>

      {/* Event Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Event Details */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                Event Information
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="h-5 w-5 text-terracotta" />
                    <h3 className="font-semibold text-charcoal">Timing & Availability</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    <li>• Event hours: 11:00 AM - 11:00 PM</li>
                    <li>• Minimum 2-week advance booking</li>
                    <li>• Weekend events require 4-week notice</li>
                    <li>• Holiday events book 6-8 weeks in advance</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <DollarSign className="h-5 w-5 text-terracotta" />
                    <h3 className="font-semibold text-charcoal">Pricing & Policies</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    <li>• Room fees may apply based on group size</li>
                    <li>• 20% service charge on all events</li>
                    <li>• 50% deposit required to secure booking</li>
                    <li>• Final headcount due 72 hours prior</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                Plan Your Event
              </h2>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="h-6 w-6 text-terracotta" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-charcoal">
                      Event Inquiries
                    </h3>
                    <p className="text-charcoal/60 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <a 
                  href="mailto:events@oliveandember.example" 
                  className="text-xl font-semibold text-olive hover:text-olive/80 transition-colors block mb-4"
                >
                  events@oliveandember.example
                </a>
                
                <p className="text-sm text-charcoal/70 mb-4">
                  Please include the following information in your inquiry:
                </p>
                
                <ul className="space-y-2 text-sm text-charcoal/70">
                  <li>✓ Preferred date and time</li>
                  <li>✓ Number of guests</li>
                  <li>✓ Event type and occasion</li>
                  <li>✓ Estimated budget per person</li>
                  <li>✓ Any dietary restrictions</li>
                  <li>✓ Special requests or needs</li>
                </ul>
              </div>

              {/* Sample Form (Non-functional) */}
              <div className="bg-sage/10 rounded-lg p-6">
                <p className="text-sm text-charcoal/70 text-center mb-4">
                  <strong>Note:</strong> This form is for layout purposes only. 
                  Please use the email address above for all event inquiries.
                </p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                      disabled
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                      disabled
                    />
                  </div>
                  
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                    disabled
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                      disabled
                    />
                    <select 
                      className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                      disabled
                    >
                      <option>Guest Count</option>
                    </select>
                  </div>
                  
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your event..."
                    className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                    disabled
                  ></textarea>
                  
                  <button 
                    type="submit"
                    className="w-full bg-olive/50 text-white py-2 rounded-md cursor-not-allowed"
                    disabled
                  >
                    Form Disabled - Use Email Above
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}