import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Globe, Sparkles, Package, Check, ArrowRight, AlertCircle } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    {
      id: 'transport',
      icon: Truck,
      title: t.services.transport.title,
      intro: t.services.transport.intro,
      features: t.services.transport.features,
    },
    {
      id: 'import-export',
      icon: Globe,
      title: t.services.importExport.title,
      intro: t.services.importExport.intro,
      features: t.services.importExport.features,
    },
    {
      id: 'cleaning',
      icon: Sparkles,
      title: t.services.cleaning.title,
      intro: t.services.cleaning.intro,
      features: t.services.cleaning.features,
    },
    {
      id: 'trading',
      icon: Package,
      title: t.services.trading.title,
      intro: t.services.trading.intro,
      features: t.services.trading.categories,
      disclaimer: t.services.trading.disclaimer,
    },
  ];

  return (
    <Layout
      title={t.nav.services}
      description="Explore our comprehensive services: Transport, Import/Export Consultancy, Cleaning Services, and International Trading worldwide."
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.services.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 animate-fade-in ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="border-border/50 bg-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Content */}
                      <div className="p-8 lg:p-12">
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                          <service.icon className="w-7 h-7 text-accent" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.intro}
                        </p>
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-accent" />
                              </div>
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {service.disclaimer && (
                          <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg mb-6">
                            <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground">
                              {service.disclaimer}
                            </p>
                          </div>
                        )}
                        <Button asChild>
                          <Link to={`/contact?service=${service.id}`}>
                            {t.services.cta}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                      {/* Visual */}
                      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-secondary to-muted p-12">
                        <div className="w-32 h-32 rounded-3xl bg-background shadow-large flex items-center justify-center">
                          <service.icon className="w-16 h-16 text-primary" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Services;
