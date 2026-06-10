function AppShell() {
  const { lang, t } = useLanguage();

  useReveal();

  React.useEffect(() => {
    document.title = t(COPY.metaTitle);
  }, [lang, t]);

  return (
    <div data-screen-label="Portfolio" className="min-h-screen">
      <Nav/>
      <main>
        <Hero/>
        <ProjectsSection/>
        <ExperienceSection/>
        <SkillsSection/>
        <ContactSection/>
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
