import { Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = '', showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Globe className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="absolute -right-0.5 -bottom-0.5 w-3 h-3 bg-accent rounded-full" />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-tight text-foreground leading-tight">
            WHITE GLOBAL
          </span>
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Services
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
