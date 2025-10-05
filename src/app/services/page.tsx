import Header from '@/components/header';
import Footer from '@/components/footer';
import ServiceDetailSection from '@/components/service-detail-section';
import ServiceCalculator from '@/components/service-calculator';

export const dynamic = 'force-dynamic'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServiceDetailSection />
      <ServiceCalculator />
      <Footer />
    </div>
  );
}