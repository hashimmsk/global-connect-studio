import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import TeamCard from '@/components/TeamCard';

const Team = () => {
  const { t } = useLanguage();

  return (
    <Layout
      title={t.nav.team}
      description="Meet the experienced management team at White Global Services ApS driving excellence in transport, trade, and service operations."
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.team.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.team.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.team.members.map((member, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TeamCard
                  name={member.name}
                  role={member.role}
                  description={member.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
