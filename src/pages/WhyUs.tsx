import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Shield, Clock, Users, Zap, Handshake } from 'lucide-react';

const WhyUs = () => {
  const { t } = useLanguage();

  const valueIcons = [Shield, Clock, Users, Zap, Handshake];

  return (
    <Layout
      title={t.nav.whyUs}
      description="Discover why businesses choose White Global Services ApS for transport, trade, and service solutions. Experienced team, global network, reliable operations."
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.whyUs.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.whyUs.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {t.whyUs.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-secondary/50 rounded-xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-lg font-medium text-foreground pt-1">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t.whyUs.values.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.whyUs.values.items.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <Card
                  key={index}
                  className="border-border/50 bg-card card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default WhyUs;
