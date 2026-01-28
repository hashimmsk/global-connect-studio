import { useState } from 'react';
import { User, Phone, X, Mail, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  phone?: string;
}

const TeamCard = ({ name, role, description, phone }: TeamCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card 
        className="h-full border-border/50 bg-card card-hover cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <CardContent className="p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
            <User className="w-10 h-10 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-1">{name}</h3>
          <p className="text-sm font-medium text-accent mb-3">{role}</p>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
          <p className="text-xs text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to view details →
          </p>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col items-center py-6">
            {/* Animated Avatar */}
            <div className={`relative mb-6 ${isOpen ? 'animate-walk-in' : ''}`}>
              {/* Walking figure decoration */}
              <div className="absolute -left-4 -bottom-2 w-3 h-3 rounded-full bg-accent/30 animate-ping" />
              <div className="absolute -right-4 -bottom-2 w-2 h-2 rounded-full bg-primary/30 animate-ping animation-delay-200" />
              
              <div className={`w-28 h-28 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center ring-4 ring-accent/30 ${isOpen ? 'animate-bounce-in' : ''}`}>
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
                  <User className="w-14 h-14 text-accent" />
                </div>
              </div>
              
              {/* Decorative dots trail */}
              <div className="absolute -left-8 top-1/2 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                <div className="w-1 h-1 rounded-full bg-accent/30" />
                <div className="w-0.5 h-0.5 rounded-full bg-accent/20" />
              </div>
            </div>

            {/* Name and Role */}
            <div className={`text-center mb-6 ${isOpen ? 'animate-slide-in-left' : ''}`}>
              <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <Briefcase className="w-4 h-4" />
                {role}
              </div>
            </div>

            {/* Description */}
            <div className={`text-center mb-6 px-4 ${isOpen ? 'animate-slide-in-left animate-delay-100' : ''}`} style={{ opacity: 0, animationFillMode: 'forwards' }}>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            {/* Contact Info */}
            {phone && (
              <div className={`w-full px-4 ${isOpen ? 'animate-slide-in-left animate-delay-200' : ''}`} style={{ opacity: 0, animationFillMode: 'forwards' }}>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Contact Information
                  </h4>
                  <a 
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-accent/10 transition-colors group/phone"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover/phone:bg-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium text-foreground">{phone}</p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TeamCard;
