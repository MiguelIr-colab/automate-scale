import { useState, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { useTranslation } from '@/i18n/useTranslation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactPage() {
  const { t, lang } = useTranslation();
  const { toast } = useToast();
  const honeypotRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channel: '',
    businessType: '',
    goal: '',
    message: '',
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (honeypotRef.current?.value) {
      console.log('Bot detected');
      return;
    }

    if (!formData.privacy) {
      toast({ variant: 'destructive', title: 'Error', description: 'Por favor acepta la política de privacidad' });
      return;
    }

    setIsSubmitting(true);

    try {
      let recaptchaToken = '';
      
      // Get reCAPTCHA token if available
      if (window.grecaptcha) {
        try {
          await new Promise<void>((resolve) => window.grecaptcha!.ready(resolve));
                    recaptchaToken = await window.grecaptcha.execute(
            import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeT2swsAAAAACHoYTebfR_Yp1xaF5ZfadAPBruF',
            { action: 'contact' }
          );
        } catch (err) {
          console.warn('reCAPTCHA not available');
        }
      }

      const apiUrl = import.meta.env.VITE_API_URL || 'https://apibots.aiassistant-bots.ch';
      
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          canal: formData.channel,
          tipoNegocio: formData.businessType,
          objetivo: formData.goal,
          mensaje: formData.message,
          recaptchaToken,
          honeypot: honeypotRef.current?.value || '',
        }),
      });

      if (!response.ok) throw new Error('Error sending message');

      setIsSuccess(true);
      toast({ title: t.contact.form.success });
      setFormData({ name: '', email: '', channel: '', businessType: '', goal: '', message: '', privacy: false });
    } catch (error) {
      toast({ variant: 'destructive', title: 'Error', description: t.contact.form.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead title={t.meta.contact.title} description={t.meta.contact.description} lang={lang} />
      
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="gradient-text">{t.contact.title}</span>
              </h1>
              <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
            </div>

            {isSuccess ? (
              <div className="text-center p-8 rounded-2xl bg-primary/10 border border-primary/20">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t.contact.form.success}</h2>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-6 lg:p-8 rounded-2xl bg-card border border-border">
                {/* Honeypot - hidden field */}
                <input
                  ref={honeypotRef}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute opacity-0 pointer-events-none h-0 w-0"
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.form.name} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      required
                      maxLength={100}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.form.email} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.form.emailPlaceholder}
                      required
                      maxLength={255}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>{t.contact.form.channel} *</Label>
                    <Select value={formData.channel} onValueChange={(v) => setFormData({ ...formData, channel: v })} required>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="whatsapp">{t.contact.form.channelOptions.whatsapp}</SelectItem>
                        <SelectItem value="instagram">{t.contact.form.channelOptions.instagram}</SelectItem>
                        <SelectItem value="both">{t.contact.form.channelOptions.both}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessType">{t.contact.form.businessType}</Label>
                    <Input
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      placeholder={t.contact.form.businessTypePlaceholder}
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>{t.contact.form.goal} *</Label>
                  <Select value={formData.goal} onValueChange={(v) => setFormData({ ...formData, goal: v })} required>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leads">{t.contact.form.goalOptions.leads}</SelectItem>
                      <SelectItem value="appointments">{t.contact.form.goalOptions.appointments}</SelectItem>
                      <SelectItem value="support">{t.contact.form.goalOptions.support}</SelectItem>
                      <SelectItem value="other">{t.contact.form.goalOptions.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message} *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                    maxLength={1000}
                    rows={5}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked === true })}
                  />
                  <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    {t.contact.form.privacy}{' '}
                    <Link to={`/${lang}/privacy`} className="text-primary hover:underline">
                      {t.footer.legal.privacy}
                    </Link>
                  </Label>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t.contact.form.submit}
                    </>
                  )}
                </Button>
              </form>
            )}

          </div>
        </div>
      </section>
    </Layout>
  );
}
