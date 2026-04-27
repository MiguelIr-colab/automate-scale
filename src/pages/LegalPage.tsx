import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { useTranslation } from '@/i18n/useTranslation';
import { legalContent } from '@/i18n/legalContent';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'cookies';
}

function renderBody(lines: string[]) {
  // Group consecutive "- " lines into <ul>
  const elements: JSX.Element[] = [];
  let listBuffer: string[] = [];

  const flushList = (key: string) => {
    if (listBuffer.length === 0) return;
    elements.push(
      <ul key={key} className="list-disc pl-6 space-y-2 my-3 text-muted-foreground">
        {listBuffer.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  lines.forEach((line, idx) => {
    if (line.startsWith('- ')) {
      listBuffer.push(line.slice(2));
    } else {
      flushList(`ul-${idx}`);
      elements.push(
        <p key={`p-${idx}`} className="text-muted-foreground leading-relaxed my-3">
          {line}
        </p>
      );
    }
  });
  flushList('ul-end');
  return elements;
}

export default function LegalPage({ type }: LegalPageProps) {
  const { lang } = useTranslation();
  const doc = legalContent[lang][type];

  return (
    <Layout>
      <SEOHead title={doc.title} description={doc.title} lang={lang} />

      <section className="pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">{doc.title}</h1>
            <p className="text-sm text-muted-foreground mb-10">{doc.lastUpdated}</p>

            {doc.intro && (
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">{doc.intro}</p>
            )}

            <div className="space-y-8">
              {doc.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                      {section.heading}
                    </h2>
                  )}
                  {renderBody(section.body)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
