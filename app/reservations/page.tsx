'use client';

import { Phone, Mail, Clock, Users, Info } from 'lucide-react';

export default function Reservations() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-olive text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Reservations
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We'd love to host you for an exceptional Mediterranean dining experience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                Make a Reservation
              </h2>
              <p className="text-charcoal/80 mb-8">
                Reservations are accepted by phone or email only. Our team will confirm your booking within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-terracotta text-white rounded-full w-12 h-12 flex items-center justify-center">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-charcoal">
                        Call Us
                      </h3>
                      <p className="text-charcoal/60">Preferred method</p>
                    </div>
                  </div>
                  <a 
                    href="tel:5550147264" 
                    className="text-2xl font-bold text-olive hover:text-olive/80 transition-colors"
                  >
                    (555) 014-7264
                  </a>
                  <p className="text-sm text-charcoal/60 mt-2">
                    Available during business hours
                  </p>
                </div>

                {/* Email */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-sage text-white rounded-full w-12 h-12 flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-charcoal">
                        Email Us
                      </h3>
                      <p className="text-charcoal/60">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:hello@oliveandember.example" 
                    className="text-xl font-semibold text-olive hover:text-olive/80 transition-colors break-all"
                  >
                    hello@oliveandember.example
                  </a>
                </div>
              </div>
            </div>

            {/* Reservation Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                Reservation Information
              </h2>

              <div className="space-y-6">
                {/* Hours */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="h-5 w-5 text-terracotta" />
                    <h3 className="font-semibold text-charcoal">Dining Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span>11:30 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span>11:30 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>12:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Party Size */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="h-5 w-5 text-terracotta" />
                    <h3 className="font-semibold text-charcoal">Party Size</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    <li>• Tables for 2-8 guests available</li>
                    <li>• Larger parties require special arrangements</li>
                    <li>• Maximum table size: 10 guests</li>
                    <li>• High chairs available upon request</li>
                  </ul>
                </div>

                {/* Policies */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <Info className="h-5 w-5 text-terracotta" />
                    <h3 className="font-semibold text-charcoal">Policies</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-charcoal/80">
                    <li>• Reservations recommended, especially weekends</li>
                    <li>• 24-hour cancellation policy</li>
                    <li>• 15-minute grace period for late arrivals</li>
                    <li>• Accessibility seating available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="mt-12 bg-sage/10 rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4 text-center">
              Special Requests
            </h2>
            <p className="text-center text-charcoal/80 mb-6">
              Planning something special? Let us know about dietary restrictions, celebrations, or accessibility needs when you make your reservation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-charcoal mb-2">Dietary Accommodations</h3>
                <p className="text-sm text-charcoal/70">We're happy to accommodate vegetarian, vegan, and gluten-free diets</p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-2">Special Occasions</h3>
                <p className="text-sm text-charcoal/70">Celebrating an anniversary or birthday? We'll make it memorable</p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-2">Accessibility</h3>
                <p className="text-sm text-charcoal/70">Full accessibility accommodations available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}