'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    problem1: '',
    problem2: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! We\'ll contact you within 24 hours.');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-cream to-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Tired of Tax Time
                <span className="block text-primary">Headaches?</span>
                <span className="block text-2xl lg:text-3xl font-normal text-muted-foreground mt-2">
                  We Handle the Numbers, You Grow Your Business
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                Stop losing sleep over bookkeeping mistakes and wasted time. Our 30+ years of financial management expertise ensures your books are accurate, compliant, and growth-focused.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/50 rounded-xl border border-border">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">30+ Years Experience</div>
                <div className="text-xs text-muted-foreground">in Financial Management</div>
              </div>

              <div className="text-center p-4 bg-white/50 rounded-xl border border-border">
                <div className="w-12 h-12 mx-auto mb-3 bg-accent/30 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-sm font-medium text-foreground">Trusted by 500+</div>
                <div className="text-xs text-muted-foreground">Small Businesses</div>
              </div>

              <div className="text-center p-4 bg-white/50 rounded-xl border border-border">
                <div className="w-12 h-12 mx-auto mb-3 bg-secondary/50 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="text-sm font-medium text-foreground">Time-Saving,</div>
                <div className="text-xs text-muted-foreground">Stress-Free Solutions</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started - Free Consultation
            </Button>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Let's Connect</h2>
              <p className="text-muted-foreground">Tell us about your two biggest bookkeeping challenges</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                    className="rounded-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName">Your Name</Label>
                  <Input
                    id="contactName"
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                    className="rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="rounded-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem1">Biggest Bookkeeping Problem #1</Label>
                <Textarea
                  id="problem1"
                  value={formData.problem1}
                  onChange={(e) => setFormData(prev => ({ ...prev, problem1: e.target.value }))}
                  className="rounded-lg"
                  placeholder="e.g., Always behind on monthly reconciliation..."
                  rows={2}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem2">Biggest Bookkeeping Problem #2</Label>
                <Textarea
                  id="problem2"
                  value={formData.problem2}
                  onChange={(e) => setFormData(prev => ({ ...prev, problem2: e.target.value }))}
                  className="rounded-lg"
                  placeholder="e.g., Tax preparation is always stressful..."
                  rows={2}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 font-semibold"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Professional Image Placeholder */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-primary to-accent"></div>
    </section>
  );
}