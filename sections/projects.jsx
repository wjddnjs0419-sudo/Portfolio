const DATE_NAVI_LINKS = {
  appStore: 'https://apps.apple.com/kr/app/date-navi/id6794355525',
  github: 'https://github.com/wjddnjs0419-sudo/Date-navi',
};

const getProjectCasePoints = (project) => {
  const firstSection = project.sections?.[0];
  const lastSection = project.sections?.[project.sections.length - 1];
  return [
    { label: { ko: 'Problem', en: 'Problem' }, body: firstSection?.body?.[0] },
    { label: { ko: 'Solution', en: 'Solution' }, body: firstSection?.body?.[1] || firstSection?.body?.[0] },
    { label: { ko: 'Impact', en: 'Impact' }, body: lastSection?.body?.[lastSection.body.length - 1] },
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
        <div className="device-phone device-phone-left"><div className="device-island" /><img src={home?.src} alt={home ? t(home.label) : 'Date-navi home'} /></div>
        <div className="device-phone device-phone-center">
          <div className="device-island" />
          <div className="device-demo-badge"><span className="project-live-dot" />{t({ ko: '앱 시연 영상', en: 'App demo' })}</div>
          {video && (
            <video controls playsInline preload="metadata" poster="assets/date-navi/place-search.png" aria-label={t(video.label)}>
              <source src={video.src} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="device-phone device-phone-right"><div className="device-island" /><img src={result?.src} alt={result ? t(result.label) : 'Date-navi result'} /></div>
        <div className="project-orbit-caption project-orbit-caption-date">Better Dates<br />Brighter Days</div>
      </div>
    );
  }

  const liveHomepage = project.media.find((item) => item.type === 'iframe');
  const automation = project.media.find((item) => item.src?.includes('automation'));
  const figma = project.media.find((item) => item.src?.includes('figma'));

  return (
    <div className="project-visual project-visual-web">
      <div className="project-laptop">
        <div className="laptop-screen">
          <div className="browser-bar"><span /><span /><span /><em>ncf-aroundx.com</em></div>
          {liveHomepage && (
            <iframe src={liveHomepage.src} title={t(liveHomepage.label)} loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
          )}
          <div className="live-homepage-badge"><span className="project-live-dot" />{t({ ko: 'LIVE 메인 페이지', en: 'LIVE homepage' })}</div>
        </div>
        <div className="laptop-base" />
      </div>
      <div className="browser-frame browser-frame-mini browser-frame-automation">
        <div className="browser-bar compact"><span /><span /><span /></div>
        <img src={automation?.src} alt={automation ? t(automation.label) : 'Automation'} />
      </div>
      <div className="browser-frame browser-frame-mini browser-frame-figma">
        <div className="browser-bar compact"><span /><span /><span /></div>
        <img src={figma?.src} alt={figma ? t(figma.label) : 'Figma UI'} />
      </div>
      <div className="project-orbit-caption project-orbit-caption-web">Empowering Startups<br />for a Brighter Tomorrow</div>
    </div>
  );
};

const ProjectDetails = ({ project }) => {
  const { t } = useLanguage();
  return (
    <details className="project-details">
      <summary><span>{t({ ko: '프로젝트 자세히 보기', en: 'View project details' })}</span><Icon name="arrow-right" size={15} stroke={1.8} /></summary>
      <div className="project-details-grid">
        {project.sections.map((section, index) => (
          <div key={index}>
            <strong>{t(section.h)}</strong>
            <ul>{section.body.map((body, bodyIndex) => <li key={bodyIndex} dangerouslySetInnerHTML={{ __html: t(body) }} />)}</ul>
          </div>
        ))}
      </div>
    </details>
  );
};

const ProjectCanvas = ({ project, index }) => {
  const { t } = useLanguage();
  const points = getProjectCasePoints(project);
  const isDateNavi = project.id === 'date-navi';
  const projectName = isDateNavi ? 'Date-navi' : 'Next Challenge';
  const subline = isDateNavi
    ? t({ ko: '데이트 계획의 반복 검색을 하나의 AI 추천 흐름으로.', en: 'Turn repeated date planning searches into one AI recommendation flow.' })
    : t({ ko: '100개 스타트업 프로그램을 하나의 디지털 운영 시스템으로.', en: 'Turn operations for 100 startups into one digital system.' });

  return (
    <article className={`project-canvas reveal ${isDateNavi ? 'project-canvas-date' : 'project-canvas-web'}`}>
      <div className="project-editorial-copy">
        <div className="project-kicker"><span>0{index + 1}</span><span>{project.tag}</span></div>
        <h3 className="project-name">{projectName}</h3>
        <p className="project-subline">{subline}</p>
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
          {project.metrics.map((metric) => <div key={metric.v}><strong>{metric.v}</strong><span>{t(metric.l)}</span></div>)}
        </div>

        <div className="project-badges">
          {(project.badges || []).slice(0, 5).map((badge) => <span key={badge}>{badge}</span>)}
        </div>

        <div className="project-actions">
          {isDateNavi ? (
            <>
              <a href={DATE_NAVI_LINKS.appStore} target="_blank" rel="noopener noreferrer">App Store <Icon name="arrow-right" size={14} stroke={1.9} /></a>
              <a href={DATE_NAVI_LINKS.github} target="_blank" rel="noopener noreferrer" className="secondary">GitHub <Icon name="arrow-right" size={14} stroke={1.9} /></a>
            </>
          ) : project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">Live Website <Icon name="arrow-right" size={14} stroke={1.9} /></a>
          )}
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
    <section id="work" className="bg-fg-page projects-section">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-24">
        <div className="projects-intro reveal">
          <div>
            <div className="section-micro-title">{t({ ko: '주요 프로젝트 · PRODUCT IN PRACTICE', en: 'SELECTED WORK · PRODUCT IN PRACTICE' })}</div>
            <h2>{t({ ko: '아이디어를 넘어,\n실제 서비스로.', en: 'Beyond ideas,\ninto real products.' })}</h2>
          </div>
          <p>{t({
            ko: '사용자의 문제를 제품과 운영 시스템으로 전환하여, 더 나은 경험을 만드는 프로젝트입니다.',
            en: 'Projects where user problems became products and operating systems that create better experiences.',
          })}</p>
        </div>
        <div className="project-stack">
          {PROJECTS.map((project, index) => <ProjectCanvas key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ProjectsSection, ProjectVisualCollage });
