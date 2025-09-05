"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import DemoBanner from '@/components/ui/demo-banner';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-cream shadow-sm sticky top-0 z-50">
      <DemoBanner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-olive">
              Olive & Ember
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-charcoal hover:text-olive transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-charcoal hover:text-olive transition-colors">
              Menu
            </Link>
            <Link href="/reservations" className="text-charcoal hover:text-olive transition-colors">
              Reservations
            </Link>
            <Link href="/private-events" className="text-charcoal hover:text-olive transition-colors">
              Private Events
            </Link>
            <Link href="/about" className="text-charcoal hover:text-olive transition-colors">
              About
            </Link>
            <Link href="/gallery" className="text-charcoal hover:text-olive transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-charcoal hover:text-olive transition-colors">
              Contact
            </Link>
          </nav>

          {/* Reserve Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:5550147264" 
              className="bg-olive text-cream px-6 py-2 rounded-md hover:bg-olive/90 transition-colors flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Reserve</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-charcoal hover:text-olive transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-sage/20">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-charcoal hover:text-olive transition-colors py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="text-charcoal hover:text-olive transition-colors py-2"
                onClick={toggleMenu}
              >
                Menu
              </Link>
              <Link 
                href="/reservations" 
                className="text-charcoal hover:text-olive transition-colors py-2"
                onClick={toggleMenu}
              >
                Reservations
              </Link>
              <Link 
                href="/private-events" 
                className="text-charcoal hover:text-olive transition-colors py-2"
                onClick={toggleMenu}
              >
                Private Events
              </Link>
              <Link 
                href="/about" 
                className="text-charcoal hover:text-olive transition-colors py-2"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-charcoal hover:text-olive transition-colors py-2"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                href="/gallery" 
                className="text-charcoal hover:text-olive transition-colors py-2"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <a 
                href="tel:5550147264" 
                className="bg-olive text-cream px-6 py-3 rounded-md hover:bg-olive/90 transition-colors flex items-center justify-center space-x-2 mt-4"
                onClick={toggleMenu}
              >
                <Phone className="h-4 w-4" />
                <span>Reserve by Phone</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}