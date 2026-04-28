import React, { useEffect, useId, useRef, useState } from "react";

const languageStorageKey = "vl-site-language";
const originalTextNodes = new WeakMap();

const spanishTranslations = {
  "404": "404",
  "A local tech support business built around trust.":
    "Un negocio local de soporte tecnico construido alrededor de la confianza.",
  "A practical look at the support work, technical systems, and problem solving behind the brand.":
    "Una mirada practica al soporte, los sistemas tecnicos y la resolucion de problemas detras de la marca.",
  "A quick path through what I am building.": "Una ruta rapida por lo que estoy construyendo.",
  "A simple way to get the issue handled.": "Una forma sencilla de resolver el problema.",
  "About": "Acerca de",
  "About Me": "Sobre mi",
  "About Victor": "Sobre Victor",
  "Anyone who wants clear, practical tech help":
    "Cualquier persona que quiera ayuda tecnologica clara y practica",
  "At a Glance": "De un vistazo",
  "Back Home": "Volver al inicio",
  "Base": "Base",
  "Based In": "Ubicacion",
  "Build / Test / Refine": "Construir / Probar / Mejorar",
  "Building": "Construyendo",
  "Building Now": "Construyendo ahora",
  "Built around trust, clarity, patience, and practical problem solving.":
    "Construido alrededor de confianza, claridad, paciencia y resolucion practica.",
  "Call TechBuddy": "Llamar a TechBuddy",
  "Choose a path": "Elige una ruta",
  "Choose a track. See the signal.": "Elige una ruta. Mira la senal.",
  "Clear local tech support for people who want dependable help.":
    "Soporte tecnico local y claro para personas que quieren ayuda confiable.",
  "Close": "Cerrar",
  "Close navigation menu": "Cerrar menú de navegación",
  "Close translate menu": "Cerrar menú de traducción",
  "College": "Universidad",
  "Computer and phone support": "Soporte para computadora y telefono",
  "Connect": "Conectar",
  "Connect directly.": "Conecta directamente.",
  "Contact": "Contacto",
  "Contact TechBuddy": "Contactar a TechBuddy",
  "Copyright": "Copyright",
  "Current Focus": "Enfoque actual",
  "Current direction": "Direccion actual",
  "Current focus": "Enfoque actual",
  "Cybersecurity": "Ciberseguridad",
  "Cybersecurity / TechBuddy / Systems": "Ciberseguridad / TechBuddy / Sistemas",
  "Cybersecurity and digital systems": "Ciberseguridad y sistemas digitales",
  "Cybersecurity, business thinking, execution, and steady improvement over time.":
    "Ciberseguridad, pensamiento empresarial, ejecucion y mejora constante con el tiempo.",
  "Cybersecurity, digital safety, and practical tech support.":
    "Ciberseguridad, seguridad digital y soporte tecnico practico.",
  "Cybersecurity, digital safety, and support":
    "Ciberseguridad, seguridad digital y soporte",
  "Cybersecurity, digital safety, and useful systems that make everyday technology easier.":
    "Ciberseguridad, seguridad digital y sistemas utiles que hacen mas facil la tecnologia diaria.",
  "Cybersecurity, technology, entrepreneurship, and practical systems that help people move forward.":
    "Ciberseguridad, tecnologia, emprendimiento y sistemas practicos que ayudan a la gente a avanzar.",
  "Dallas Baptist University": "Dallas Baptist University",
  "Digital presence built with clarity and intention.":
    "Presencia digital construida con claridad e intencion.",
  "Digital safety": "Seguridad digital",
  "Digital safety, scam awareness, account basics, and practical cybersecurity thinking.":
    "Seguridad digital, prevencion de estafas, bases de cuentas y pensamiento practico de ciberseguridad.",
  "Direct": "Directo",
  "Direct Contact": "Contacto directo",
  "Direction": "Direccion",
  "Education": "Educacion",
  "Email": "Correo",
  "English": "Inglés",
  "Execution": "Ejecución",
  "Explain what changed and what to do next so the support feels useful after the visit.":
    "Explicar que cambio y que hacer despues para que el soporte siga siendo util despues de la visita.",
  "Families": "Familias",
  "Fall 2026": "Otoño 2026",
  "Fix what matters": "Arreglar lo importante",
  "Focus": "Enfoque",
  "Focused On": "Enfoque",
  "Footer contact links": "Enlaces de contacto del pie de página",
  "Footer navigation": "Navegación del pie de página",
  "Fort Worth": "Fort Worth",
  "Fort Worth builder focused on useful systems, safer habits, and clear help for people who want technology to feel less confusing.":
    "Constructor de Fort Worth enfocado en sistemas utiles, habitos mas seguros y ayuda clara para que la tecnologia sea menos confusa.",
  "Fort Worth roots, cybersecurity goals, and a hands-on builder mindset.":
    "Raices en Fort Worth, metas de ciberseguridad y mentalidad practica de constructor.",
  "Fort Worth, Texas": "Fort Worth, Texas",
  "Four lanes behind the work: safety, support, systems, and long-term execution.":
    "Cuatro lineas detras del trabajo: seguridad, soporte, sistemas y ejecucion a largo plazo.",
  "From devices and networks to software, setup, and support, I enjoy making technology more useful, dependable, and easier to work with.":
    "Desde dispositivos y redes hasta software, configuracion y soporte, disfruto hacer que la tecnologia sea mas util, confiable y facil de usar.",
  "Get Help": "Obtener ayuda",
  "Go to About": "Ir a Acerca de",
  "Go to TechBuddy": "Ir a TechBuddy",
  "Go to Work": "Ir a Trabajo",
  "Growth": "Crecimiento",
  "Handle the setup, troubleshooting, or safety concern without adding confusion.":
    "Resolver la configuracion, el problema tecnico o la preocupacion de seguridad sin agregar confusion.",
  "Helping seniors, families, and small businesses with setup, troubleshooting, Wi-Fi, scam awareness, and everyday technology issues.":
    "Ayudo a adultos mayores, familias y pequeños negocios con configuración, problemas técnicos, Wi-Fi, prevención de estafas y tecnología diaria.",
  "Hi Victor,": "Hola Victor,",
  "Home": "Inicio",
  "I am Victor Licona, a Fort Worth builder focused on cybersecurity, practical technology, entrepreneurship, and real-world problem solving.":
    "Soy Victor Licona, un constructor de Fort Worth enfocado en ciberseguridad, tecnologia practica, emprendimiento y resolucion de problemas reales.",
  "I am building toward work that is useful, disciplined, and real.":
    "Estoy construyendo hacia un trabajo que sea util, disciplinado y real.",
  "I am building toward cybersecurity, business, and long-term work that helps people.":
    "Estoy construyendo hacia la ciberseguridad, los negocios y un trabajo a largo plazo que ayude a la gente.",
  "I am heading to Dallas Baptist University to study cybersecurity.":
    "Voy a Dallas Baptist University para estudiar ciberseguridad.",
  "I am interested in more than learning technology. I want to use it to solve problems, improve systems, and make everyday tools easier and safer for real people.":
    "Me interesa mas que aprender tecnologia. Quiero usarla para resolver problemas, mejorar sistemas y hacer que las herramientas diarias sean mas faciles y seguras para personas reales.",
  "I built TechBuddy by Victor to help people get real support with the devices, systems, accounts, and everyday technology they depend on.":
    "Construi TechBuddy by Victor para ayudar a las personas a recibir soporte real con los dispositivos, sistemas, cuentas y tecnologia diaria de la que dependen.",
  "I care about finishing the work, testing the details, and making the result easier to use.":
    "Me importa terminar el trabajo, probar los detalles y hacer que el resultado sea mas facil de usar.",
  "I look for practical fixes that are clear, dependable, and useful outside a classroom.":
    "Busco soluciones practicas que sean claras, confiables y utiles fuera del salon de clases.",
  "I see college as a place to sharpen technical skill, strengthen discipline, and connect classroom learning to the practical work I am already pursuing.":
    "Veo la universidad como un lugar para afinar habilidades tecnicas, fortalecer disciplina y conectar el aprendizaje con el trabajo practico que ya estoy persiguiendo.",
  "In Fall 2026, I will begin at Dallas Baptist University and continue building toward work in cybersecurity, digital safety, and real-world technical systems.":
    "En otono de 2026, empezare en Dallas Baptist University y seguire construyendo hacia trabajo en ciberseguridad, seguridad digital y sistemas tecnicos reales.",
  "It is designed for seniors, families, and small businesses who want trustworthy help without confusion, pressure, or unnecessary complexity.":
    "Esta disenado para adultos mayores, familias y pequenos negocios que quieren ayuda confiable sin confusion, presion ni complejidad innecesaria.",
  "Learn / Ship / Compound": "Aprender / Lanzar / Crecer",
  "Leave it clearer": "Dejarlo mas claro",
  "Let's Connect": "Conectemos",
  "Let's make the next step clear.": "Hagamos claro el siguiente paso.",
  "LinkedIn": "LinkedIn",
  "Listen / Fix / Clarify": "Escuchar / Arreglar / Aclarar",
  "Listen first": "Escuchar primero",
  "Local help that feels human.": "Ayuda local que se siente humana.",
  "Local tech support that feels clear, trustworthy, and practical.":
    "Soporte tecnico local que se siente claro, confiable y practico.",
  "Long-term direction with standards.": "Direccion a largo plazo con estandares.",
  "Main page paths": "Rutas principales",
  "Media and Livestream Systems": "Sistemas de medios y transmision en vivo",
  "Menu": "Menú",
  "Message": "Mensaje",
  "Missing": "No encontrado",
  "Mobile navigation": "Navegación móvil",
  "Monitor / Explain / Harden": "Monitorear / Explicar / Proteger",
  "My path combines cybersecurity, business thinking, and hands-on technical work. Whether I am building a website, supporting media systems, troubleshooting devices, or growing TechBuddy by Victor, I care about clarity, trust, and execution.":
    "Mi camino combina ciberseguridad, pensamiento empresarial y trabajo tecnico practico. Ya sea construyendo un sitio web, apoyando sistemas de medios, solucionando dispositivos o creciendo TechBuddy by Victor, me importan la claridad, la confianza y la ejecucion.",
  "Name": "Nombre",
  "Navigate": "Navegar",
  "New device setup": "Configuracion de dispositivos nuevos",
  "Now": "Ahora",
  "Open": "Abierto",
  "Open navigation menu": "Abrir menú de navegación",
  "Open translate menu": "Abrir menú de traducción",
  "Operating Board": "Panel operativo",
  "Operating board tracks": "Rutas del panel operativo",
  "Origin": "Inicio",
  "Overview": "Resumen",
  "Path": "Ruta",
  "Path Ahead": "Camino por delante",
  "Practical systems": "Sistemas practicos",
  "Practical troubleshooting across tools, systems, and setups.":
    "Resolución práctica de problemas en herramientas, sistemas y configuraciones.",
  "Practical web systems": "Sistemas web practicos",
  "Principles": "Principios",
  "Problem Solving": "Resolución de problemas",
  "Process": "Proceso",
  "Profile": "Perfil",
  "Reach out for TechBuddy help, a project conversation, or a direct connection with Victor.":
    "Escribeme para ayuda de TechBuddy, una conversacion de proyecto o una conexion directa con Victor.",
  "School": "Escuela",
  "Scam awareness and safer account habits":
    "Prevencion de estafas y habitos de cuenta mas seguros",
  "Security": "Seguridad",
  "Selected": "Seleccionado",
  "Seniors": "Adultos mayores",
  "Services": "Servicios",
  "Small business tech support": "Soporte tecnico para pequenos negocios",
  "Small businesses": "Pequenos negocios",
  "Spanish": "Español",
  "Start": "Inicio",
  "Start Here": "Empieza aqui",
  "Start a Conversation": "Iniciar una conversacion",
  "Start a Message": "Iniciar un mensaje",
  "Start the conversation.": "Inicia la conversacion.",
  "Start with the problem, the device, and what needs to work again.":
    "Empezar con el problema, el dispositivo y lo que necesita funcionar otra vez.",
  "Statement": "Declaración",
  "Study": "Estudio",
  "Support": "Soporte",
  "Support for devices, Wi-Fi, printers, phones, setup, and everyday technology problems.":
    "Soporte para dispositivos, Wi-Fi, impresoras, telefonos, configuracion y problemas tecnologicos diarios.",
  "Support for the issues people actually run into.":
    "Soporte para los problemas que la gente realmente enfrenta.",
  "Systems": "Sistemas",
  "TechBuddy": "TechBuddy",
  "TechBuddy by Victor": "TechBuddy de Victor",
  "TechBuddy by Victor and practical web systems":
    "TechBuddy de Victor y sistemas web practicos",
  "TechBuddy by Victor helps seniors, families, and small businesses with the technology they rely on every day, from setup to troubleshooting to safer digital habits.":
    "TechBuddy de Victor ayuda a adultos mayores, familias y pequenos negocios con la tecnologia que usan todos los dias, desde configuracion hasta solucion de problemas y habitos digitales mas seguros.",
  "TechBuddy help, project notes, and professional connections.":
    "Ayuda de TechBuddy, notas de proyectos y conexiones profesionales.",
  "Technical systems that need to work when people are counting on them.":
    "Sistemas tecnicos que necesitan funcionar cuando la gente cuenta con ellos.",
  "Technology support that feels simpler, clearer, and more human.":
    "Soporte tecnologico que se siente mas simple, claro y humano.",
  "Technology, business, and long-term growth": "Tecnología, negocios y crecimiento a largo plazo",
  "That page is not part of the build.": "Esa pagina no es parte del sitio.",
  "The next chapter starts at DBU.": "El siguiente capitulo empieza en DBU.",
  "The route is missing, but the main site is ready.":
    "La ruta no existe, pero el sitio principal esta listo.",
  "The standards behind how I work.": "Los estandares detras de como trabajo.",
  "TechBuddy help, a project conversation, or a direct connection with Victor.":
    "Ayuda de TechBuddy, una conversacion de proyecto o una conexion directa con Victor.",
  "Troubleshooting slow or confusing devices":
    "Solucion de dispositivos lentos o confusos",
  "Victor Licona": "Victor Licona",
  "Victor Licona home page": "Pagina de inicio de Victor Licona",
  "View My Work": "Ver mi trabajo",
  "Viewing": "Viendo",
  "Vision": "Vision",
  "Web and Brand Development": "Desarrollo web y de marca",
  "Websites, media systems, digital workflows, and technical details that need consistency.":
    "Sitios web, sistemas de medios, flujos digitales y detalles tecnicos que necesitan consistencia.",
  "Website inquiry from": "Consulta del sitio web de",
  "Who It Helps": "A quién ayuda",
  "Wi-Fi and printer help": "Ayuda con Wi-Fi e impresoras",
  "Work": "Trabajo",
  "Work that shows how I think, build, and solve.":
    "Trabajo que muestra como pienso, construyo y resuelvo.",
  "Workflows that do not fall apart.": "Flujos de trabajo que no se caen.",
  "Your name": "Tu nombre",
  "your@email.com": "tu@correo.com",
  "What are you reaching out about?": "¿Sobre qué quieres hablar?",
};

const translatableAttributes = ["aria-label", "placeholder", "title"];
const skippedTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT", "SELECT"]);

const normalizeText = (text) => text.trim().replace(/\s+/g, " ");

const getTranslation = (text, language) => {
  if (language !== "es") {
    return text;
  }

  return spanishTranslations[normalizeText(text)] ?? text;
};

const getCurrentSourceText = (node) => {
  const current = node.nodeValue ?? "";
  const storedOriginal = originalTextNodes.get(node);

  if (!storedOriginal) {
    return current;
  }

  const normalizedCurrent = normalizeText(current);
  const normalizedStored = normalizeText(storedOriginal);
  const normalizedStoredTranslation = normalizeText(getTranslation(storedOriginal, "es"));

  if (
    normalizedCurrent === normalizedStored ||
    normalizedCurrent === normalizedStoredTranslation
  ) {
    return storedOriginal;
  }

  return current;
};

const getCurrentSourceAttribute = (element, attribute, dataKey, value) => {
  const storedOriginal = element.dataset[dataKey];

  if (!storedOriginal) {
    return value;
  }

  const normalizedValue = normalizeText(value);
  const normalizedStored = normalizeText(storedOriginal);
  const normalizedStoredTranslation = normalizeText(getTranslation(storedOriginal, "es"));

  if (
    normalizedValue === normalizedStored ||
    normalizedValue === normalizedStoredTranslation
  ) {
    return storedOriginal;
  }

  return value;
};

const shouldSkipNode = (node) => {
  const parent = node.parentElement;

  if (!parent || skippedTags.has(parent.tagName)) {
    return true;
  }

  return Boolean(parent.closest("[data-no-translate]"));
};

const translateTextNodes = (root, language) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (shouldSkipNode(node) || !normalizeText(node.nodeValue ?? "")) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let node = walker.nextNode();

  while (node) {
    const original = getCurrentSourceText(node);
    const leading = original.match(/^\s*/)?.[0] ?? "";
    const trailing = original.match(/\s*$/)?.[0] ?? "";
    const trimmedOriginal = normalizeText(original);
    const nextText =
      language === "es"
        ? `${leading}${getTranslation(trimmedOriginal, language)}${trailing}`
        : original;

    originalTextNodes.set(node, original);

    if (node.nodeValue !== nextText) {
      node.nodeValue = nextText;
    }

    node = walker.nextNode();
  }
};

const translateAttributes = (root, language) => {
  root.querySelectorAll(translatableAttributes.map((attribute) => `[${attribute}]`).join(",")).forEach(
    (element) => {
      if (element.closest("[data-no-translate]")) {
        return;
      }

      translatableAttributes.forEach((attribute) => {
        const value = element.getAttribute(attribute);

        if (!value) {
          return;
        }

        const dataKey = `original${attribute
          .replace(/^aria-/, "Aria-")
          .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())}`;
        const original = getCurrentSourceAttribute(element, attribute, dataKey, value);
        const nextValue = language === "es" ? getTranslation(original, language) : original;

        element.dataset[dataKey] = original;

        if (value !== nextValue) {
          element.setAttribute(attribute, nextValue);
        }
      });
    },
  );
};

const applyTranslation = (language) => {
  const root = document.querySelector(".site-shell");

  if (!root) {
    return;
  }

  document.documentElement.lang = language === "es" ? "es" : "en";
  translateTextNodes(root, language);
  translateAttributes(root, language);
};

export default function FloatingTranslate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const [transitionLanguage, setTransitionLanguage] = useState("en");
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    return window.localStorage.getItem(languageStorageKey) === "es" ? "es" : "en";
  });
  const panelId = useId();
  const switchTimeoutRef = useRef(0);
  const isSpanish = language === "es";

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    window.localStorage.setItem(languageStorageKey, language);
    applyTranslation(language);

    let frameId = 0;
    const root = document.querySelector(".site-shell");

    if (!root) {
      return undefined;
    }

    const scheduleTranslation = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => applyTranslation(language));
    };

    const observer = new MutationObserver((mutations) => {
      const shouldTranslate = mutations.some((mutation) => {
        const target = mutation.target instanceof Element ? mutation.target : mutation.target.parentElement;

        return !target?.closest("[data-no-translate]");
      });

      if (shouldTranslate) {
        scheduleTranslation();
      }
    });

    observer.observe(root, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [language]);

  useEffect(
    () => () => {
      window.clearTimeout(switchTimeoutRef.current);
      document.documentElement.classList.remove("language-switching");
    },
    [],
  );

  const handleLanguageChange = (nextLanguage) => {
    if (nextLanguage === language) {
      return;
    }

    window.clearTimeout(switchTimeoutRef.current);
    document.documentElement.classList.remove("language-switching");
    void document.documentElement.offsetWidth;
    document.documentElement.classList.add("language-switching");
    setIsSwitching(true);
    setTransitionLanguage(nextLanguage);
    setLanguage(nextLanguage);

    switchTimeoutRef.current = window.setTimeout(() => {
      setIsSwitching(false);
      document.documentElement.classList.remove("language-switching");
    }, 1900);
  };

  const copy = isSpanish
    ? {
        close: "Cerrar",
        current: "Español",
        english: "Inglés",
        hint: "Traducción integrada del sitio.",
        label: "Traducir",
        openLabel: isOpen ? "Cerrar menú de traducción" : "Abrir menú de traducción",
        spanish: "Español",
      }
    : {
        close: "Close",
        current: "English",
        english: "English",
        hint: "Built-in site translation.",
        label: "Translate",
        openLabel: isOpen ? "Close translate menu" : "Open translate menu",
        spanish: "Spanish",
      };

  return (
    <div
      className={`translate-widget${isOpen ? " is-open" : ""}${
        isSwitching ? " is-switching" : ""
      }`}
      data-no-translate
    >
      {isSwitching ? (
        <div className="translate-transition" aria-hidden="true">
          <span className="translate-transition-panel" />
          <span className="translate-transition-rule translate-transition-rule-top" />
          <span className="translate-transition-rule translate-transition-rule-bottom" />
          <span className="translate-transition-lockup">
            <span className="translate-transition-caption">
              {transitionLanguage === "es" ? "Traduciendo" : "Translating"}
            </span>
            <span className="translate-transition-code">
              {transitionLanguage === "es" ? "ES" : "EN"}
            </span>
            <span className="translate-transition-progress" />
          </span>
        </div>
      ) : null}

      <button
        type="button"
        className="translate-toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={copy.openLabel}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{isSpanish ? "ES" : "EN"}</span>
      </button>

      <div id={panelId} className="translate-panel" hidden={!isOpen}>
        <div className="translate-panel-head">
          <strong>{copy.label}</strong>
          <button type="button" aria-label={copy.openLabel} onClick={() => setIsOpen(false)}>
            {copy.close}
          </button>
        </div>

        <div className="translate-options" role="group" aria-label={copy.label}>
          <button
            type="button"
            className={language === "en" ? "is-active" : ""}
            aria-pressed={language === "en"}
            onClick={() => handleLanguageChange("en")}
          >
            {copy.english}
          </button>
          <button
            type="button"
            className={language === "es" ? "is-active" : ""}
            aria-pressed={language === "es"}
            onClick={() => handleLanguageChange("es")}
          >
            {copy.spanish}
          </button>
        </div>

        <small>
          {copy.current} - {copy.hint}
        </small>
      </div>
    </div>
  );
}
