const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const BrowserShowcase = ({ media }) => {
  const { t } = useLanguage();
  const [active, setActive] = React.useState(0);
  const current = media[active];

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-fg-line">
      <div className="flex items-center gap-3 border-b border-fg-line bg-fg-soft px-3 py-2.5">
        <div className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-sub">
          {t(COPY.sections.preview.label)}
        </div>
        <div className="flex gap-1 overflow-x-auto">
          {media.map((m, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={
                'h-6 shrink-0 rounded px-3 text-[11px] font-semibold transition-colors ' +
                (i === active
                  ? 'border border-fg-line bg-fg-page text-fg shadow-sm'
                  : 'text-fg-sub hover:bg-fg-page/60 hover:text-fg')
              }
            >
              {t(m.label)}
            </button>
          ))}
        </div>
      </div>

      {current.type === 'iframe' ? (
        <iframe
          key={current.src}
          src={current.src}
          className="block h-[420px] w-full border-0"
          title={t(current.label)}
          loading="lazy"
        />
      ) : current.type === 'video' ? (
        <div className="flex h-[420px] items-center justify-center bg-fg-soft">
          <video
            key={current.src}
            src={current.src}
            className="block h-full w-full object-contain"
            controls
            autoPlay
            loop
            muted
            playsInline
            aria-label={t(current.label)}
          />
        </div>
      ) : (
        <div className="flex h-[420px] items-center justify-center bg-fg-soft">
          <img
            src={current.src}
            alt={t(current.label)}
            className="block h-full w-full object-contain"
            style={{ objectPosition: current.src.includes('poster') ? 'center' : 'top' }}
          />
        </div>
      )}
    </div>
  );
};

const LanguageToggle = ({ className = '' }) => {
  const { lang, setLang, t } = useLanguage();
  const options = [
    { value: 'ko', label: 'KO' },
    { value: 'en', label: 'EN' },
  ];

  return (
    <div
      className={
        'inline-flex items-center rounded-full border border-fg-line bg-white/80 p-1 backdrop-blur-sm ' +
        className
      }
      role="group"
      aria-label={t(COPY.languageToggle.ariaLabel)}
    >
      {options.map((option) => {
        const active = option.value === lang;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLang(option.value)}
            className={
              'h-8 rounded-full px-3 text-[12px] font-bold tracking-[0.08em] transition-all ' +
              (active
                ? 'bg-trust text-white shadow-sm'
                : 'text-fg-sub hover:bg-fg-soft hover:text-fg')
            }
            aria-pressed={active}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

const Pill = ({ children, tone = 'soft' }) => (
  <span
    className={
      'inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[12px] font-semibold tracking-wide ' +
      (tone === 'solid'
        ? 'bg-trust text-white'
        : tone === 'ghost'
        ? 'border border-fg-line text-fg-sub'
        : 'bg-trustsoft text-trustdark')
    }
  >
    {children}
  </span>
);

const Headline = ({ eyebrow, title, sub, subClassName = '' }) => (
  <div className="reveal mb-10 md:mb-14">
    <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-trust">{eyebrow}</div>
    <h2 className="mt-2 text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-fg md:text-[40px]">
      {title}
    </h2>
    {sub && (
      <p className={'mt-3 max-w-[640px] text-[15px] leading-[1.7] text-fg-sub md:text-[16px] ' + subClassName}>
        {sub}
      </p>
    )}
  </div>
);

Object.assign(window, { useReveal, BrowserShowcase, Pill, Headline, LanguageToggle });
