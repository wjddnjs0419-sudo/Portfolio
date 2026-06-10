const Hero = () => {
  const { lang, t } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const [photoH, setPhotoH] = React.useState(0);
  const [copyH, setCopyH] = React.useState(0);
  const [openCopyH, setOpenCopyH] = React.useState(0);
  const photoRef = React.useRef(null);
  const copyRef = React.useRef(null);
  const openCopyRef = React.useRef(null);
  const gridSize = photoH || 340;
  const activeCopyH = open ? openCopyH : copyH;
  const heroMinHeight = Math.max(gridSize, activeCopyH);
  const heroTitle = t(COPY.hero.title);
  const heroTitleSize = lang === 'en' ? 'text-[42px] md:text-[56px] lg:text-[64px]' : 'text-[44px] md:text-[72px]';
  const heroLineClass = lang === 'en' ? 'block' : 'block md:whitespace-nowrap';

  React.useEffect(() => {
    const observers = [];
    if (photoRef.current) {
      const photoObserver = new ResizeObserver((entries) => setPhotoH(entries[0].contentRect.height));
      photoObserver.observe(photoRef.current);
      observers.push(photoObserver);
    }
    if (copyRef.current) {
      const copyObserver = new ResizeObserver((entries) => setCopyH(entries[0].contentRect.height));
      copyObserver.observe(copyRef.current);
      observers.push(copyObserver);
    }
    if (openCopyRef.current) {
      const openCopyObserver = new ResizeObserver((entries) => setOpenCopyH(entries[0].contentRect.height));
      openCopyObserver.observe(openCopyRef.current);
      observers.push(openCopyObserver);
    }
    return () => observers.forEach((observer) => observer.disconnect());
  }, [lang]);

  React.useEffect(() => {
    if (!copyRef.current) return;
    setCopyH(copyRef.current.getBoundingClientRect().height);
  }, [lang, heroTitle]);

  React.useEffect(() => {
    if (!openCopyRef.current) return;
    setOpenCopyH(openCopyRef.current.getBoundingClientRect().height);
  }, [lang]);

  React.useEffect(() => {
    if (!photoRef.current) return;
    setPhotoH(photoRef.current.getBoundingClientRect().height);
  }, []);

  return (
    <section id="top" className="spotlight relative overflow-hidden bg-grid">
      <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-20 md:px-8 md:pb-32 md:pt-28">
        <div className="flex items-start gap-4">
          <div className="relative min-w-0 flex-1 overflow-hidden" style={{ minHeight: `${heroMinHeight}px` }}>
            <div
              className={
                'absolute inset-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ' +
                (open ? 'pointer-events-none -translate-y-4 opacity-0' : 'pointer-events-auto translate-y-0 opacity-100')
              }
            >
              <div ref={copyRef}>
                <div className="mb-6 flex items-center">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-trustdark">
                    {t(COPY.hero.eyebrow)}
                  </span>
                </div>

                <h1 className={`${heroTitleSize} font-extrabold leading-[1.05] tracking-[-0.025em] text-fg`}>
                  <span className={heroLineClass}>{heroTitle.line1}</span>
                  <span className={heroLineClass}>
                    {heroTitle.prefix}
                    <span className="grad-text">{heroTitle.accent}</span>
                    {heroTitle.suffix}
                  </span>
                </h1>

                <div className="mt-7 flex flex-wrap gap-2">
                  {COPY.hero.keywords.map((keyword) => (
                    <Pill key={keyword.en} tone="ghost">
                      {t(keyword)}
                    </Pill>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#work"
                    className="inline-flex h-11 items-center gap-2 rounded-md bg-trust px-5 text-[14px] font-semibold text-white shadow-md transition-colors hover:bg-trustdark"
                  >
                    {t(COPY.hero.workCta)} <Icon name="arrow-right" size={16} stroke={2} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex h-11 items-center gap-2 rounded-md border border-fg-line px-5 text-[14px] font-semibold text-fg transition-colors hover:border-trust hover:text-trust"
                  >
                    <Icon name="mail" size={16} stroke={2} /> {t(COPY.hero.contactCta)}
                  </a>
                  <span className="ml-1 hidden items-center gap-2 text-[13px] text-fg-sub md:inline-flex">
                    <Icon name="globe" size={14} stroke={1.8} /> {t(PROFILE.heroLocation)}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={
                'absolute inset-0 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ' +
                (open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0')
              }
            >
              <div ref={openCopyRef}>
                <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-trust">{t(COPY.hero.noteLabel)}</p>
                <p className="text-[22px] leading-[1.4] text-fg md:text-[28px]">{t(COPY.hero.greeting)}</p>
                <div className="mt-4 max-w-[480px] space-y-4 text-[15px] leading-[1.65] md:text-[16px]">
                  {COPY.hero.letter.map((paragraph, index) => (
                    <p
                      key={index}
                      className={index === COPY.hero.letter.length - 1 ? 'text-fg whitespace-pre-line' : 'text-fg-sub whitespace-pre-line'}
                    >
                      {t(paragraph)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              'hidden shrink-0 flex-col items-center gap-2 self-center transition-opacity duration-300 ease-[cubic-bezier(0.2,0,0,1)] md:flex ' +
              (open ? 'opacity-0' : 'opacity-100')
            }
          >
            <Icon name="arrow-right" size={22} stroke={1.8} className="text-fg-sub" />
            <span className="text-[13px] tracking-wide text-fg-sub">{t(COPY.hero.clickHint)}</span>
          </div>

          <div
            className="relative z-[1] hidden shrink-0 items-start justify-end md:flex"
            style={{ width: open ? `${340 + 16 + gridSize}px` : '340px' }}
          >
            <div className="relative w-[340px] shrink-0 cursor-pointer" onClick={() => setOpen((v) => !v)}>
              <img
                ref={photoRef}
                src="assets/profile-nobg.png"
                alt="Jeongwon Kim"
                className="block h-auto w-full object-contain object-bottom"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                }}
              />
            </div>

            <div
              className="grid shrink-0 grid-cols-2 grid-rows-2 gap-2 overflow-hidden transition-[width,margin] duration-500 ease-[cubic-bezier(0.2,0,0,1)]"
              style={{
                width: open ? `${gridSize}px` : '0px',
                height: `${gridSize}px`,
                marginLeft: open ? '16px' : '0px',
              }}
            >
              {COPY.hero.hobbies.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={t(img.alt)}
                  className={
                    'block h-full w-full rounded-[10px] object-cover transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] ' +
                    (open ? 'scale-100 opacity-100' : 'scale-[0.92] opacity-0')
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="reveal mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-4 md:gap-4">
          {STATS.map((s, i) => (
            <div key={i} className="glass rounded-xl p-5 md:p-6">
              <div
                className={
                  'flex flex-wrap items-baseline text-trust ' +
                  (s.compact
                    ? 'gap-x-2 text-[32px] font-extrabold leading-none tracking-[-0.03em] md:text-[36px] lg:text-[40px]'
                    : 'gap-x-1 text-[40px] font-extrabold leading-none tracking-[-0.03em] md:text-[48px]')
                }
              >
                <span>{s.value}</span>
                <span>{t(s.suffix)}</span>
              </div>
              <div className="mt-2 text-[14px] font-semibold text-fg">{t(s.label)}</div>
              <div className="mt-1 text-[12px] text-fg-sub">{t(s.sub)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
