import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/i18n/useTranslation';
import { languageNames, Language, languages, SIGNUP_URL } from '@/i18n/translations';
import logo from '@/assets/logo.jpg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, lang } = useTranslation();
  const location = useLocation();

  const navItems = [
    { label: t.nav.home, path: `/${lang}` },
    { label: t.nav.services, path: `/${lang}/services` },
    { label: t.nav.solutions, path: `/${lang}/solutions` },
    { label: t.nav.process, path: `/${lang}/process` },
    { label: t.nav.contact, path: `/${lang}/contact` },
  ];

  const getLocalizedPath = (newLang: Language) => {
    const pathParts = location.pathname.split('/');
    pathParts[1] = newLang;
    return pathParts.join('/') || `/${newLang}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to={`/${lang}`} className="flex items-center gap-2">
            <img src={logo} alt="SmartSetter IA Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-bold text-lg hidden sm:block">SmartSetter IA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  {languageNames[lang]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((l) => (
                  <DropdownMenuItem key={l} asChild>
                    <Link to={getLocalizedPath(l)} className="cursor-pointer">
                      {languageNames[l]}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to={`/${lang}/contact`}
              className="inline-flex items-center justify-center h-11 px-5 font-semibold rounded-lg border border-border text-foreground hover:bg-secondary transition-all duration-300"
            >
              {t.nav.cta}
            </Link>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 px-6 font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.nav.ctaSignup}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-slide-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
              {languages.map((l) => (
                <Link
                  key={l}
                  to={getLocalizedPath(l)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    lang === l ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
            <Link
              to={`/${lang}/contact`}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-11 px-6 font-semibold rounded-lg border border-border text-foreground transition-all duration-300"
            >
              {t.nav.cta}
            </Link>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center h-11 px-6 font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 transition-all duration-300"
            >
              {t.nav.ctaSignup}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
