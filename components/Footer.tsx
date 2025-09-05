import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-terracotta mb-4">
                Olive & Ember
              </h3>
              <p className="text-cream/80 mb-6">
                Fire-kissed Mediterranean plates with seasonal Virginia produce
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-terracotta mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream">2145 Willow Lane</p>
                    <p className="text-cream">Arlington, VA 22207</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-terracotta" />
                  <a href="tel:5550147264" className="text-cream hover:text-terracotta transition-colors">
                    (555) 014-7264
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-terracotta" />
                  <a href="mailto:hello@oliveandember.example" className="text-cream hover:text-terracotta transition-colors">
                    hello@oliveandember.example
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-terracotta mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Mon - Thu</span>
                  <span>11:30 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Fri - Sat</span>
                  <span>11:30 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 - 21:00</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-terracotta mb-4">
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-2">
                <Link href="/menu" className="text-cream hover:text-terracotta transition-colors">
                  Menu
                </Link>
                <Link href="/reservations" className="text-cream hover:text-terracotta transition-colors">
                  Reservations
                </Link>
                <Link href="/private-events" className="text-cream hover:text-terracotta transition-colors">
                  Private Events
                </Link>
                <Link href="/gallery" className="text-cream hover:text-terracotta transition-colors">
                  Gallery
                </Link>
                <Link href="/about" className="text-cream hover:text-terracotta transition-colors">
                  About
                </Link>
                <Link href="/press" className="text-cream hover:text-terracotta transition-colors">
                  Press
                </Link>
                <Link href="/careers" className="text-cream hover:text-terracotta transition-colors">
                  Careers
                </Link>
                <Link href="/faq" className="text-cream hover:text-terracotta transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="text-cream hover:text-terracotta transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-cream/20 mt-8 pt-8 text-center text-sm">
            <p className="text-cream/60">
              © 2025 Olive & Ember. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* BotBly Promotion Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-olive text-cream border-t border-olive/40 shadow-[0_-4px_12px_rgba(0,0,0,0.18)] pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm sm:text-base py-3">
            <span className="mr-2">Power your website with an <strong className="font-semibold">BotBly</strong> AI Virtual Assistant</span>
            <span className="mx-2">—</span>
            <a
              href="https://botbly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 underline-offset-2 hover:text-terracotta transition-colors inline-flex items-center"
            >
              Try it free at botbly.com
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}