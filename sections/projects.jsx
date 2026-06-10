const ProjectCard = ({ p, idx }) => {
  const { t } = useLanguage();

  return (
    <article
      className={
        'reveal lift surface relative overflow-hidden rounded-2xl bg-fg-page p-7 ' +
        'grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-[180px_1fr] md:p-9'
      }
    >
      <aside className="md:border-r md:border-fg-line md:pr-6">
        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-trust">
          0{idx + 1} · {p.tag}
        </div>
        <div className="mt-3 text-[13px] font-semibold text-fg">{p.period}</div>
        <div className="mt-1 text-[12px] leading-snug text-fg-sub">{p.org}</div>
        <div className="mt-1 text-[12px] leading-snug text-fg-sub">{p.role}</div>

        <div className="mt-5 hidden flex-wrap gap-1.5 md:flex">
          {p.badges.slice(0, 4).map((badge) => (
            <Pill key={badge}>{badge}</Pill>
          ))}
        </div>
      </aside>

      <div>
        <h3 className="text-[22px] font-bold leading-[1.3] tracking-[-0.015em] text-fg md:text-[26px]">
          {t(p.title)}
        </h3>
        <p className="mt-3 text-[14px] italic leading-[1.6] text-trustdark md:text-[15px]">{t(p.headline)}</p>
        <p className="mt-3 text-[14px] leading-[1.7] text-fg-sub md:text-[15px]">{t(p.summary)}</p>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {p.metrics.map((m, i) => (
            <div key={i} className="rounded-lg border border-fg-line bg-fg-soft px-4 py-3">
              <div className="text-[18px] font-extrabold leading-tight tracking-tight text-trust md:text-[20px]">
                {m.v}
              </div>
              <div className="mt-0.5 text-[11px] text-fg-sub">{t(m.l)}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4">
          {p.sections.map((s, i) => (
            <div key={i} className="border-t border-fg-line pt-4">
              <div className="text-[13px] font-bold text-fg">{t(s.h)}</div>
              <ul className="mt-2 space-y-1.5">
                {s.body.map((b, j) => (
                  <li
                    key={j}
                    className="bul text-[13.5px] leading-[1.65] text-fg-sub"
                    dangerouslySetInnerHTML={{ __html: t(b) }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {p.media && p.media.length > 0 && <BrowserShowcase media={p.media} />}

        <div className="mt-6 flex flex-wrap gap-1.5 md:hidden">
          {p.badges.map((badge) => (
            <Pill key={badge}>{badge}</Pill>
          ))}
        </div>
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="bg-fg-page">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
        <Headline
          eyebrow={t(COPY.sections.projects.eyebrow)}
          title={t(COPY.sections.projects.title)}
          sub={t(COPY.sections.projects.sub)}
        />

        <div className="grid gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

window.ProjectsSection = ProjectsSection;
