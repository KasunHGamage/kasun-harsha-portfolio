import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import WorkSection from '@/components/work-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { Section } from '@/components/section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="pt-16">
          <HeroSection />
        </div>
        <AboutSection />
        <Section id="work" className="bg-secondary">
          <WorkSection />
        </Section>
        <Section id="skills">
          <SkillsSection />
        </Section>
        <Section id="contact" className="bg-secondary">
          <ContactSection />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
