const EXPERIENCE_BACKGROUNDS = {
  'loreal-brandstorm': "assets/L'oreal.jpeg",
  'paris-2024': 'assets/Paris 2024.jpeg',
  'sports-events': 'assets/Sports Event.png',
  'sports-retail': 'assets/Sports marketing.jpeg',
};

const ExperienceCard = ({ e, idx }) => {
  const { t } = useLanguage();

  return (
    <article className="reveal lift surface relative overflow-hidden rounded-2xl bg-fg-page p-6 md:p-7">
      <div className="absolute inset-0 z-0">
        <img
          src={EXPERIENCE_BACKGROUNDS[e.id]}
          alt=""
          aria-hidden="true"
          className="h-full w-full opacity-[0.11]"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, color-mix(in srgb, var(--color-bg-white) 34%, transparent), color-mix(in srgb, var(--color-bg-white) 82%, transparent))',
          }}
        />
      </div>

      <div
        className="relative z-10"
        style={{
          textShadow:
            '0 1px 0 color-mix(in srgb, var(--color-bg-white) 96%, transparent), 0 6px 18px color-mix(in srgb, var(--color-bg-white) 88%, transparent), 0 10px 28px color-mix(in srgb, var(--color-bg-white) 68%, transparent)',
        }}
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-trust">
              0{idx + 1} · {e.tag}
            </div>
            <div className="mt-2 text-[18px] font-bold leading-tight tracking-[-0.01em] text-fg md:text-[19px]">
              {t(e.org)}
            </div>
            <div className="mt-0.5 text-[13px] text-fg-sub">{e.role}</div>
          </div>
          <div className="shrink-0 text-right">
            <div className="whitespace-nowrap text-[12px] font-semibold text-fg">{e.period}</div>
          </div>
        </div>

        <h4 className="mt-3 text-[15.5px] font-bold leading-[1.45] text-fg md:text-[16px]">{t(e.title)}</h4>

        <ul className="mt-3 space-y-1.5">
          {e.bullets.map((b, j) => (
            <li
              key={j}
              className="bul text-[13.5px] leading-[1.65] text-fg-sub"
              dangerouslySetInnerHTML={{ __html: t(b) }}
            />
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {e.badges.map((badge) => (
            <Pill key={badge}>{badge}</Pill>
          ))}
        </div>

        {e.note && (
          <div className="mt-4 border-t border-dashed border-fg-line pt-3 text-[11.5px] italic text-fg-sub">
            {t(e.note)}
          </div>
        )}
      </div>
    </article>
  );
};

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="border-y border-fg-line bg-fg-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-24">
        <Headline
          eyebrow={t(COPY.sections.experience.eyebrow)}
          title={t(COPY.sections.experience.title)}
          sub={t(COPY.sections.experience.sub)}
        />

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {EXPERIENCES.map((e, i) => (
            <ExperienceCard key={e.id} e={e} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

window.ExperienceSection = ExperienceSection;
