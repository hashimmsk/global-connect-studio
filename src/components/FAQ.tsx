import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title: string;
}

const FAQ = ({ items, title }: FAQProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-foreground mb-6">{title}</h3>
      <Accordion type="single" collapsible className="space-y-2">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border rounded-lg px-4 data-[state=open]:bg-secondary/30"
          >
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <span className="font-medium text-foreground">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
