import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { HeroSection } from '@/components/home/HeroSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { UseCasesSection } from '@/components/home/UseCasesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ForWhoSection } from '@/components/home/ForWhoSection';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';
import { useTranslation } from '@/i18n/useTranslation';

export default function HomePage() {
  const { t, lang } = useTranslation();

  return (
    <Layout>
      <SEOHead
        title={t.meta.home.title}
        description={t.meta.home.description}
        lang={lang}
      />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <UseCasesSection />
      <TestimonialsSection />
      <ForWhoSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}
