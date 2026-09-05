const CAPABILITY_PILLARS = [
  { icon: 'layers', title: { ko: 'Product Planning', en: 'Product Planning' }, body: { ko: '사용자 문제를 정의하고 서비스 흐름과 기능 우선순위를 설계합니다.', en: 'Define user problems and shape service flows and priorities.' } },
  { icon: 'briefcase', title: { ko: 'Business Operations', en: 'Business Operations' }, body: { ko: '흩어진 운영 업무를 정보 구조와 디지털 시스템으로 연결합니다.', en: 'Connect fragmented operations through digital systems.' } },
  { icon: 'sparkles', title: { ko: 'AI Workflow Design', en: 'AI Workflow Design' }, body: { ko: 'AI 판단 단계와 자동화 흐름을 구조화합니다.', en: 'Structure AI decision stages and automation flows.' } },
  { icon: 'globe', title: { ko: 'Global Communication', en: 'Global Communication' }, body: { ko: '언어와 문화가 다른 환경에서 고객·파트너·팀을 조율합니다.', en: 'Coordinate people and partners across languages and cultures.' } },
];

const TOOL_ORDER = ['Figma','React Native · Expo','Supabase','SQL','GA4','Firebase','Git · GitHub','API Integration','LLM','Prompt Design'];
const HIGHLIGHT_ICONS = ['sparkles', 'globe', 'medal'];

const SkillsSection = () => {
  const { t } = useLanguage();
  const allSkillItems = [...SKILLS.flatMap((skill) => skill.items), ...PROJECTS.flatMap((project) => project.badges || [])];
  const tools = TOOL_ORDER.filter((tool) => allSkillItems.includes(tool));
  const capabilityTitle = t({
    ko: { line1: '문제를 발견하는 것에서', line2: '해결하는 것까지,', accent: '폭넓게 연결합니다.' },
    en: { line1: 'From finding problems', line2: 'to solving them,', accent: 'I connect the whole flow.' },
  });

  return (
    <section id="skills" className="bg-fg-page skills-section">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20">
        <div className="capabilities-intro reveal">
          <div>
            <div className="section-micro-title">{t({ ko: '역량 · CAPABILITIES', en: 'CAPABILITIES' })}</div>
            <h2>
              <span>{capabilityTitle.line1}</span>
              <span>{capabilityTitle.line2}</span>
              <strong>{capabilityTitle.accent}</strong>
            </h2>
          </div>
          <p>{t({
            ko: '기획, 운영, 기술, 커뮤니케이션을 아우르는 역량으로 아이디어를 실제 서비스와 임팩트로 전환합니다.',
            en: 'I connect planning, operations, technology, and communication to turn ideas into products and impact.',
          })}</p>
        </div>

        <div className="capability-pillars capability-compact">
          {CAPABILITY_PILLARS.map((pillar) => (
            <article key={pillar.title.en} className="capability-pillar reveal">
              <div className="capability-icon"><Icon name={pillar.icon} size={18} stroke={1.9} /></div>
              <h3>{t(pillar.title)}</h3>
              <p>{t(pillar.body)}</p>
            </article>
          ))}
        </div>

        <div className="capability-detail-grid">
          <article className="capability-detail-panel tools-panel reveal">
            <div className="capability-panel-title"><Icon name="layers" size={17} stroke={1.9} />{t({ ko: 'Tools I use', en: 'Tools I use' })}</div>
            <div className="tools-panel-list">
              {tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </article>

          <article className="capability-detail-panel languages-panel reveal">
            <div className="capability-panel-title"><Icon name="globe" size={17} stroke={1.9} />{t({ ko: 'Languages', en: 'Languages' })}</div>
            <div className="languages-panel-list">
              {LANGUAGES.map((language) => (
                <div key={language.lang.en}>
                  <strong>{t(language.lang)}</strong>
                  <span>{t(language.sub)}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="capability-detail-panel highlights-panel reveal">
            <div className="capability-panel-title"><Icon name="sparkles" size={17} stroke={1.9} />{t({ ko: 'Key Highlights', en: 'Key Highlights' })}</div>
            <div className="highlights-panel-list">
              {COPY.sections.skills.highlights.map((highlight, index) => (
                <div key={index}>
                  <Icon name={HIGHLIGHT_ICONS[index] || 'sparkles'} size={15} stroke={1.9} />
                  <p dangerouslySetInnerHTML={{ __html: t(highlight) }} />
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

window.SkillsSection = SkillsSection;
