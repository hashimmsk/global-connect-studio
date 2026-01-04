import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout
      title={t.nav.about}
      description="Learn about White Global Services ApS - Denmark-based company delivering reliable local and international business services."
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.about.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in">
              {t.about.paragraph2}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="border-border/50 bg-card card-hover animate-fade-in">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t.about.mission.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.mission.text}
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="border-border/50 bg-card card-hover animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t.about.vision.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.vision.text}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '3+', label: 'Core Services' },
              { number: '2', label: 'Continents' },
              { number: '24/7', label: 'Support Ready' },
              { number: '100%', label: 'Client Focus' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-secondary/50 rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
