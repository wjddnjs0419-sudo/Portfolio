const DATE_NAVI_LINKS = {
  appStore: 'https://apps.apple.com/kr/app/date-navi/id6794355525',
  github: 'https://github.com/wjddnjs0419-sudo/Date-navi',
};

const getProjectCasePoints = (project) => {
  const firstSection = project.sections?.[0];
  const lastSection = project.sections?.[project.sections.length - 1];
  return [
    {
      label: { ko: 'Problem', en: 'Problem' },
      body: firstSection?.body?.[0],
    },
    {
      label: { ko: 'Solution', en: 'Solution' },
      body: firstSection?.body?.[1] || firstSection?.body?.[0],
    },
    {
      label: { ko: 'Impact', en: 'Impact' },
      body: lastSection?.body?.[lastSection.body.length - 1],
    },
  ].filter((item) => item.body);
};

const ProjectVisualCollage = ({ project }) => {
  const { t } = useLanguage();

  if (project.id === 'date-navi') {
    const home = project.media.find((item) => item.src.includes('home.png'));
    const video = project.media.find((item) => item.type === 'video');
    const result = project.media.find((item) => item.src.includes('recommendation-result'));

    return (
      <div className="project-visual project-visual-date">
        <div className="device-phone device-phone-left">
          <div className="device-island" />
          <img src={home?.src} alt={home ? t(home.label) : 'Date-navi home'} />
        </div>

        <div className="device-phone device-phone-center">
          <div className="device-island" />
          <div
            className="device-demo-badge"
            style={{
              position: 'absolute',
              zIndex: 6,
              top: '24px',
              left: '50%',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              borderRadius: '999px',
              padding: '5px 8px',
              background: 'rgba(255,255,255,.9)',
              boxShadow: '0 4px 14px rgba(15,23,42,.12)',
              fontSize: '9px',
              fontWeight: 750,
              color: 'var(--color-text-main)',
            }}
          >
            <span className="project-live-dot" />
            {t({ ko: '앱 시연 영상', en: 'App demo' })}
          </div>
          {video && (
            <video autoPlay muted loop controls playsInline preload="metadata" aria-label={t(video.label)}>
              <source src={video.src} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="device-phone device-phone-right">
          <div className="device-island" />
          <img src={result?.src} alt={result ? t(result.label) : 'Date-navi recommendation result'} />
        </div>

        <div className="project-visual-caption">
          <span className="project-live-dot" />
          {t({ ko: '실제 App Store 화면과 직접 촬영한 코스 생성 시연', en: 'Real App Store screens and an actual course-generation demo' })}
        </div>
      </div>
    );
  }

  const liveHomepage = project.media.find((item) => item.type === 'iframe');
  const admin = project.media.find((item) => item.src?.includes('admin'));
  const automation = project.media.find((item) => item.src?.includes('automation'));
  const figma = project.media.find((item) => item.src?.includes('figma'));

  return (
    <div className="project-visual project-visual-web">
      <div className="browser-frame browser-frame-main">
        <div className="browser-bar">
          <span /><span /><span />
          <em>ncf-aroundx.com</em>
        </div>
        {liveHomepage ? (
          <iframe
            src={liveHomepage.src}
            title={t(liveHomepage.label)}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ width: '100%', height: 'calc(100% - 28px)', border: 0, display: 'block', background: 'white' }}
          />
        ) : (
          <img src={admin?.src} alt={admin ? t(admin.label) : 'Next Challenge admin'} />
        )}
        <div
          style={{
            position: 'absolute',
            zIndex: 4,
            right: '10px',
            bottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            borderRadius: '999px',
            padding: '5px 8px',
            background: 'rgba(255,255,255,.92)',
            boxShadow: '0 4px 14px rgba(15,23,42,.12)',
            fontSize: '8px',
            fontWeight: 700,
            color: 'var(--color-text-main)',
          }}
        >
          <span className="project-live-dot" />
          {t({ ko: 'LIVE 메인 페이지', en: 'LIVE homepage' })}
        </div>
      </div>

      <div className="browser-frame browser-frame-mini browser-frame-automation">
        <div className="browser-bar compact"><span /><span /><span /></div>
        <img src={automation?.src} alt={automation ? t(automation.label) : 'Automation'} />
      </div>

      <div className="browser-frame browser-frame-mini browser-frame-figma">
        <div className="browser-bar compact"><span /><span /><span /></div>
        <img src={figma?.src} alt={figma ? t(figma.label) : 'Figma UI'} />
      </div>

      <div className="project-visual-caption">
        <span className="project-live-dot" />
        {t({ ko: '실제 홈페이지 임베딩 · 자동화 · Figma 운영 화면', en: 'Live homepage embed · automation · Figma operations screens' })}
      </div>
    </div>
  );
};

const ProjectDetails = ({ project }) => {
  const { t } = useLanguage();
  return (
    <details className="project-details">
      <summary>
        <span>{t({ ko: '상세 과정 보기', en: 'View detailed process' })}</span>
        <Icon name="arrow-right" size={15} stroke={1.8} />
      </summary>
      <div className="project-details-grid">
        {project.sections.map((section, index) => (
          <div key={index}>
            <strong>{t(section.h)}</strong>
            <ul>
              {section.body.map((body, bodyIndex) => (
                <li key={bodyIndex} dangerouslySetInnerHTML={{ __html: t(body) }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
};

const ProjectEditorial = ({ project, index }) => {
  const { t } = useLanguage();
  const points = getProjectCasePoints(project);
  const isDateNavi = project.id === 'date-navi';

  return (
    <article className={`project-editorial reveal ${isDateNavi ? 'project-editorial-date' : 'project-editorial-web'}`}>
      <div className="project-editorial-copy">
        <div className="project-kicker">
          <span>0{index + 1}</span>
          <span>{project.tag}</span>
        </div>
        <h3>{t(project.title)}</h3>
        <p className="project-headline">{t(project.headline)}</p>

        <div className="project-case-points">
          {points.map((point) => (
            <div key={point.label.en}>
              <span>{t(point.label)}</span>
              <p dangerouslySetInnerHTML={{ __html: t(point.body) }} />
            </div>
          ))}
        </div>

        <div className="project-metrics">
          {project.metrics.map((metric) => (
            <div key={metric.v}>
              <strong>{metric.v}</strong>
              <span>{t(metric.l)}</span>
            </div>
          ))}
        </div>

        <div className="project-actions">
          {isDateNavi ? (
            <>
              <a href={DATE_NAVI_LINKS.appStore} target="_blank" rel="noopener noreferrer">
                App Store <Icon name="arrow-right" size={14} stroke={1.9} />
              </a>
              <a href={DATE_NAVI_LINKS.github} target="_blank" rel="noopener noreferrer" className="secondary">
                GitHub <Icon name="arrow-right" size={14} stroke={1.9} />
              </a>
            </>
          ) : (
            project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Live Website <Icon name="arrow-right" size={14} stroke={1.9} />
              </a>
            )
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.badges.slice(0, 5).map((badge) => (
            <Pill key={badge}>{badge}</Pill>
          ))}
        </div>
      </div>

      <ProjectVisualCollage project={project} />
      <ProjectDetails project={project} />
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
          title={t({ ko: '아이디어를 넘어, 실제 서비스로.', en: 'Beyond ideas, into real products.' })}
          sub={t(COPY.sections.projects.sub)}
        />

        <div className="space-y-14 md:space-y-20">
          {PROJECTS.map((project, index) => (
            <ProjectEditorial key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ProjectsSection, ProjectVisualCollage });
