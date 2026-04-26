import { Link } from 'react-router-dom';
import { useTranslation } from '@/i18n/useTranslation';
import { MessageSquare, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '@/assets/logo.jpg';

export function Footer() {
  const { t, lang } = useTranslation();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to={`/${lang}`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-lg">AutomateAI</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to={`/${lang}/services`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.links.services}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/solutions`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.links.solutions}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/process`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.links.process}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/contact`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to={`/${lang}/privacy`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.legal.privacy}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/terms`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.legal.terms}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/cookies`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.legal.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
