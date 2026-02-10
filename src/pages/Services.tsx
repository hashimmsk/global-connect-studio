import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Globe, Sparkles, Package, Check, ArrowRight, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full group">
      <img
        src={images[currentIndex]}
        alt={`${alt} ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${idx === currentIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                  }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

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
      images: [] as string[],
    },
    {
      id: 'import-export',
      icon: Globe,
      title: t.services.importExport.title,
      intro: t.services.importExport.intro,
      features: t.services.importExport.features,
      images: [] as string[],
    },
    {
      id: 'cleaning',
      icon: Sparkles,
      title: t.services.cleaning.title,
      intro: t.services.cleaning.intro,
      features: t.services.cleaning.features,
      images: ['/cleaning-1.jpeg'],
    },
    {
      id: 'trading',
      icon: Package,
      title: t.services.trading.title,
      intro: t.services.trading.intro,
      features: t.services.trading.categories,
      disclaimer: t.services.trading.disclaimer,
      images: ['/trade-1.jpeg', '/trade-2.jpeg', '/trade-3.jpeg'],
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
                className="scroll-mt-24 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="border-border/50 bg-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Content - always on left */}
                      <div className="p-8 lg:p-10 flex flex-col justify-center">
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
                      {/* Visual - always on right, 3:2 aspect ratio matching images */}
                      <div className="hidden lg:block overflow-hidden">
                        {service.images && service.images.length > 0 ? (
                          <div className="w-full aspect-[3/2]">
                            <ImageCarousel images={service.images} alt={service.title} />
                          </div>
                        ) : (
                          <div className="w-full aspect-[3/2] flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                            <div className="w-32 h-32 rounded-3xl bg-background shadow-lg flex items-center justify-center">
                              <service.icon className="w-16 h-16 text-primary" />
                            </div>
                          </div>
                        )}
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
