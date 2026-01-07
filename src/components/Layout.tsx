import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  const siteTitle = 'White Global Services ApS';
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || 'Denmark-based company delivering transport services, import-export consultancy, cleaning services, and international trading solutions. Serving Europe and Asia.';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteglobalservices.dk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <link rel="canonical" href="https://whiteglobalservices.dk" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "White Global Services ApS",
            "url": "https://whiteglobalservices.dk",
            "logo": "https://whiteglobalservices.dk/logo.png",
            "description": "Denmark-based company delivering transport services, import-export consultancy, cleaning services, and international trading solutions.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jernholmen 38, st. tv",
              "addressLocality": "Hvidovre",
              "postalCode": "2650",
              "addressCountry": "DK"
            },
            "email": "info@whiteglobalservices.dk",
            "telephone": "+4571497700"
          })}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
