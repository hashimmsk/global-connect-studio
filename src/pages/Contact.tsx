import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import FAQ from '@/components/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: '+45 71 49 77 00',
      href: 'tel:+4571497700',
      description: 'Call us during business hours',
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: 'info@whiteglobalservices.com',
      href: 'mailto:info@whiteglobalservices.com',
      description: 'Email us anytime',
    },
    {
      icon: MapPin,
      label: t.contact.info.address,
      value: 'Jernholmen 38, st. tv, 2650 Hvidovre, Denmark',
      description: 'Our office location',
    },
    {
      icon: Clock,
      label: t.contact.info.hours,
      value: t.contact.info.hoursValue,
      description: 'When we are available',
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
          <div className="max-w-4xl mx-auto">
            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index} 
                  className="border-border/50 bg-card animate-fade-in card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-lg font-semibold text-foreground hover:text-accent transition-colors block mb-1"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold text-foreground mb-1">{item.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <FAQ title={t.contact.faq.title} items={t.contact.faq.items} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
