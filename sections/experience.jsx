const FeaturedExperience = ({ experience }) => {
  const { t } = useLanguage();
  return (
    <article className="featured-experience reveal">
      <img src="assets/Paris 2024.jpeg" alt="Paris 2024 Korea House" />
      <div className="featured-experience-overlay" />
      <div className="featured-experience-content">
        <div className="featured-experience-topline"><span>Featured Experience</span><span>{experience.period}</span></div>
        <div className="featured-experience-main">
          <div>
            <div className="featured-experience-org">PARIS 2024</div>
            <h3>{t(experience.title)}</h3>
            <p>{t(experience.org)} · {experience.role}</p>
          </div>
          <div className="featured-experience-metrics">
            <div><strong>20+</strong><span>VIP / day</span></div>
            <div><strong>Global</strong><span>Operations</span></div>
            <div><strong>Korea House</strong><span>VIP Lounge</span></div>
          </div>
        </div>
      </div>
    </article>
  );
};

const SupportingExperience = ({ experience }) => {
  const { t } = useLanguage();
  return (
    <article className="supporting-experience supporting-experience-feature reveal">
      <div className="supporting-experience-media">
        <img src="assets/Sports Event.png" alt="HUFS Marathon" />
      </div>
      <div className="supporting-experience-body">
        <div className="supporting-experience-meta"><span>{experience.tag}</span><span>{experience.period}</span></div>
        <h4>HUFS Marathon</h4>
        <p className="supporting-experience-role">{experience.role}</p>
        <h5>{t(experience.title)}</h5>
        <p className="supporting-experience-summary" dangerouslySetInnerHTML={{ __html: t(experience.bullets[0]) }} />
        <div className="supporting-experience-kpis">
          <div><strong>150+</strong><span>{t({ ko: '기업 컨택', en: 'companies contacted' })}</span></div>
          <div><strong>5</strong><span>{t({ ko: '스폰서 확보', en: 'sponsors secured' })}</span></div>
          <div><strong>₩3M</strong><span>{t({ ko: '후원 규모', en: 'sponsorship value' })}</span></div>
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
    <section id="experience" className="border-y border-fg-line bg-fg-soft experience-section">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-24">
        <div className="experience-feature-row">
          <div className="experience-intro reveal">
            <div className="section-micro-title">{t({ ko: '경험 · FEATURED EXPERIENCE', en: 'EXPERIENCE · FEATURED EXPERIENCE' })}</div>
            <h2>{t({
              ko: '글로벌, 운영, 비즈니스의 맥락에서 문제를 구조화하고,\n실제로 해결해왔습니다.',
              en: 'Across global, operations, and business contexts,\nI structure problems and solve them in practice.',
            })}</h2>
            <p>{t({
              ko: '다양한 현장에서 사람, 기술, 운영을 연결하며 실질적인 변화를 만들어낸 경험들입니다.',
              en: 'Experiences connecting people, technology, and operations to create practical impact.',
            })}</p>
          </div>
          {featured && <FeaturedExperience experience={featured} />}
        </div>

        <div className="supporting-experience-wrap">
          {supporting.map((experience) => <SupportingExperience key={experience.id} experience={experience} />)}
        </div>
      </div>
    </section>
  );
};

window.ExperienceSection = ExperienceSection;
