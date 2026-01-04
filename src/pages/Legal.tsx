import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Legal = () => {
  const { t } = useLanguage();

  return (
    <Layout
      title={t.nav.legal}
      description="Legal information, privacy policy, and cookie notice for White Global Services ApS."
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.legal.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Privacy Policy */}
            <Card className="border-border/50 bg-card animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t.legal.privacy.title}
                </h2>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  {t.legal.privacy.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cookie Notice */}
            <Card className="border-border/50 bg-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t.legal.cookies.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.legal.cookies.content}
                </p>
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card className="border-border/50 bg-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t.legal.company.title}
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-medium text-foreground">{t.legal.company.name}</p>
                  <p>{t.legal.company.cvr}</p>
                  <p>{t.legal.company.address}</p>
                  <p>
                    <a
                      href={`mailto:${t.legal.company.email}`}
                      className="text-primary hover:underline"
                    >
                      {t.legal.company.email}
                    </a>
                  </p>
                  <p>{t.legal.company.type}</p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-border/50 bg-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t.legal.disclaimer.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.legal.disclaimer.content}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
