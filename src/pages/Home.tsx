import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, MapPin } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const services = t.home.whatWeDo.services.map((service, index) => ({
    ...service,
    href: `/services#${['transport', 'import-export', 'cleaning', 'trading'][index]}`,
  }));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary to-navy-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              {t.home.hero.title}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-foreground/90 mb-6">
              {t.home.hero.subtitle}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-6 leading-relaxed max-w-2xl">
              {t.home.hero.description}
            </p>
            <p className="text-sm font-semibold tracking-wide uppercase text-accent mb-8">
              {t.home.hero.trustLine}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">{t.home.hero.ctaPrimary}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link to="/services">
                  {t.home.hero.ctaSecondary}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            title={t.home.whatWeDo.title}
            subtitle={t.home.whatWeDo.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  icon={service.icon as 'truck' | 'globe' | 'sparkles' | 'package'}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.home.about.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.home.about.description}
              </p>
              <Button asChild>
                <Link to="/about">
                  {t.home.about.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-lg font-medium text-foreground">Denmark HQ</p>
                    <p className="text-sm text-muted-foreground">Worldwide Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.home.whyUs.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-background rounded-xl shadow-soft animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.home.whyUs.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t.home.about.description.substring(0, 150)}...
              </p>
              <Button asChild variant="outline">
                <Link to="/why-us">
                  {t.home.about.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Regions Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title={t.home.regions.title}
            subtitle={t.home.regions.subtitle}
          />
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-4 bg-secondary rounded-xl">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-medium text-foreground">{t.home.regions.denmark}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-secondary rounded-xl">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="font-medium text-foreground">{t.home.regions.worldwide}</span>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
