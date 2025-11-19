import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { TEXT, type Lang } from "../assets/lang";

// STORAGE_KEY and DEFAULT: small constants used below
const STORAGE_KEY = "wydo:lang"; // where we persist the language in the browser
const DEFAULT: Lang = "id";      // fallback language (Indonesian)

// 1) The context type describes what consumers (useLang) will receive
type LangContextValue = {
  lang: Lang;                 // current language code ("id" | "en")
  toggleLang: () => void;     // function to flip the language
  setLang: (l: Lang) => void; // function to set language explicitly
  t: typeof TEXT[Lang];       // the translation dictionary for the current language
};

// 2) createContext — holds the shared data. We start it as null and guard in useLang()
const LangContext = createContext<LangContextValue | null>(null);

// 3) Provider component — wrap your app with this
export function LangProvider({ children }: { children: React.ReactNode }) {
  // lazy initialiser: read from localStorage once when provider mounts
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY); // maybe null
      if (raw && (raw === "id" || raw === "en")) return raw as Lang; // valid value
    } catch (e) {
      // ignore localStorage errors (privacy modes etc.)
    }
    return DEFAULT; // fallback
  });

  // persist language changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // ignore write errors
    }
  }, [lang]);

  // convenience: a small function to flip id <-> en
  const toggleLang = () => setLangState(l => (l === "id" ? "en" : "id"));

  // memoize computed dictionary t = TEXT[lang] so consumers don't re-render unnecessarily
  const t = useMemo(() => TEXT[lang], [lang]);

  // the object we hand to consumers
  const value: LangContextValue = {
    lang,
    toggleLang,
    setLang: setLangState,
    t: t as any, // small type shim; safe here because TEXT is as const
  };

  // return the provider wrapping children
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// 4) hook to read the context easily
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
