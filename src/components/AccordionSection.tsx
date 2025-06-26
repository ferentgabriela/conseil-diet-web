
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';

interface AccordionSectionProps {
  title: string;
  items: Array<{
    id: string;
    title: string;
    content: string | React.ReactNode;
    icon?: React.ReactNode;
  }>;
  className?: string;
}

const AccordionSection = ({ title, items, className = "" }: AccordionSectionProps) => {
  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {items.map((item) => (
          <AccordionItem 
            key={item.id} 
            value={item.id}
            className="border border-green-200 rounded-lg bg-white shadow-sm"
          >
            <AccordionTrigger className="px-4 py-3 hover:bg-green-50 rounded-t-lg text-left">
              <div className="flex items-center gap-3">
                {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
                <span className="font-medium text-green-800">{item.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-gray-700 leading-relaxed">
              {typeof item.content === 'string' ? (
                <p>{item.content}</p>
              ) : (
                item.content
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionSection;
