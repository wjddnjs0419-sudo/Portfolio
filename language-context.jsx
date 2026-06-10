const LANG_STORAGE_KEY = 'portfolio-language';
const DEFAULT_LANG = 'ko';

const isLocalizedValue = (value) =>
  value &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  Object.prototype.hasOwnProperty.call(value, 'ko') &&
  Object.prototype.hasOwnProperty.call(value, 'en');

const getLocalizedText = (value, lang) => {
  if (isLocalizedValue(value)) {
    return value[lang] ?? value[DEFAULT_LANG];
  }
  return value;
};

const LanguageContext = React.createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  toggleLang: () => {},
  t: (value) => value,
});

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = React.useState(() => {
    try {
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      return saved === 'en' ? 'en' : DEFAULT_LANG;
    } catch (error) {
      return DEFAULT_LANG;
    }
  });

  React.useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (error) {}
  }, [lang]);

  const toggleLang = () => {
    setLang((current) => (current === 'ko' ? 'en' : 'ko'));
  };

  const value = {
    lang,
    setLang,
    toggleLang,
    t: (text) => getLocalizedText(text, lang),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

const useLanguage = () => React.useContext(LanguageContext);

Object.assign(window, { LanguageProvider, useLanguage, getLocalizedText });
