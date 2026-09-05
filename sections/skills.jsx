const CAPABILITY_PILLARS = [
  {
    icon: 'layers',
    title: { ko: 'Product Planning', en: 'Product Planning' },
    body: { ko: '사용자 문제를 정의하고 서비스 흐름과 기능 우선순위를 설계합니다.', en: 'Define user problems and shape service flows and feature priorities.' },
  },
  {
    icon: 'briefcase',
    title: { ko: 'Business Operations', en: 'Business Operations' },
    body: { ko: '흩어진 운영 업무를 정보 구조와 디지털 시스템으로 연결합니다.', en: 'Connect fragmented operations through information structures and digital systems.' },
  },
  {
    icon: 'sparkles',
    title: { ko: 'AI Workflow Design', en: 'AI Workflow Design' },
    body: { ko: 'AI를 단순 사용하지 않고 판단 단계와 자동화 흐름을 구조화합니다.', en: 'Structure AI decision stages and automation flows instead of using AI as a black box.' },
  },
  {
    icon: 'globe',
    title: { ko: 'Global Communication', en: 'Global Communication' },
    body: { ko: '언어와 문화가 다른 환경에서 고객·파트너·팀 사이를 조율합니다.', en: 'Coordinate customers, partners, and teams across languages and cultures.' },
  },
];

const TOOL_ORDER = [
  'Figma',
  'Supabase',
  'SQL',
  'GA4',
  'Firebase',
  'Git · GitHub',
  'API Integration',
  'LLM',
  'Prompt Design',
  'Recommendation Logic',
];

const SkillsSection = () => {
  const { t } = useLanguage();
  const allSkillItems = SKILLS.flatMap((skill) => skill.items);
  const tools = TOOL_ORDER.filter((tool) => allSkillItems.includes(tool));
  const highlights = [
    { value: 'App Store', label: { ko: 'Date-navi 정식 출시', en: 'Date-navi released' } },
    { value: 'Paris 24', label: { ko: 'Olympics · Korea House', en: 'Olympics · Korea House' } },
    { value: '5 Sponsors', label: { ko: '약 300만 원 후원', en: 'About KRW 3M sponsorship' } },
    { value: '100+', label: { ko: '스타트업 프로그램 운영', en: 'Startup program operations' } },
  ];

  return (
    <section id="skills" className="bg-fg-page">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
        <Headline
          eyebrow={t({ ko: 'Capabilities', en: 'Capabilities' })}
          title={t({ ko: '무엇을 할 수 있는지부터 보여줍니다.', en: 'Capabilities first, tools second.' })}
          sub={t(COPY.sections.skills.sub)}
        />

        <div className="capability-pillars grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITY_PILLARS.map((pillar) => (
            <article key={pillar.title.en} className="capability-pillar reveal">
              <div className="capability-icon">
                <Icon name={pillar.icon} size={18} stroke={1.9} />
              </div>
              <h3>{t(pillar.title)}</h3>
              <p>{t(pillar.body)}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
          <div className="reveal rounded-3xl border border-fg-line bg-fg-soft p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-trust">Tools I use</div>
                <h3 className="mt-2 text-[22px] font-extrabold tracking-[-0.02em] text-fg md:text-[26px]">
                  {t({ ko: '기획에서 구현까지 직접 써본 도구', en: 'Tools I have used from planning to implementation' })}
                </h3>
              </div>
              <span className="hidden h-12 w-12 place-items-center rounded-2xl bg-fg-page text-trust shadow-sm md:grid">
                <Icon name="database" size={20} stroke={1.8} />
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="tool-chip">{tool}</span>
              ))}
            </div>
          </div>

          <div className="reveal rounded-3xl border border-fg-line bg-fg-page p-6 md:p-8">
            <div className="flex items-center gap-2 text-trust">
              <Icon name="globe" size={17} stroke={1.8} />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em]">{t(COPY.sections.skills.languagesTitle)}</span>
            </div>
            <div className="mt-5 divide-y divide-fg-line">
              {LANGUAGES.map((language) => (
                <div key={language.lang.en} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                  <strong className="text-[16px] text-fg">{t(language.lang)}</strong>
                  <span className="text-right text-[13px] font-medium text-fg-sub">{t(language.sub)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {highlights.map((highlight) => (
            <div key={highlight.value} className="capability-highlight reveal">
              <strong>{highlight.value}</strong>
              <span>{t(highlight.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.SkillsSection = SkillsSection;
