'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Calendar as CalendarIcon,
  User,
  Building,
  MessageSquare,
  Calculator
} from 'lucide-react';
import { format } from 'date-fns';

const businessTypes = [
  'Sole Proprietorship',
  'Partnership',
  'LLC',
  'S-Corporation',
  'C-Corporation',
  'Non-Profit',
  'Other'
];

const serviceInterests = [
  'Basic Bookkeeping',
  'Tax Preparation',
  'Payroll Services',
  'Business Planning',
  'Financial Analysis',
  'Audit Support',
  'Consultation Only'
];

const timeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM'
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    serviceInterest: '',
    problem1: '',
    problem2: '',
    additionalInfo: '',
    preferredContact: 'email',
    urgency: 'normal'
  });

  const [consultationData, setConsultationData] = useState({
    date: undefined as Date | undefined,
    timeSlot: '',
    timezone: 'EST'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation scheduled:', consultationData);
    alert('Consultation request submitted! We\'ll confirm your appointment within 2 hours.');
  };

  if (submitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-cream to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Thank You for Reaching Out!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your information and will contact you within 24 hours to discuss your bookkeeping needs and schedule a consultation.
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              onClick={() => setSubmitted(false)}
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-cream to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Your Free Consultation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to solve your bookkeeping challenges? Let's discuss how our 30+ years of experience can help streamline your financial management.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">info@ledgerflowbookkeeping.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">(555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-muted-foreground">
                      123 Business District<br />
                      Your City, State 12345
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-muted-foreground">
                      Mon-Fri: 9:00 AM - 5:00 PM<br />
                      Sat: By Appointment
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Consultation Scheduler */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
                  Schedule Consultation
                </CardTitle>
                <CardDescription>
                  Book a free 30-minute consultation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {consultationData.date ? format(consultationData.date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={consultationData.date}
                          onSelect={(date) => setConsultationData(prev => ({ ...prev, date }))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Time Slot</Label>
                    <Select
                      value={consultationData.timeSlot}
                      onValueChange={(value) => setConsultationData(prev => ({ ...prev, timeSlot: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(slot => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Main Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                  Tell Us About Your Business
                </CardTitle>
                <CardDescription>
                  The more we know about your needs, the better we can help you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  {/* Business Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input
                        id="businessName"
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                        placeholder="Your Business Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Your Name *</Label>
                      <Input
                        id="contactName"
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                        placeholder="Your Full Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your@email.com"
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
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Business Type</Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map(type => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Primary Interest</Label>
                      <Select
                        value={formData.serviceInterest}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, serviceInterest: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="What service interests you?" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceInterests.map(service => (
                            <SelectItem key={service} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Problems */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="problem1">Biggest Bookkeeping Challenge #1 *</Label>
                      <Textarea
                        id="problem1"
                        value={formData.problem1}
                        onChange={(e) => setFormData(prev => ({ ...prev, problem1: e.target.value }))}
                        placeholder="Describe your most pressing bookkeeping problem..."
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="problem2">Biggest Bookkeeping Challenge #2 *</Label>
                      <Textarea
                        id="problem2"
                        value={formData.problem2}
                        onChange={(e) => setFormData(prev => ({ ...prev, problem2: e.target.value }))}
                        placeholder="What's your second biggest bookkeeping headache?"
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                        placeholder="Any other details that would help us understand your needs..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Contact Preferences */}
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <Label className="text-sm font-medium mb-3 block">How would you prefer to be contacted?</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="contact-method"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={(e) => setFormData(prev => ({ ...prev, preferredContact: e.target.value }))}
                          className="text-primary"
                        />
                        <span>Email</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="contact-method"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={(e) => setFormData(prev => ({ ...prev, preferredContact: e.target.value }))}
                          className="text-primary"
                        />
                        <span>Phone</span>
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold rounded-lg"
                  >
                    Send My Information
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. We'll respond within 24 hours and never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}