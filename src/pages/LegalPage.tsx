import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { useTranslation } from '@/i18n/useTranslation';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'cookies';
}

export default function LegalPage({ type }: LegalPageProps) {
  const { t, lang } = useTranslation();
  const content = t.legal[type];

  return (
    <Layout>
      <SEOHead title={content.title} description={content.title} lang={lang} />
      
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">{content.title}</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground">{content.content}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
