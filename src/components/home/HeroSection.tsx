import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, Users } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { SIGNUP_URL } from '@/i18n/translations';

export function HeroSection() {
  const { t, lang } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-slow" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-slide-up text-balance">
            <span className="gradient-text">{t.hero.title.split(' ').slice(0, 3).join(' ')}</span>{' '}
            {t.hero.title.split(' ').slice(3).join(' ')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up text-balance" style={{ animationDelay: '0.1s' }}>
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-16 px-10 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-[hsl(220,91%,60%)] text-primary-foreground hover:opacity-90 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              {t.nav.ctaSignup}
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
            <Link
              to={`/${lang}/contact`}
              className="inline-flex items-center justify-center gap-2 h-16 px-10 text-lg font-semibold rounded-xl border-2 border-primary/50 bg-primary/5 text-foreground hover:bg-primary/10 hover:border-primary backdrop-blur-sm transition-all duration-300"
            >
              {t.hero.cta}
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold gradient-text">+80%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t.hero.stats.leads}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold gradient-text">20h</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t.hero.stats.time}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold gradient-text">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t.hero.stats.available}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
