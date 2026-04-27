import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { cookieBannerStrings } from '@/i18n/legalContent';

const STORAGE_KEY = 'cookie-consent';

export function CookieBanner() {
  const { lang } = useTranslation();
  const t = cookieBannerStrings[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // small delay so it doesn't flash on initial load
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: 'accepted' | 'rejected') => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ value, date: new Date().toISOString() })
    );
    setVisible(false);
    // Dispatch event so analytics scripts can react if needed
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: value }));
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-[100] animate-slide-up"
    >
      <div className="relative bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-5 md:p-6">
        <button
          onClick={() => handleConsent('rejected')}
          aria-label="Close"
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors md:hidden"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">{t.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => handleConsent('accepted')}
            className="flex-1 inline-flex items-center justify-center h-10 px-4 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 transition-all"
          >
            {t.accept}
          </button>
          <button
            onClick={() => handleConsent('rejected')}
            className="flex-1 inline-flex items-center justify-center h-10 px-4 text-sm font-semibold rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            {t.reject}
          </button>
        </div>

        <Link
          to={`/${lang}/cookies`}
          className="block mt-3 text-xs text-center text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
        >
          {t.learnMore}
        </Link>
      </div>
    </div>
  );
}
