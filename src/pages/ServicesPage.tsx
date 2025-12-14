import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { useTranslation } from '@/i18n/useTranslation';
import { MessageSquare, Instagram, Zap, Link2, Check, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const { t, lang } = useTranslation();

  const services = [
    { key: 'whatsapp', icon: MessageSquare, color: 'from-green-500 to-green-600' },
    { key: 'instagram', icon: Instagram, color: 'from-pink-500 to-purple-600' },
    { key: 'automations', icon: Zap, color: 'from-primary to-blue-600' },
    { key: 'integrations', icon: Link2, color: 'from-accent to-orange-600' },
  ] as const;

  return (
    <Layout>
      <SEOHead title={t.meta.services.title} description={t.meta.services.description} lang={lang} />
      
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{t.services.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground">{t.services.subtitle}</p>
          </div>

          <div className="space-y-12 lg:space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const data = t.services[service.key];
              const isReversed = index % 2 === 1;

              return (
                <div key={service.key} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                  <div className="flex-1 w-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{data.title}</h2>
                    <p className="text-muted-foreground mb-6">{data.description}</p>
                    <ul className="space-y-3 mb-6">
                      {data.features.map((feature, i) => (
                        <li key={i} className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                        <Zap className="w-4 h-4" />
                        {data.results}
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                        <Clock className="w-4 h-4" />
                        {data.timeline}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 w-full aspect-video rounded-2xl bg-gradient-to-br from-card to-secondary/50 border border-border flex items-center justify-center">
                    <Icon className="w-24 h-24 text-muted-foreground/30" />
                  </div>
                </div>
              );
            })}
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
      </section>
    </Layout>
  );
}
