import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { useTranslation } from '@/i18n/useTranslation';
import { ArrowRight, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function SolutionsPage() {
  const { t, lang } = useTranslation();

  return (
    <Layout>
      <SEOHead title={t.meta.solutions.title} description={t.meta.solutions.description} lang={lang} />
      
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{t.solutions.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground">{t.solutions.subtitle}</p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {t.solutions.items.map((item, index) => (
              <div key={index} className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                <h2 className="text-xl lg:text-2xl font-bold mb-6">{item.title}</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                    <div className="flex items-center gap-2 text-destructive mb-2">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-semibold text-sm">Problema</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.problem}</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Lightbulb className="w-5 h-5" />
                      <span className="font-semibold text-sm">Solución</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.solution}</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-semibold text-sm">Resultado</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.result}</p>
                  </div>
                </div>

                <Button variant="outline" asChild>
                  <Link to={`/${lang}/contact`}>
                    {item.cta}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
