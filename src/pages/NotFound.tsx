import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout title="404 - Page Not Found">
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-7xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === 'en' ? 'Page Not Found' : 'Side Ikke Fundet'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {language === 'en'
              ? "The page you're looking for doesn't exist or has been moved."
              : 'Siden du leder efter findes ikke eller er blevet flyttet.'}
          </p>
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 w-4 h-4" />
              {language === 'en' ? 'Back to Home' : 'Tilbage til Forsiden'}
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
