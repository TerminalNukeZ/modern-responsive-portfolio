import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import StackSection from '@/components/StackSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import UpdatesSection from '@/components/UpdatesSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <StackSection />
      <ServicesSection />
      <ProjectsSection />
      <UpdatesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
