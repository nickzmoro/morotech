import React from "react";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://morotech.digital/#organization",
    name: "Moro Tech",
    alternateName: "MoroTech",
    url: "https://morotech.digital",
    logo: "https://morotech.digital/logo.svg",
    image: "https://morotech.digital/share-image.webp",
    description:
      "A Moro Tech é uma desenvolvedora de software premium especializada em websites de alta performance, landing pages de alta conversão, e-commerce e sistemas sob medida com IA.",
    sameAs: ["https://instagram.com/morotech.br"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-14-99145-9254",
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://morotech.digital/#website",
    url: "https://morotech.digital",
    name: "Moro Tech",
    description:
      "Tecnologia pensada para o seu negócio. Sites, lojas e sistemas sob medida com SEO e inteligência artificial.",
    publisher: {
      "@id": "https://morotech.digital/#organization",
    },
    inLanguage: "pt-BR",
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@id": "https://morotech.digital/#organization",
    },
    serviceType:
      "Desenvolvimento de Software, Criação de Sites e Automação com Inteligência Artificial",
    areaServed: "BR",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Moro Tech",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desenvolvimento de Websites",
            description:
              "Websites rápidos, modernos e totalmente personalizados para fortalecer sua presença digital.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Pages",
            description:
              "Páginas de alta conversão desenvolvidas para campanhas, lançamentos e captação de clientes. Design pensado para conversão.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Loja Online",
            description:
              "Lojas virtuais completas com integração de pagamentos, estoque e automações. Design de luxo que chama atenção para vender mais.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Manutenção",
            description:
              "Estratégias para melhorar o posicionamento da empresa nos mecanismos de buscas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sistemas Sob Medida",
            description:
              "Sistemas personalizados para automatizar processos internos e aumentar a produtividade.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IA & Automação Eficiente",
            description:
              "Implementação de Inteligência Artificial e automações para otimizar tarefas repetitivas.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto custa desenvolver um site ou sistema?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O investimento varia de acordo com a complexidade, as funcionalidades e os objetivos do projeto. Após entender suas necessidades, apresentamos um orçamento sob medida.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva para o projeto ficar pronto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Landing pages duram em média de 7 a 15 dias para entrega, enquanto sites institucionais e sistemas personalizados complexos podem levar de 30 a 60 dias. Apresentamos um cronograma detalhado antes do início.",
        },
      },
      {
        "@type": "Question",
        name: "Meu site irá aparecer nos buscadores do Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Todos os nossos projetos são desenvolvidos seguindo as melhores práticas de SEO (Otimização para Motores de Busca) estrutural. Isso garante que o Google e outros buscadores consigam rastrear, indexar e posicionar suas páginas de forma otimizada.",
        },
      },
      {
        "@type": "Question",
        name: "Meu site será responsivo para celulares?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Com certeza. Desenvolvemos com foco total na experiência do usuário em múltiplos dispositivos. Seu site funcionará de forma impecável e adaptada em smartphones, tablets, notebooks e computadores.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês desenvolvem sistemas personalizados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Desenvolvemos sistemas sob medida de acordo com as necessidades específicas do seu modelo de negócio, como painéis administrativos, áreas de membros, automatizações de processos e integrações diversas.",
        },
      },
      {
        "@type": "Question",
        name: "O projeto terá suporte após a entrega?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Após o lançamento, oferecemos um período de suporte gratuito para correção de eventuais bugs ou ajustes técnicos. Também disponibilizamos planos mensais flexíveis de manutenção preventiva, segurança e evolução contínua.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
