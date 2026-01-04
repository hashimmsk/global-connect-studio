import { User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
}

const TeamCard = ({ name, role, description }: TeamCardProps) => {
  return (
    <Card className="h-full border-border/50 bg-card card-hover">
      <CardContent className="p-6 text-center">
        <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
          <User className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-sm font-medium text-accent mb-3">{role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
