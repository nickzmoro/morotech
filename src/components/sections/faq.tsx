"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { BlurFade } from "../ui/blur-fade";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const faqItems: FaqItem[] = [
    {
      question: "Quanto custa desenvolver um site ou sistema?",
      answer:
        "O investimento varia de acordo com a complexidade, as funcionalidades e os objetivos do projeto. Após entender suas necessidades, elaboramos uma proposta personalizada, transparente e sem compromisso, garantindo uma solução sob medida para o seu negócio.",
    },
    {
      question: "Quanto tempo leva para o projeto ficar pronto?",
      answer:
        "O prazo de entrega varia de acordo com o escopo e complexidade do projeto. Landing pages institucionais costumam ser entregues em média entre 7 a 15 dias, enquanto sites institucionais e sistemas personalizados complexos podem levar de 30 a 60 dias. Apresentamos um cronograma detalhado antes do início.",
    },
    {
      question: "Meu site irá aparecer nos buscadores do Google?",
      answer:
        "Sim. Todos os nossos projetos são desenvolvidos seguindo as melhores práticas de SEO (Otimização para Motores de Busca) estrutural. Isso garante que o Google e outros buscadores consigam rastrear, indexar e posicionar suas páginas de forma otimizada e eficiente.",
    },
    {
      question: "Meu site será responsivo para celulares?",
      answer:
        "Com certeza. Desenvolvemos com foco total na experiência do usuário em múltiplos dispositivos. Seu site funcionará de forma impecável e adaptada em smartphones, tablets, notebooks e computadores de qualquer tamanho de tela.",
    },
    {
      question: "Vocês desenvolvem sistemas personalizados?",
      answer:
        "Sim. Desenvolvemos sistemas sob medida de acordo com as necessidades específicas do seu modelo de negócio, como painéis administrativos, áreas de membros, automatizações de processos internos e integrações diversas com outras plataformas.",
    },
    {
      question: "Posso acompanhar o andamento do projeto?",
      answer:
        "Sim. Durante todo o desenvolvimento, você acompanha o progresso do projeto, recebe atualizações periódicas e pode validar cada etapa antes da entrega final.",
    },
    {
      question: "É possível integrar com outros sistemas?",
      answer:
        "Sim. Realizamos integrações completas com APIs de terceiros, gateways de pagamento, sistemas de CRM, plataformas de e-mail marketing, ERPs e qualquer outra ferramenta externa que a sua empresa já utilize no dia a dia.",
    },
    {
      question: "O projeto terá suporte após a entrega?",
      answer:
        "Sim! Após o lançamento, oferecemos um período de suporte gratuito para correção de eventuais bugs ou ajustes técnicos. Após esse período, haverá uma taxa caso haja necessidade de manutenção ou atualizações.Também disponibilizamos planos mensais flexíveis de manutenção preventiva, segurança e evolução contínua.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-[#020202] py-16 text-white md:py-24"
    >
      {/* Figma background glow gradient centered behind accordion */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[500px] w-full -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,rgba(2,2,2,0)_0%,#4267B9_50%,rgba(2,2,2,0)_100%)] blur-[130px] md:bg-[linear-gradient(180deg,rgba(2,2,2,0)_0%,#4267B9_50%,rgba(2,2,2,0)_100%)]" />

      <div className="relative z-5 mx-auto min-h-[80vh] w-full max-w-[100rem]">
        {/* Title inspired by testimonials.tsx */}
        <div className="mb-16 flex justify-center px-4 md:mb-20 md:px-12 lg:px-20">
          <BlurFade inView direction="up" delay={0.1}>
            <h2 className="font-heading bg-linear-to-t from-transparent from-5% to-white to-80% bg-clip-text text-center text-6xl leading-none font-light tracking-[-1.5%] text-transparent uppercase md:text-8xl lg:text-9xl">
              FAQ
            </h2>
          </BlurFade>
        </div>

        {/* Accordion List Container */}
        <div className="mx-auto max-w-[100rem] px-3 md:px-6">
          <BlurFade inView direction="up" delay={0.2}>
            <Accordion
              defaultValue={["faq-0"]}
              className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6"
            >
              {/* Left Column (Items 1-4) */}
              <div className="flex flex-col gap-4">
                {faqItems.slice(0, 4).map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="group rounded-[24px] border border-white/10 bg-white/10 backdrop-blur-md transition-all duration-300 hover:border-white/15 data-open:border-white/15 data-open:bg-[#4267B9]/10 md:rounded-[32px]"
                  >
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </div>

              {/* Right Column (Items 5-8) */}
              <div className="flex flex-col gap-4">
                {faqItems.slice(4).map((item, index) => {
                  const globalIndex = index + 4;
                  return (
                    <AccordionItem
                      key={globalIndex}
                      value={`faq-${globalIndex}`}
                      className="group rounded-[24px] border border-white/10 bg-white/10 backdrop-blur-md transition-all duration-300 hover:border-white/15 data-open:border-white/15 data-open:bg-[#4267B9]/10 md:rounded-[32px]"
                    >
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  );
                })}
              </div>
            </Accordion>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
