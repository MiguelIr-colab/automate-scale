import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { Language, languages } from '@/i18n/translations';

interface SEOHeadProps {
  title: string;
  description: string;
  lang: Language;
  type?: 'website' | 'article';
  image?: string;
}

export function SEOHead({ title, description, lang, type = 'website', image }: SEOHeadProps) {
  const location = useLocation();
  const baseUrl = 'https://yourdomain.com'; // Replace with actual domain
  const currentUrl = `${baseUrl}${location.pathname}`;
  const imageUrl = image || `${baseUrl}/og-image.jpg`;

  const getAlternateUrl = (l: Language) => {
    const pathParts = location.pathname.split('/');
    pathParts[1] = l;
    return `${baseUrl}${pathParts.join('/')}`;
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Hreflang Tags */}
      {languages.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={getAlternateUrl(l)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={getAlternateUrl('es')} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : lang === 'en' ? 'en_US' : lang === 'fr' ? 'fr_FR' : 'de_DE'} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "AutomateAI",
          "description": description,
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "sameAs": [
            "https://instagram.com/yourusername",
            "https://linkedin.com/in/yourusername",
            "https://twitter.com/yourusername"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@yourdomain.com",
            "availableLanguage": ["Spanish", "English", "French", "German"]
          },
          "areaServed": "Worldwide",
          "serviceType": ["Chatbot Development", "Marketing Automation", "Lead Generation"]
        })}
      </script>
    </Helmet>
  );
}
