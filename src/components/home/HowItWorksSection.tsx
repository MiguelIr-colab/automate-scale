import { useTranslation } from '@/i18n/useTranslation';

export function HowItWorksSection() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {t.howItWorks.steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 lg:gap-8">
                  {/* Number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg shadow-primary/25">
                    <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
