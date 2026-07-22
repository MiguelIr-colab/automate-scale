import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { SIGNUP_URL } from '@/i18n/translations';

export function CTASection() {
  const { t, lang } = useTranslation();

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.ctaSection.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t.ctaSection.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              {t.ctaSection.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
