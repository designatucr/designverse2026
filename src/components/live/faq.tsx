import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/data/faq";
import Title from "@/components/ui/title";

const FAQ = () => {
  return (
    <div className="flex w-full flex-col items-center pt-16">
      <div className="px-4">
        <Title>FREQUENTLY ASKED QUESTIONS</Title>
      </div>
      <div className="w-9/12 pb-12 pt-10">
        <Accordion type="single" collapsible className="w-full">
          {QUESTIONS.map(({ question, answer }, index) => (
            <AccordionItem
              value={question}
              key={index}
              className="border-landing-brown-300"
            >
              <AccordionTrigger className="py-4 text-left font-work_sans text-sm font-medium text-landing-brown-300 md:py-6 md:text-xl lg:text-nowrap">
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-3 font-work_sans text-xs text-landing-brown-300 md:pb-5 md:text-base">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
