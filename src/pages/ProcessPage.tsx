import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { useTranslation } from '@/i18n/useTranslation';
import { Clock, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ProcessPage() {
  const { t, lang } = useTranslation();

  return (
    <Layout>
      <SEOHead title={t.meta.process.title} description={t.meta.process.description} lang={lang} />
      
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{t.process.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground">{t.process.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-accent hidden lg:block" />

              <div className="space-y-8">
                {t.process.steps.map((step, index) => (
                  <div key={index} className="relative flex gap-6 lg:gap-8">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg z-10">
                      <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                    </div>

                    <div className="flex-1 p-6 rounded-2xl bg-card border border-border">
                      <h2 className="text-xl lg:text-2xl font-bold mb-2">{step.title}</h2>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          {step.duration}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-sm text-primary">
                          <FileText className="w-4 h-4" />
                          {step.deliverable}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <Button variant="hero" size="lg" asChild>
                <Link to={`/${lang}/contact`}>
                  {t.nav.cta}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
