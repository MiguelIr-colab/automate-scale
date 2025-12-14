import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';

export function StickyMobileCTA() {
  const { t, lang } = useTranslation();

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border p-4 z-40">
      <Link
        to={`/${lang}/contact`}
        className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl bg-accent text-accent-foreground font-semibold shadow-lg shadow-accent/25"
      >
        <MessageCircle className="w-5 h-5" />
        {t.hero.cta}
      </Link>
    </div>
  );
}
