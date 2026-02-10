interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.jpeg" 
        alt="White Global Services" 
        className="h-10 md:h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
