import { useState, ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-500">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-2 px-4 hover:bg-blue-600"
      >
        {title}
      </button>
      {isOpen && (
        <div className="pl-4 pb-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;