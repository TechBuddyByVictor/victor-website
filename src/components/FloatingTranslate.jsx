import React, { useEffect, useId, useState } from "react";

const translateScriptId = "google-translate-widget-script";
const translateCallbackName = "googleTranslateElementInit";

export default function FloatingTranslate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") {
      return undefined;
    }

    window[translateCallbackName] = () => {
      if (!window.google?.translate || document.querySelector(".goog-te-combo")) {
        setIsReady(true);
        return;
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,vi,zh-CN,ar,hi",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element",
      );
      setIsReady(true);
    };

    if (window.google?.translate) {
      window[translateCallbackName]();
      return undefined;
    }

    if (!document.getElementById(translateScriptId)) {
      const script = document.createElement("script");
      script.id = translateScriptId;
      script.src = `https://translate.google.com/translate_a/element.js?cb=${translateCallbackName}`;
      script.async = true;
      document.body.appendChild(script);
    }

    return undefined;
  }, [isOpen]);

  return (
    <div className={`translate-widget${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        className="translate-toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close translate menu" : "Open translate menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>A</span>
      </button>

      <div id={panelId} className="translate-panel" hidden={!isOpen}>
        <div className="translate-panel-head">
          <strong>Translate</strong>
          <button type="button" aria-label="Close translate menu" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
        <div id="google_translate_element" className="translate-slot" />
        {!isReady ? <small>Loading translator...</small> : null}
      </div>
    </div>
  );
}
