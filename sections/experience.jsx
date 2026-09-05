const FeaturedExperience = ({ experience }) => {
  const { t } = useLanguage();

  return (
    <article className="featured-experience reveal">
      <img src="assets/Paris 2024.jpeg" alt="Paris 2024 Korea House" />
      <div className="featured-experience-overlay" />
      <div className="featured-experience-content">
        <div className="featured-experience-topline">
          <span>Featured Experience</span>
          <span>{experience.period}</span>
        </div>

        <div className="featured-experience-main">
          <div>
            <div className="featured-experience-org">PARIS 2024</div>
            <h3>{t(experience.title)}</h3>
            <p>{t(experience.org)} · {experience.role}</p>
          </div>

          <div className="featured-experience-metrics">
            <div><strong>20+</strong><span>VIP / day</span></div>
            <div><strong>Korea House</strong><span>VIP Lounge</span></div>
            <div><strong>Global</strong><span>Operations</span></div>
          </div>
        </div>

        <div className="featured-experience-bullets">
          {experience.bullets.slice(0, 3).map((bullet, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: t(bullet) }} />
          ))}
        </div>
      </div>
    </article>
  );
};

const SupportingExperience = ({ experience, index }) => {
  const { t } = useLanguage();

  return (
    <article className="supporting-experience reveal">
      <div className="supporting-experience-index">0{index + 1}</div>
      <div className="supporting-experience-body">
        <div className="supporting-experience-meta">
          <span>{experience.tag}</span>
          <span>{experience.period}</span>
        </div>
        <h4>{t(experience.org)}</h4>
        <p className="supporting-experience-role">{experience.role}</p>
        <h5>{t(experience.title)}</h5>
        <p
          className="supporting-experience-summary"
          dangerouslySetInnerHTML={{ __html: t(experience.bullets[0]) }}
        />
        <div className="mt-4 flex flex-wrap gap-1.5">
          {experience.badges.slice(0, 3).map((badge) => (
            <Pill key={badge}>{badge}</Pill>
          ))}
        </div>
      </div>
    </article>
  );
};

const ExperienceSection = () => {
  const { t } = useLanguage();
  const featured = EXPERIENCES.find((experience) => experience.id === 'paris-2024');
  const supporting = EXPERIENCES.filter((experience) => experience.id === 'sports-events');

  return (
    <section id="experience" className="border-y border-fg-line bg-fg-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
        <Headline
          eyebrow={t(COPY.sections.experience.eyebrow)}
          title={t({
            ko: '글로벌 현장과 파트너십 경험, 직접 움직였습니다.',
            en: 'Hands-on experience in global operations and partnerships.',
          })}
          sub={t({
            ko: 'Paris 2024 현장 운영과 교내 마라톤 스폰서십처럼, 실제 이해관계자와 결과를 만든 경험만 담았습니다.',
            en: 'Focused on hands-on experiences that produced real outcomes with stakeholders, from Paris 2024 operations to marathon sponsorship.',
          })}
        />

        {featured && <FeaturedExperience experience={featured} />}

        {supporting.length > 0 && (
          <div className="supporting-experience-list mt-8 md:mt-10">
            {supporting.map((experience, index) => (
              <SupportingExperience key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

window.ExperienceSection = ExperienceSection;
