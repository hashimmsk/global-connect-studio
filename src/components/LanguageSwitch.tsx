import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-7 px-3 text-xs font-medium"
      >
        EN
      </Button>
      <Button
        variant={language === 'da' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('da')}
        className="h-7 px-3 text-xs font-medium"
      >
        DA
      </Button>
    </div>
  );
};

export default LanguageSwitch;
