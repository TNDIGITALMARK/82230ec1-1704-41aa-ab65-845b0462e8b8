'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Calculator, FileText, Users } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-lg">
            <Calculator className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-foreground">LedgerFlow</span>
            <span className="text-xs text-muted-foreground">BOOKKEEPING</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/services"
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            About Us
          </Link>
          <Link
            href="#testimonials"
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
        >
          <Link href="/contact">Get Free Consultation</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col space-y-1 p-2">
          <span className="block w-5 h-0.5 bg-foreground"></span>
          <span className="block w-5 h-0.5 bg-foreground"></span>
          <span className="block w-5 h-0.5 bg-foreground"></span>
        </button>
      </div>
    </header>
  );
}