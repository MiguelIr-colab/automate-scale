import { Clock, Filter, Calendar, TrendingUp, RefreshCw, BarChart3 } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';

const icons = [Clock, Filter, Calendar, TrendingUp, RefreshCw, BarChart3];

export function BenefitsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.benefits.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.benefits.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
