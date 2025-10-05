'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calculator, CheckCircle } from 'lucide-react';

const baseServices = [
  { id: 'basic', name: 'Basic Bookkeeping', price: 299, description: 'Monthly transaction entry and reconciliation' },
  { id: 'standard', name: 'Standard Package', price: 499, description: 'Bookkeeping + monthly financial statements' },
  { id: 'premium', name: 'Premium Package', price: 799, description: 'Full service bookkeeping + quarterly tax prep' }
];

const addOnServices = [
  { id: 'payroll', name: 'Payroll Processing', price: 45, unit: 'per employee/month' },
  { id: 'tax-monthly', name: 'Monthly Tax Filing', price: 150, unit: 'per month' },
  { id: 'tax-quarterly', name: 'Quarterly Tax Prep', price: 300, unit: 'per quarter' },
  { id: 'planning', name: 'Business Planning', price: 500, unit: 'per month' },
  { id: 'audit', name: 'Audit Support', price: 150, unit: 'per hour' }
];

const businessSizes = [
  { id: 'startup', name: 'Startup (0-10 transactions/month)', multiplier: 0.7 },
  { id: 'small', name: 'Small Business (11-100 transactions/month)', multiplier: 1.0 },
  { id: 'medium', name: 'Medium Business (101-500 transactions/month)', multiplier: 1.5 },
  { id: 'large', name: 'Large Business (500+ transactions/month)', multiplier: 2.0 }
];

export default function ServiceCalculator() {
  const [selectedBase, setSelectedBase] = useState<string>('standard');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [businessSize, setBusinessSize] = useState<string>('small');
  const [employeeCount, setEmployeeCount] = useState<number>(1);

  const baseService = baseServices.find(s => s.id === selectedBase);
  const sizeMultiplier = businessSizes.find(s => s.id === businessSize)?.multiplier || 1;

  const calculateTotal = () => {
    let total = (baseService?.price || 0) * sizeMultiplier;

    selectedAddOns.forEach(addOnId => {
      const addOn = addOnServices.find(s => s.id === addOnId);
      if (addOn) {
        if (addOn.id === 'payroll') {
          total += addOn.price * employeeCount;
        } else {
          total += addOn.price;
        }
      }
    });

    return Math.round(total);
  };

  const handleAddOnChange = (addOnId: string, checked: boolean) => {
    if (checked) {
      setSelectedAddOns(prev => [...prev, addOnId]);
    } else {
      setSelectedAddOns(prev => prev.filter(id => id !== addOnId));
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <Calculator className="w-5 h-5 mr-2" />
            <span className="font-medium">Service Calculator</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Estimate Your Monthly Investment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate for your bookkeeping services. All packages include our 30+ years of expertise and personalized support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Business Size */}
            <Card>
              <CardHeader>
                <CardTitle>Business Size</CardTitle>
                <CardDescription>Select the option that best describes your business transaction volume</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={businessSize} onValueChange={setBusinessSize}>
                  {businessSizes.map(size => (
                    <div key={size.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={size.id} id={size.id} />
                      <Label htmlFor={size.id} className="flex-1 cursor-pointer">
                        {size.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Base Service */}
            <Card>
              <CardHeader>
                <CardTitle>Base Bookkeeping Package</CardTitle>
                <CardDescription>Choose your primary service level</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedBase} onValueChange={setSelectedBase}>
                  {baseServices.map(service => (
                    <div key={service.id} className="flex items-start space-x-2 p-4 border border-border rounded-lg">
                      <RadioGroupItem value={service.id} id={service.id} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={service.id} className="cursor-pointer">
                          <div className="font-medium text-foreground">{service.name}</div>
                          <div className="text-sm text-muted-foreground">{service.description}</div>
                          <div className="text-sm font-bold text-primary mt-1">${service.price}/month</div>
                        </Label>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Add-On Services */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Services</CardTitle>
                <CardDescription>Select any additional services you need</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {addOnServices.map(addOn => (
                    <div key={addOn.id} className="flex items-start space-x-2 p-4 border border-border rounded-lg">
                      <Checkbox
                        id={addOn.id}
                        checked={selectedAddOns.includes(addOn.id)}
                        onCheckedChange={(checked) => handleAddOnChange(addOn.id, !!checked)}
                      />
                      <div className="flex-1">
                        <Label htmlFor={addOn.id} className="cursor-pointer">
                          <div className="font-medium text-foreground">{addOn.name}</div>
                          <div className="text-sm font-bold text-primary">${addOn.price} {addOn.unit}</div>
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Employee Count for Payroll */}
                {selectedAddOns.includes('payroll') && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <Label htmlFor="employees" className="text-sm font-medium">Number of Employees</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setEmployeeCount(Math.max(1, employeeCount - 1))}
                      >
                        -
                      </Button>
                      <span className="font-bold text-lg w-8 text-center">{employeeCount}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setEmployeeCount(employeeCount + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Estimate Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-center">Your Estimate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Base Service */}
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">{baseService?.name}</span>
                  <span className="font-medium">${Math.round((baseService?.price || 0) * sizeMultiplier)}</span>
                </div>

                {/* Add-ons */}
                {selectedAddOns.map(addOnId => {
                  const addOn = addOnServices.find(s => s.id === addOnId);
                  if (!addOn) return null;

                  const price = addOn.id === 'payroll' ? addOn.price * employeeCount : addOn.price;
                  return (
                    <div key={addOnId} className="flex justify-between items-center pb-2 border-b border-border">
                      <span className="text-muted-foreground">{addOn.name}</span>
                      <span className="font-medium">${price}</span>
                    </div>
                  );
                })}

                {/* Total */}
                <div className="flex justify-between items-center pt-4 border-t-2 border-primary">
                  <span className="text-lg font-bold text-foreground">Monthly Total:</span>
                  <span className="text-2xl font-bold text-primary">${calculateTotal()}</span>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>30+ years expertise included</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Personalized support</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span>Free consultation included</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                  size="lg"
                  asChild
                >
                  <a href="/contact">Get Started Today</a>
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  *Prices are estimates. Final pricing may vary based on specific business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}