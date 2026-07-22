import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { useTranslation } from '@/i18n/useTranslation';
import { SIGNUP_URL } from '@/i18n/translations';
import {
  Instagram,
  Repeat,
  CalendarCheck,
  Hash,
  TrendingUp,
  Sparkles,
  Wand2,
  MessageCircle,
  Check,
  Clock,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const coreIcons = {
  instagram: { icon: Instagram, color: 'from-pink-500 to-purple-600' },
  followups: { icon: Repeat, color: 'from-primary to-blue-600' },
  booking: { icon: CalendarCheck, color: 'from-accent to-orange-600' },
} as const;

const secondaryIcons = {
  keywords: Hash,
  scoring: TrendingUp,
  visionGlobal: Sparkles,
  promptImprovement: Wand2,
} as const;

export default function ServicesPage() {
  const { t, lang } = useTranslation();

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

          {/* Core features — big alternating blocks */}
          <div className="space-y-12 lg:space-y-20">
            {t.services.core.map((service, index) => {
              const { icon: Icon, color } = coreIcons[service.key as keyof typeof coreIcons];
              const isReversed = index % 2 === 1;

              return (
                <div key={service.key} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                  <div className="flex-1 w-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                        <Zap className="w-4 h-4" />
                        {service.results}
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                        <Clock className="w-4 h-4" />
                        {service.timeline}
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

          {/* Secondary features — grid */}
          <div className="mt-20 lg:mt-28">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10">{t.services.secondary.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.services.secondary.items.map((item) => {
                const Icon = secondaryIcons[item.key as keyof typeof secondaryIcons];
                return (
                  <div key={item.key} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming — future channels, muted styling, lower on the page */}
          <div className="mt-20 lg:mt-28">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">{t.services.upcoming.title}</h2>
              <p className="text-muted-foreground">{t.services.upcoming.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {t.services.upcoming.items.map((item) => (
                <div
                  key={item.key}
                  className="p-6 rounded-2xl border border-dashed border-border bg-secondary/30 opacity-80"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                {t.nav.ctaSignup}
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to={`/${lang}/contact`}>{t.nav.cta}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
