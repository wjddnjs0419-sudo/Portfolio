const CAPABILITY_PILLARS = [
  { icon: 'layers', title: { ko: 'Product Planning', en: 'Product Planning' }, body: { ko: '사용자 문제를 정의하고 서비스 흐름과 기능 우선순위를 설계합니다.', en: 'Define user problems and shape service flows and priorities.' } },
  { icon: 'briefcase', title: { ko: 'Business Operations', en: 'Business Operations' }, body: { ko: '흩어진 운영 업무를 정보 구조와 디지털 시스템으로 연결합니다.', en: 'Connect fragmented operations through digital systems.' } },
  { icon: 'sparkles', title: { ko: 'AI Workflow Design', en: 'AI Workflow Design' }, body: { ko: 'AI 판단 단계와 자동화 흐름을 구조화합니다.', en: 'Structure AI decision stages and automation flows.' } },
  { icon: 'globe', title: { ko: 'Global Communication', en: 'Global Communication' }, body: { ko: '언어와 문화가 다른 환경에서 고객·파트너·팀을 조율합니다.', en: 'Coordinate people and partners across languages and cultures.' } },
];

const TOOL_ORDER = ['Figma','React Native · Expo','Supabase','SQL','GA4','Firebase','Git · GitHub','API Integration','LLM','Prompt Design'];

const SkillsSection = () => {
  const { t } = useLanguage();
  const allSkillItems = [...SKILLS.flatMap((skill) => skill.items), ...PROJECTS.flatMap((project) => project.badges || [])];
  const tools = TOOL_ORDER.filter((tool) => allSkillItems.includes(tool));

  return (
    <section id="skills" className="bg-fg-page skills-section">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20">
        <div className="section-micro-title">{t({ ko: '역량 · CAPABILITIES', en: 'CAPABILITIES' })}</div>

        <div className="capability-row">
          <div className="capability-pillars capability-compact">
            {CAPABILITY_PILLARS.map((pillar) => (
              <article key={pillar.title.en} className="capability-pillar reveal">
                <div className="capability-icon"><Icon name={pillar.icon} size={16} stroke={1.9} /></div>
                <h3>{t(pillar.title)}</h3>
                <p>{t(pillar.body)}</p>
              </article>
            ))}
          </div>

          <aside className="tools-compact reveal">
            <div className="tools-compact-title">{t({ ko: '주요 도구 & 언어', en: 'Tools & languages' })}</div>
            <div className="tools-compact-list">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            <div className="language-compact-list">
              {LANGUAGES.map((language) => <div key={language.lang.en}><strong>{t(language.lang)}</strong><span>{t(language.sub)}</span></div>)}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

window.SkillsSection = SkillsSection;
