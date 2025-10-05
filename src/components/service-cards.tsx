'use client';

import { Button } from './ui/button';
import {
  Calculator,
  FileText,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Calculator,
    title: "Simple Bookkeeping & Expense Tracking",
    description: "Daily transaction recording and expense categorization",
    features: ["Daily transaction entry", "Expense categorization", "Bank reconciliation", "Monthly reports"],
    color: "bg-primary/10 text-primary"
  },
  {
    icon: FileText,
    title: "Complex Tax Form Preparation",
    description: "Monthly and yearly tax compliance made simple",
    features: ["Form 1099s", "Quarterly tax prep", "Annual tax returns", "Tax strategy planning"],
    color: "bg-accent/30 text-accent-foreground"
  },
  {
    icon: Users,
    title: "Payroll & HR Solutions",
    description: "Complete payroll management and compliance",
    features: ["Employee payroll", "Tax withholdings", "Benefits tracking", "Compliance reporting"],
    color: "bg-secondary/50 text-secondary-foreground"
  },
  {
    icon: TrendingUp,
    title: "Business Planning & Analysis",
    description: "Strategic financial planning for growth",
    features: ["Cash flow analysis", "Budget planning", "Financial forecasting", "Growth strategies"],
    color: "bg-primary/10 text-primary"
  }
];

export default function ServiceCards() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From simple daily bookkeeping to complex business planning, we provide comprehensive financial services tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Service Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-border">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">Cost-Effective Solutions</h4>
            <p className="text-muted-foreground">Save money compared to hiring full-time bookkeeping staff</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-border">
            <div className="w-16 h-16 bg-accent/30 text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">Time-Saving Expertise</h4>
            <p className="text-muted-foreground">Focus on growing your business while we handle the numbers</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-border">
            <div className="w-16 h-16 bg-secondary/50 text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">Excel Expertise</h4>
            <p className="text-muted-foreground">Advanced Excel skills for detailed financial analysis and reporting</p>
          </div>
        </div>
      </div>
    </section>
  );
}