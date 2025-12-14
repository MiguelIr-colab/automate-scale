import { Quote } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';

export function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {t.testimonials.items.map((item, index) => (
            <div
              key={index}
              className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{item.quote}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-semibold">{item.author}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
