const HERO_PROOFS = [
  { icon: 'layers', label: 'Product', detail: { ko: '문제를 기획하고 서비스로 구현', en: 'Turn problems into products' }, position: 'proof-a' },
  { icon: 'briefcase', label: 'Operations', detail: { ko: '지속 가능한 실행 시스템 설계', en: 'Build repeatable operating systems' }, position: 'proof-b' },
  { icon: 'globe', label: 'Global', detail: { ko: '더 넓은 세상과 연결', en: 'Connect people across borders' }, position: 'proof-c' },
  { icon: 'sparkles', label: 'AI', detail: { ko: 'AI로 더 빠르게 문제 해결', en: 'Use AI to solve faster' }, position: 'proof-d' },
];

const HERO_STAT_ICONS = ['app-store', 'users', 'globe', 'handshake'];

const Hero = () => {
  const { lang, t } = useLanguage();
  const heroTitle = t(COPY.hero.title);
  const heroKeywords = COPY.hero.keywords.filter((keyword) =>
    ['#Product', '#AI', '#Execution', '#Global'].includes(keyword.en)
  );
  const intro = t({
    ko: '비즈니스와 사용자의 문제를 현실적인 제품과 운영 시스템으로 전환하는 것을 목표로 합니다.',
    en: 'I turn business and user problems into practical products and operating systems.',
  });

  return (
    <section id="top" className="spotlight relative overflow-hidden bg-grid hero-section">
      <div className="relative mx-auto max-w-[1200px] px-6 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20 lg:pt-24">
        <div className="hero-layout">
          <div className="hero-copy relative z-10">
            <div className="hero-eyebrow">{t(COPY.hero.eyebrow)}</div>

            <h1 className={lang === 'en' ? 'hero-title hero-title-en' : 'hero-title'}>
              <span className="hero-title-line">{heroTitle.line1}</span>
              <span className="hero-title-line">
                {heroTitle.prefix}
                <span className="grad-text">{heroTitle.accent}</span>
                {heroTitle.suffix}
              </span>
            </h1>

            <p className="hero-intro">{intro}</p>

            <div className="hero-actions">
              <a href="#work" className="hero-btn hero-btn-primary">
                {t(COPY.hero.workCta)} <Icon name="arrow-right" size={16} stroke={2} />
              </a>
              <a href="#contact" className="hero-btn hero-btn-secondary">
                <Icon name="mail" size={16} stroke={2} /> {t(COPY.hero.contactCta)}
              </a>
            </div>

            <div className="hero-keywords">
              {heroKeywords.map((keyword) => (
                <Pill key={keyword.en} tone="ghost">{t(keyword)}</Pill>
              ))}
            </div>

            <div className="hero-quote">
              <span>“</span>
              <p>{t({
                ko: '좋은 아이디어는 실행될 때 세상을 바꿀 수 있습니다.',
                en: 'A good idea can change the world when it is executed.',
              })}</p>
              <small>— Jeongwon Kim</small>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <div className="hero-orbit">
              <div className="hero-globe" aria-hidden="true">
                <div className="hero-globe-lat lat-a" />
                <div className="hero-globe-lat lat-b" />
                <div className="hero-globe-lon lon-a" />
                <div className="hero-globe-lon lon-b" />
              </div>
              <div className="hero-orbit-ring hero-orbit-ring-a" />
              <div className="hero-orbit-ring hero-orbit-ring-b" />
              <div className="hero-orbit-node node-a" />
              <div className="hero-orbit-node node-b" />
              <div className="hero-orbit-node node-c" />

              <div className="hero-photo-shell">
                <img
                  src="assets/hero-portrait-final.webp"
                  alt="Jeongwon Kim"
                  className="hero-portrait"
                />
              </div>

              {HERO_PROOFS.map((proof) => (
                <div key={proof.label} className={`floating-proof ${proof.position}`}>
                  <span className="floating-proof-icon"><Icon name={proof.icon} size={17} stroke={1.9} /></span>
                  <span>
                    <strong>{proof.label}</strong>
                    <small>{t(proof.detail)}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="proof-strip reveal">
          {STATS.map((stat, index) => (
            <div key={`${stat.value}-${index}`} className="proof-strip-item">
              <div className="proof-strip-icon">
                <Icon name={HERO_STAT_ICONS[index] || 'sparkles'} size={22} stroke={1.8} />
              </div>
              <div className="proof-strip-copy proof-strip-copy-strong">
                <strong className="proof-stat-value">{stat.value}<span>{t(stat.suffix)}</span></strong>
                <span className="proof-stat-label">{t(stat.label)}</span>
                <small>{t(stat.sub)}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
