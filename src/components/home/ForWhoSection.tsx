import { Check, X } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';

export function ForWhoSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t.forWho.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Is For */}
          <div className="p-6 lg:p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-primary">
              {t.forWho.isFor.title}
            </h3>
            <ul className="space-y-4">
              {t.forWho.isFor.items.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Is Not For */}
          <div className="p-6 lg:p-8 rounded-2xl bg-muted/50 border border-border">
            <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-muted-foreground">
              {t.forWho.isNotFor.title}
            </h3>
            <ul className="space-y-4">
              {t.forWho.isNotFor.items.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
