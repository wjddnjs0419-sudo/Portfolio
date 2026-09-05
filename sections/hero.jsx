const HERO_PROOFS = [
  { icon: 'layers', label: 'Product', detail: { ko: '서비스 기획', en: 'Service planning' }, position: 'proof-a' },
  { icon: 'briefcase', label: 'Operations', detail: { ko: '운영 시스템', en: 'Operating systems' }, position: 'proof-b' },
  { icon: 'globe', label: 'Global', detail: { ko: '국제 협업', en: 'Cross-cultural work' }, position: 'proof-c' },
  { icon: 'sparkles', label: 'AI', detail: { ko: '자동화 · 추천', en: 'Automation · recommendation' }, position: 'proof-d' },
];

const Hero = () => {
  const { lang, t } = useLanguage();
  const heroTitle = t(COPY.hero.title);
  const heroKeywords = COPY.hero.keywords.filter((keyword) =>
    ['#Product', '#AI', '#Execution', '#Global'].includes(keyword.en)
  );
  const intro = t({
    ko: '사업과 사용자 문제를 발견하고, 기획에서 구현·운영·개선까지 직접 연결합니다.',
    en: 'I connect business and user problems to planning, implementation, operations, and iteration.',
  });
  const availability = t({ ko: 'Seoul, KR · 즉시 근무 가능', en: 'Seoul, KR · Available immediately' });

  return (
    <section id="top" className="spotlight relative overflow-hidden bg-grid">
      <div className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24 lg:pt-28">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.12fr)_minmax(340px,.88fr)] md:gap-8 lg:gap-14">
          <div className="relative z-10 max-w-[720px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fg-line bg-white/80 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-trustdark shadow-sm backdrop-blur-sm md:text-[12px]">
              <span className="h-1.5 w-1.5 rounded-full bg-trust" />
              {t(COPY.hero.eyebrow)}
            </div>

            <h1
              className={
                (lang === 'en'
                  ? 'text-[44px] sm:text-[54px] lg:text-[68px]'
                  : 'text-[46px] sm:text-[58px] lg:text-[72px]') +
                ' font-extrabold leading-[1.03] tracking-[-0.035em] text-fg'
              }
            >
              <span className="block">{heroTitle.line1}</span>
              <span className="mt-1 block">
                {heroTitle.prefix}
                <span className="grad-text">{heroTitle.accent}</span>
                {heroTitle.suffix}
              </span>
            </h1>

            <p className="mt-7 max-w-[620px] text-[16px] leading-[1.75] text-fg-sub md:text-[18px]">
              {intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {heroKeywords.map((keyword) => (
                <Pill key={keyword.en} tone="ghost">
                  {t(keyword)}
                </Pill>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-trust px-5 text-[14px] font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-trustdark hover:shadow-lg"
              >
                {t(COPY.hero.workCta)} <Icon name="arrow-right" size={16} stroke={2} />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-fg-line bg-fg-page px-5 text-[14px] font-semibold text-fg transition-all hover:-translate-y-0.5 hover:border-trust hover:text-trust"
              >
                <Icon name="mail" size={16} stroke={2} /> {t(COPY.hero.contactCta)}
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2 text-[13px] font-medium text-fg-sub">
              <Icon name="globe" size={14} stroke={1.8} />
              <span>{availability}</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px] md:max-w-none">
            <div className="hero-orbit relative mx-auto aspect-square w-[min(92vw,440px)] md:w-full">
              <div className="hero-orbit-ring hero-orbit-ring-a" />
              <div className="hero-orbit-ring hero-orbit-ring-b" />
              <div className="hero-photo-shell">
                <img
                  src="assets/profile-nobg.png"
                  alt="Jeongwon Kim"
                  className="relative z-10 block h-full w-full object-contain object-bottom"
                />
              </div>

              {HERO_PROOFS.map((proof) => (
                <div key={proof.label} className={`floating-proof ${proof.position}`}>
                  <span className="floating-proof-icon">
                    <Icon name={proof.icon} size={15} stroke={1.9} />
                  </span>
                  <span>
                    <strong>{proof.label}</strong>
                    <small>{t(proof.detail)}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="proof-strip reveal mt-14 md:mt-16">
          {STATS.map((stat, index) => (
            <div key={`${stat.value}-${index}`} className="proof-strip-item">
              <div className="proof-strip-value">
                <span>{stat.value}</span>
                <span>{t(stat.suffix)}</span>
              </div>
              <div className="proof-strip-copy">
                <strong>{t(stat.label)}</strong>
                <span>{t(stat.sub)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-fg-sub opacity-70">
          <span>{t({ ko: 'Selected Work', en: 'Selected Work' })}</span>
          <span className="h-px flex-1 bg-fg-line" />
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
