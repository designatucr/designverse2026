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
    <div className="flex w-full flex-col items-center pt-24">
      <Title>FREQUENTLY ASKED QUESTIONS</Title>
      <div className="w-9/12 pt-10">
        <Accordion type="single" collapsible className="w-full">
          {QUESTIONS.map(({ question, answer }, index) => (
            <AccordionItem
              value={question}
              key={index}
              className="border-landing-brown-300"
            >
              <AccordionTrigger className="py-7 text-left font-work_sans text-sm font-medium text-landing-brown-300 md:text-nowrap md:text-xl">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
