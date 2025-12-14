import { useParams } from 'react-router-dom';
import { translations, Language, languages } from './translations';

export function useTranslation() {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = (languages.includes(lang as Language) ? lang : 'es') as Language;
  const t = translations[currentLang];

  return {
    t,
    lang: currentLang,
    languages,
  };
}

export function getTranslation(lang: Language) {
  return translations[lang];
}
