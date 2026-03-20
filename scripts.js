document.addEventListener("DOMContentLoaded", () => {
  // Reveal animation
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    revealElements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      if (rect.top < triggerBottom) {
        element.classList.add("active");
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  // Header shadow on scroll
  const header = document.querySelector("[data-elevate]");

  const handleHeaderScroll = () => {
    if (!header) return;

    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  handleHeaderScroll();
  window.addEventListener("scroll", handleHeaderScroll);

  // Simple parallax
  const parallaxItems = document.querySelectorAll(".parallax");

  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    parallaxItems.forEach((item) => {
      const depth = Number(item.dataset.depth || 10);
      const moveX = x * depth;
      const moveY = y * depth;

      item.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  });

  // Translations
  const translations = {
    pt: {
      navServices: "Serviços",
      navProcess: "Processo",
      navProjects: "Projetos",
      navPlans: "Planos",
      navContact: "Contato",

      heroTitle: 'Transformamos operações em<br><span>sistemas escaláveis</span>',
      heroText: "Ajudamos startups e pequenas empresas a organizar processos, automatizar tarefas e construir sistemas que realmente funcionam — sem complexidade.",
      heroPrimary: "Agendar conversa",
      heroSecondary: "Ver como funciona",
      heroMini: "Trabalhamos com empresas que querem crescer com mais estrutura, clareza e eficiência.",
      heroAlt: "Cérebro digital LAIA Tech",

      tag1: "Automação",
      tag2: "UX",
      tag3: "Implementação",
      tag4: "Suporte",

      stackText: "Stack e ferramentas que amamos: Notion · Trello · Asana · GitHub · JavaScript · Make/Zapier",

      servicesTitle: "O que fazemos",
      servicesLead: "Soluções práticas para organizar, automatizar e escalar seu negócio.",
      service1Title: "Diagnóstico operacional",
      service1Text: "Identificamos gargalos, retrabalho e oportunidades de automação.",
      service2Title: "Implementação de sistemas",
      service2Text: "Estruturamos ferramentas e processos para ganhar eficiência e escala.",
      service3Title: "Otimização de conversão",
      service3Text: "Melhoramos fluxos e experiências para aumentar resultados.",
      service4Title: "Suporte contínuo",
      service4Text: "Evolução constante, ajustes e melhorias com acompanhamento próximo.",

      processTitle: "Como trabalhamos",
      step1Title: "Diagnóstico",
      step1Text: "Entendemos seu cenário, desafios e oportunidades.",
      step2Title: "Estratégia",
      step2Text: "Definimos um plano claro, focado em impacto real.",
      step3Title: "Execução",
      step3Text: "Implementação rápida com validações constantes.",
      step4Title: "Evolução",
      step4Text: "Melhorias contínuas e crescimento estruturado.",

      projectsTitle: "Projetos desenvolvidos pela LAIA",
      projectsLead: "Marcas e iniciativas que fazem parte do ecossistema LAIA.",
      project1Text: "Iniciativas educacionais, experiências de aprendizagem e produtos de conhecimento estruturados.",
      project2Text: "Projetos voltados para estratégia, mentalidade, estrutura e evolução de negócios.",
      project3Text: "Experiências criativas e digitais conectadas à música, marca e crescimento de audiência.",

      plansTitle: "Formas de trabalhar com a gente",
      plan1Title: "Suporte sob demanda",
      plan1Item1: "Consultoria flexível",
      plan1Item2: "Demandas pontuais",
      plan1Item3: "Entrega rápida",
      plan2Title: "Parceiro de crescimento",
      plan2Item1: "Melhoria contínua",
      plan2Item2: "Prioridade no atendimento",
      plan2Item3: "Visão estratégica",
      plan3Title: "Projeto personalizado",
      plan3Item1: "Escopo definido",
      plan3Item2: "Entrega completa",
      plan3Item3: "Implementação do início ao fim",
      planButton: "Agendar conversa",

      ctaTitle: "Vamos estruturar seu negócio",
      ctaText: "Conte o que você precisa — nós desenhamos a solução.",

      contactTitle: "Contato",
      inputName: "Seu nome",
      inputEmail: "Seu e-mail",
      inputCompany: "Empresa (opcional)",
      inputMessage: "Descreva brevemente seu desafio ou objetivo",
      contactButton: "Enviar",
      contactMini: "Ou fale direto: contacto@laiatech.com · +54 9 341 123-4567"
    },

    en: {
      navServices: "Services",
      navProcess: "Process",
      navProjects: "Projects",
      navPlans: "Plans",
      navContact: "Contact",

      heroTitle: 'We turn operations into<br><span>scalable systems</span>',
      heroText: "We help startups and small businesses organize processes, automate workflows, and build systems that truly work — without unnecessary complexity.",
      heroPrimary: "Book a call",
      heroSecondary: "See how it works",
      heroMini: "We work with businesses that want to grow with more structure, clarity, and efficiency.",
      heroAlt: "LAIA Tech digital brain",

      tag1: "Automation",
      tag2: "UX",
      tag3: "Implementation",
      tag4: "Support",

      stackText: "Tools and stack we love: Notion · Trello · Asana · GitHub · JavaScript · Make/Zapier",

      servicesTitle: "What we do",
      servicesLead: "Practical solutions to organize, automate, and scale your business.",
      service1Title: "Operational Audit",
      service1Text: "We identify bottlenecks, rework, and opportunities for automation.",
      service2Title: "Systems Implementation",
      service2Text: "We structure tools and workflows to increase efficiency and scalability.",
      service3Title: "Conversion Optimization",
      service3Text: "We improve flows and experiences to increase results.",
      service4Title: "Ongoing Support",
      service4Text: "Continuous evolution, adjustments, and improvements with close support.",

      processTitle: "How we work",
      step1Title: "Audit",
      step1Text: "We understand your current scenario, challenges, and opportunities.",
      step2Title: "Strategy",
      step2Text: "We define a clear plan focused on real impact.",
      step3Title: "Execution",
      step3Text: "Fast implementation with ongoing validation.",
      step4Title: "Growth",
      step4Text: "Continuous improvements and structured growth.",

      projectsTitle: "Projects built by LAIA",
      projectsLead: "Brands and initiatives that are part of the LAIA ecosystem.",
      project1Text: "Educational initiatives, learning experiences, and structured knowledge products.",
      project2Text: "Projects focused on strategy, mindset, structure, and business evolution.",
      project3Text: "Creative and digital experiences connected to music, branding, and audience growth.",

      plansTitle: "Ways to work with us",
      plan1Title: "On-Demand Support",
      plan1Item1: "Flexible consulting",
      plan1Item2: "Specific demands",
      plan1Item3: "Fast delivery",
      plan2Title: "Growth Partner",
      plan2Item1: "Continuous improvement",
      plan2Item2: "Priority support",
      plan2Item3: "Strategic guidance",
      plan3Title: "Custom Project",
      plan3Item1: "Defined scope",
      plan3Item2: "Full delivery",
      plan3Item3: "End-to-end implementation",
      planButton: "Book a call",

      ctaTitle: "Let’s structure your business",
      ctaText: "Tell us what you need — we’ll design the solution.",

      contactTitle: "Contact",
      inputName: "Your name",
      inputEmail: "Your email",
      inputCompany: "Company (optional)",
      inputMessage: "Briefly describe your challenge or goal",
      contactButton: "Send",
      contactMini: "Or contact us directly: contacto@laiatech.com · +54 9 341 123-4567"
    }
  };

  function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
    const altElements = document.querySelectorAll("[data-i18n-alt]");
    const pageTitle = document.querySelector("title");
    const metaDescription = document.querySelector('meta[name="description"]');

    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    placeholderElements.forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        element.setAttribute("placeholder", translations[lang][key]);
      }
    });

    altElements.forEach((element) => {
      const key = element.getAttribute("data-i18n-alt");
      if (translations[lang] && translations[lang][key]) {
        element.setAttribute("alt", translations[lang][key]);
      }
    });

    if (lang === "pt") {
      document.documentElement.lang = "pt-br";
      if (pageTitle) {
        pageTitle.textContent = "LAIA Tech — Transformamos operações em sistemas escaláveis";
      }
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Consultoria tecnológica moderna para startups e pequenas empresas: automação, sistemas, UX e suporte contínuo."
        );
      }
    } else {
      document.documentElement.lang = "en";
      if (pageTitle) {
        pageTitle.textContent = "LAIA Tech — We turn operations into scalable systems";
      }
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Modern technology consulting for startups and small businesses: automation, systems, UX and ongoing support."
        );
      }
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    localStorage.setItem("siteLanguage", lang);
  }

  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });

  const savedLanguage = localStorage.getItem("siteLanguage") || "pt";
  setLanguage(savedLanguage);
});
