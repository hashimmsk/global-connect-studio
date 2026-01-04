import { Link } from 'react-router-dom';
import { Truck, Globe, Sparkles, Package, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: 'truck' | 'globe' | 'sparkles' | 'package';
  title: string;
  description: string;
  href: string;
}

const iconMap: Record<string, LucideIcon> = {
  truck: Truck,
  globe: Globe,
  sparkles: Sparkles,
  package: Package,
};

const ServiceCard = ({ icon, title, description, href }: ServiceCardProps) => {
  const Icon = iconMap[icon];

  return (
    <Link to={href}>
      <Card className="h-full card-hover border-border/50 bg-card group">
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
