import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || undefined;

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.info.address,
      value: 'Jernholmen 38, st. tv, 2650 Hvidovre, Denmark',
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: 'info@whiteglobalservices.dk',
      href: 'mailto:info@whiteglobalservices.dk',
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: '+45 XXXXXXXX',
      href: 'tel:+45XXXXXXXX',
    },
    {
      icon: Clock,
      label: t.contact.info.hours,
      value: t.contact.info.hoursValue,
    },
  ];

  return (
    <Layout
      title={t.nav.contact}
      description="Contact White Global Services ApS for transport, import/export consultancy, cleaning services, and international trading inquiries."
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.contact.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {t.contact.info.title}
              </h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <FAQ title={t.contact.faq.title} items={t.contact.faq.items} />
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Card className="border-border/50 bg-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {t.contact.form.title}
                  </h2>
                  <ContactForm preselectedService={preselectedService} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
