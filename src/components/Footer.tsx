import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from './Logo';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/team', label: t.nav.team },
    { href: '/why-us', label: t.nav.whyUs },
  ];

  const serviceLinks = [
    { href: '/services#transport', label: t.services.transport.title },
    { href: '/services#import-export', label: t.services.importExport.title },
    { href: '/services#cleaning', label: t.services.cleaning.title },
    { href: '/services#trading', label: t.services.trading.title },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t.home.hero.subtitle}
            </p>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{t.footer.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+4571497700" className="hover:text-primary-foreground transition-colors">
                  +45 71 49 77 00
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@whiteglobalservices.com" className="hover:text-primary-foreground transition-colors">
                  info@whiteglobalservices.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              {t.footer.copyright.replace('{year}', currentYear.toString())}
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/legal"
                onClick={scrollToTop}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {t.nav.legal}
              </Link>
              <span className="text-xs text-primary-foreground/40">
                {t.footer.disclaimer}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
