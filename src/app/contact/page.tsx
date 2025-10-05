import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactSection from '@/components/contact-section';
import ProblemAssessment from '@/components/problem-assessment';

export const dynamic = 'force-dynamic'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactSection />
      <ProblemAssessment />
      <Footer />
    </div>
  );
}