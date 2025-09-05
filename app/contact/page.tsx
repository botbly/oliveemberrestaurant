'use client';

import { MapPin, Phone, Mail, Clock, Car, Train } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're here to make your Mediterranean dining experience exceptional
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-start space-x-4">
                    <div className="bg-terracotta text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                        Location
                      </h3>
                      <p className="text-charcoal/80 mb-2">
                        2145 Willow Lane<br />
                        Arlington, VA 22207
                      </p>
                      <p className="text-sm text-charcoal/60">
                        Located in the heart of Arlington's dining district, just minutes from downtown DC
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-start space-x-4">
                    <div className="bg-olive text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                        Phone
                      </h3>
                      <a 
                        href="tel:5550147264" 
                        className="text-lg font-semibold text-olive hover:text-olive/80 transition-colors"
                      >
                        (555) 014-7264
                      </a>
                      <p className="text-sm text-charcoal/60 mt-1">
                        Available during business hours for reservations and inquiries
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-start space-x-4">
                    <div className="bg-sage text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                        Email
                      </h3>
                      <div className="space-y-1">
                        <div>
                          <p className="text-sm text-charcoal/60">General & Reservations:</p>
                          <a 
                            href="mailto:hello@oliveandember.example" 
                            className="text-olive hover:text-olive/80 transition-colors break-all"
                          >
                            hello@oliveandember.example
                          </a>
                        </div>
                        <div>
                          <p className="text-sm text-charcoal/60">Private Events:</p>
                          <a 
                            href="mailto:events@oliveandember.example" 
                            className="text-olive hover:text-olive/80 transition-colors break-all"
                          >
                            events@oliveandember.example
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours & Directions */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-8">
                Hours & Directions
              </h2>

              <div className="space-y-6">
                {/* Hours */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-start space-x-4">
                    <div className="bg-terracotta text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
                        Dining Hours
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-between items-center py-1 border-b border-sage/20">
                          <span className="font-medium text-charcoal">Monday - Thursday</span>
                          <span className="text-charcoal/80">11:30 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-sage/20">
                          <span className="font-medium text-charcoal">Friday - Saturday</span>
                          <span className="text-charcoal/80">11:30 AM - 11:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="font-medium text-charcoal">Sunday</span>
                          <span className="text-charcoal/80">12:00 PM - 9:00 PM</span>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal/60 mt-3">
                        Kitchen closes 30 minutes before closing time
                      </p>
                    </div>
                  </div>
                </div>

                {/* Parking */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-start space-x-4">
                    <div className="bg-olive text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Car className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                        Parking
                      </h3>
                      <ul className="space-y-1 text-sm text-charcoal/80">
                        <li>• Complimentary valet parking available evenings</li>
                        <li>• Street parking with 2-hour meters during the day</li>
                        <li>• Municipal parking garage across the street</li>
                        <li>• Accessible parking spaces available</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Transit */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-start space-x-4">
                    <div className="bg-sage text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Train className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                        Public Transit
                      </h3>
                      <ul className="space-y-1 text-sm text-charcoal/80">
                        <li>• 3 blocks from Clarendon Metro Station (Orange/Silver Line)</li>
                        <li>• Multiple bus routes within 2 blocks</li>
                        <li>• Capital Bikeshare station adjacent to restaurant</li>
                        <li>• 15-minute metro ride from downtown DC</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-8 text-center">
              Find Us
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-sage/20 p-8 text-center">
              <div 
                className="w-full h-96 bg-sage/20 rounded-lg flex items-center justify-center"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="bg-white/90 p-6 rounded-lg">
                  <MapPin className="h-8 w-8 text-terracotta mx-auto mb-2" />
                  <p className="font-semibold text-charcoal">Interactive Map</p>
                  <p className="text-sm text-charcoal/70">2145 Willow Lane, Arlington, VA 22207</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-8 text-center">
              Send Us a Message
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-sage/10 rounded-lg p-6 text-center mb-6">
                <p className="text-charcoal/70 mb-2">
                  <strong>Note:</strong> This contact form is for layout demonstration only.
                </p>
                <p className="text-sm text-charcoal/60">
                  Please use phone or email above for all inquiries and reservations.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-sage/20 p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                        disabled
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                      disabled
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                      disabled
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Subject
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                      disabled
                    >
                      <option>General Inquiry</option>
                      <option>Reservation Request</option>
                      <option>Private Event</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={5} 
                      className="w-full px-3 py-2 border border-sage/30 rounded-md focus:outline-none focus:ring-2 focus:ring-olive/20"
                      disabled
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-olive/50 text-white py-3 rounded-md cursor-not-allowed"
                    disabled
                  >
                    Form Disabled - Use Contact Info Above
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