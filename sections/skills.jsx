const SKILL_ICONS = ['layers', 'sparkles', 'database', 'image', 'briefcase'];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-fg-page">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-24">
        <Headline
          eyebrow={t(COPY.sections.skills.eyebrow)}
          title={t(COPY.sections.skills.title)}
          sub={t(COPY.sections.skills.sub)}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {SKILLS.map((s, i) => (
              <div key={s.group} className="reveal lift surface rounded-xl p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-trustsoft text-trustdark">
                    <Icon name={SKILL_ICONS[i]} size={14} stroke={2} />
                  </span>
                  <div className="text-[14px] font-bold text-fg">{s.group}</div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal glass rounded-2xl p-6 md:p-7">
            <div className="flex items-center gap-2">
              <Icon name="globe" size={16} stroke={1.8} className="text-trust" />
              <div className="text-[14px] font-bold text-fg">{t(COPY.sections.skills.languagesTitle)}</div>
            </div>

            <div className="mt-5 space-y-5">
              {LANGUAGES.map((l) => (
                <div key={l.lang.en}>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[16px] font-bold text-fg">{t(l.lang)}</span>
                      <span className="ml-2 text-[12px] text-fg-sub">{t(l.sub)}</span>
                    </div>
                    <span className="tabular-nums text-[12px] text-fg-sub">{Math.round(l.level * 100)}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full border border-fg-line bg-fg-soft">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-trust to-trustdark"
                      style={{ width: `${l.level * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-fg-line pt-5">
              <div className="mb-3 flex items-center gap-2">
                <Icon name="medal" size={16} stroke={1.8} className="text-trust" />
                <div className="text-[14px] font-bold text-fg">{t(COPY.sections.skills.highlightsTitle)}</div>
              </div>
              <ul className="space-y-2">
                {COPY.sections.skills.highlights.map((item, index) => (
                  <li
                    key={index}
                    className="bul text-[13.5px] leading-[1.65] text-fg-sub"
                    dangerouslySetInnerHTML={{ __html: t(item) }}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.SkillsSection = SkillsSection;
