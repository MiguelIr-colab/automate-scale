import { Calendar, Headphones, Magnet, RefreshCw } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  support: Headphones,
  magnet: Magnet,
  repeat: RefreshCw,
};

export function UseCasesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.useCases.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.useCases.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {t.useCases.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Calendar;
            return (
              <div
                key={index}
                className="group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
