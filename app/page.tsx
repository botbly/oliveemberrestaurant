"use client";

import { useEffect } from "react";
import Link from 'next/link';
import { Phone, MapPin, Clock, Star } from 'lucide-react';
import BotblyNudge from "@/components/BotblyNudge";
import { openWidgetOnce } from "@/lib/botbly";

function BotblyAutoOpen({
  delayMs = 800,
  disableOnMobile = true,
}: {
  delayMs?: number;
  disableOnMobile?: boolean;
}) {
  useEffect(() => {
    const isMobile =
      typeof navigator !== "undefined" &&
      /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (disableOnMobile && isMobile) return;
    const id = window.setTimeout(() => {
      openWidgetOnce(true);
    }, delayMs);
    return () => clearTimeout(id);
  }, [delayMs, disableOnMobile]);
  return null;
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <BotblyAutoOpen delayMs={800} disableOnMobile={true} />
      <BotblyNudge initialDelay={1400} />
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(47, 47, 47, 0.4), rgba(47, 47, 47, 0.4)), url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Olive & Ember
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Modern Mediterranean Cuisine
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-80">
              Fire-kissed Mediterranean plates with seasonal Virginia produce
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5550147264"
                className="bg-terracotta text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-terracotta/90 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Reserve Now
              </a>
              <Link
                href="/menu"
                className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Signature Dishes
            </h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              Discover our most beloved creations, crafted with Mediterranean passion and seasonal ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dish 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                  alt="Wood-fired lamb with rosemary and garlic"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                Wood-Fired Lamb
              </h3>
              <p className="text-charcoal/70">
                Herb-crusted lamb shoulder with rosemary, garlic, and olive oil, slow-roasted over our wood fire
              </p>
            </div>

            {/* Dish 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
                  alt="Grilled octopus with lemon and herbs"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                Grilled Octopus
              </h3>
              <p className="text-charcoal/70">
                Tender octopus grilled to perfection with lemon, capers, and fresh herbs over ember-kissed vegetables
              </p>
            </div>

            {/* Dish 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg"
                  alt="Mediterranean vegetarian platter"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                Garden Mezze
              </h3>
              <p className="text-charcoal/70">
                Seasonal vegetable selection with hummus, baba ganoush, and warm pita bread, featuring local farm produce
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hours */}
            <div className="text-center">
              <div className="bg-olive text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                Hours Today
              </h3>
              <p className="text-charcoal/80 text-lg">11:30 AM - 10:00 PM</p>
              <Link href="/contact" className="text-olive hover:text-olive/80 transition-colors">
                View all hours
              </Link>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="bg-terracotta text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                Location
              </h3>
              <p className="text-charcoal/80">
                2145 Willow Lane<br />
                Arlington, VA 22207
              </p>
              <Link href="/contact" className="text-olive hover:text-olive/80 transition-colors">
                Get directions
              </Link>
            </div>

            {/* Contact */}
            <div className="text-center">
              <div className="bg-sage text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                Reservations
              </h3>
              <a
                href="tel:5550147264"
                className="text-charcoal/80 text-lg hover:text-olive transition-colors"
              >
                (555) 014-7264
              </a>
              <br />
              <Link href="/reservations" className="text-olive hover:text-olive/80 transition-colors">
                Reservation info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-charcoal mb-4">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-terracotta fill-current" />
                ))}
              </div>
              <p className="text-charcoal/80 mb-4 italic">
                "Absolutely exceptional. The wood-fired lamb was perfectly cooked and the flavors were incredible. Best Mediterranean restaurant in Arlington."
              </p>
              <p className="font-semibold text-charcoal">— Sarah M.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-terracotta fill-current" />
                ))}
              </div>
              <p className="text-charcoal/80 mb-4 italic">
                "The atmosphere is perfect for a special dinner. Outstanding service and the chef's attention to seasonal ingredients really shows."
              </p>
              <p className="font-semibold text-charcoal">— Michael R.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-terracotta fill-current" />
                ))}
              </div>
              <p className="text-charcoal/80 mb-4 italic">
                "We hosted our anniversary dinner here and it was magical. The private dining area was perfect and the food was restaurant-quality excellent."
              </p>
              <p className="font-semibold text-charcoal">— Jennifer K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-olive text-cream">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Olive & Ember?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us for an unforgettable Mediterranean dining experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5550147264"
              className="bg-terracotta text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-terracotta/90 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Make Reservation
            </a>
            <Link
              href="/private-events"
              className="border-2 border-cream text-cream px-8 py-4 rounded-md text-lg font-semibold hover:bg-cream hover:text-olive transition-colors"
            >
              Private Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}