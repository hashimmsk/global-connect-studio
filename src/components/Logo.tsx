interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

const Logo = ({ className = '', variant = 'default' }: LogoProps) => {
  // Use transparent PNG for dark backgrounds (footer), JPEG for light backgrounds (header)
  const logoSrc = variant === 'light' ? '/logo-transparent.png' : '/logo.jpeg';

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="White Global Services" 
        className="h-10 md:h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
