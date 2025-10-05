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
  BarChart3,
  Clipboard,
  PieChart,
  Building,
  CreditCard
} from 'lucide-react';
import Link from 'next/link';

const serviceDetails = [
  {
    icon: Calculator,
    title: "Simple to Complex Bookkeeping",
    subtitle: "Complete daily financial management",
    description: "From basic transaction recording to comprehensive financial management, we handle all aspects of your business bookkeeping with precision and care.",
    features: [
      "Daily transaction entry and categorization",
      "Bank and credit card reconciliation",
      "Accounts payable and receivable management",
      "Chart of accounts setup and maintenance",
      "Monthly financial statements preparation",
      "Expense tracking and reporting",
      "Inventory management (if applicable)",
      "Multi-location business consolidation"
    ],
    pricing: "Starting at $299/month",
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    icon: FileText,
    title: "Tax Forms (Monthly/Yearly)",
    subtitle: "Comprehensive tax compliance solutions",
    description: "Stay compliant with all tax obligations. We prepare and file all necessary tax forms, from monthly sales tax to annual corporate returns.",
    features: [
      "Monthly sales tax preparation and filing",
      "Quarterly payroll tax returns",
      "Annual business tax returns (1120, 1120S, 1065, Sch C)",
      "Form 1099 preparation and distribution",
      "State and local tax compliance",
      "Tax planning and strategy consultation",
      "Audit support and representation",
      "Amendment preparation if needed"
    ],
    pricing: "Starting at $150/month",
    color: "bg-accent/30 text-accent-foreground border-accent/40"
  },
  {
    icon: Users,
    title: "Payroll Management",
    subtitle: "Complete employee payment solutions",
    description: "Comprehensive payroll services that ensure your employees are paid accurately and on time, while maintaining full compliance with all regulations.",
    features: [
      "Weekly, bi-weekly, or monthly payroll processing",
      "Federal and state tax withholding calculations",
      "Direct deposit setup and management",
      "Employee benefits administration",
      "Workers compensation reporting",
      "Unemployment insurance management",
      "Year-end W-2 and W-3 preparation",
      "New hire reporting to state agencies"
    ],
    pricing: "Starting at $45/employee/month",
    color: "bg-secondary/50 text-secondary-foreground border-secondary/60"
  },
  {
    icon: TrendingUp,
    title: "Business Planning & Strategic Analysis",
    subtitle: "Financial insights for business growth",
    description: "Strategic financial planning and analysis to help your business make informed decisions and achieve sustainable growth.",
    features: [
      "Cash flow forecasting and analysis",
      "Budget creation and monitoring",
      "Financial ratio analysis and benchmarking",
      "Break-even analysis and pricing strategies",
      "Profit and loss trend analysis",
      "Business expansion financial modeling",
      "Investment analysis and ROI calculations",
      "Strategic planning consultation"
    ],
    pricing: "Starting at $500/month",
    color: "bg-primary/10 text-primary border-primary/20"
  }
];

const additionalServices = [
  {
    icon: Clipboard,
    title: "Financial Statement Preparation",
    description: "Monthly, quarterly, and annual financial statements"
  },
  {
    icon: PieChart,
    title: "Budget Analysis & Forecasting",
    description: "Detailed budget planning and variance analysis"
  },
  {
    icon: Building,
    title: "Multi-Entity Consolidation",
    description: "Consolidating financials across multiple business entities"
  },
  {
    icon: CreditCard,
    title: "Credit Management",
    description: "Credit monitoring and improvement strategies"
  },
  {
    icon: BarChart3,
    title: "Excel Expertise & Custom Reports",
    description: "Advanced Excel modeling and custom financial reporting"
  },
  {
    icon: DollarSign,
    title: "Cost Reduction Analysis",
    description: "Identifying opportunities to reduce operational costs"
  }
];

export default function ServiceDetailSection() {
  return (
    <div className="py-16 bg-gradient-to-br from-cream to-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Bookkeeping Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            With over 30 years of financial management experience, we provide comprehensive bookkeeping solutions that scale with your business. From startup to established enterprise, we've got you covered.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold"
            asChild
          >
            <Link href="/contact">Get Your Free Consultation</Link>
          </Button>
        </div>

        {/* Detailed Services */}
        <div className="space-y-16">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
              >
                {/* Content */}
                <div className={isEven ? 'lg:pr-8' : 'lg:pl-8'}>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full border ${service.color} mb-4`}>
                    <Icon className="w-5 h-5 mr-2" />
                    <span className="font-medium">{service.title}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.subtitle}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-border mb-6">
                    <div>
                      <div className="font-bold text-lg text-foreground">{service.pricing}</div>
                      <div className="text-sm text-muted-foreground">Custom packages available</div>
                    </div>
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                      asChild
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>

                {/* Visual/Image Placeholder */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-border">
                    <Icon className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground">
              Specialized services to meet your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-primary/5 rounded-2xl p-12 border border-primary/10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Streamline Your Bookkeeping?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our 30+ years of expertise take the burden of financial management off your shoulders. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6"
              asChild
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link href="tel:555-123-4567">Call (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}