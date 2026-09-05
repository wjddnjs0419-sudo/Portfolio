const ContactSection = () => {
  const { t } = useLanguage();
  const availability = t({ ko: '즉시 근무 가능', en: 'Available immediately' });

  return (
    <section id="contact" className="border-t border-fg-line bg-fg-soft contact-section">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20">
        <div className="closing-cta reveal">
          <img className="closing-cta-photo" src="assets/Paris 2024.jpeg" alt="Paris 2024" />
          <div className="closing-cta-photo-overlay" />

          <div className="closing-cta-copy">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-trust">{t(COPY.sections.contact.eyebrow)}</div>
            <h2>{t({ ko: '사업과 기술이\n서비스로 만나는 자리에서.', en: 'Where business and technology\nbecome real services.' })}</h2>
            <p>{t({ ko: '더 나은 세상을 만드는 프로젝트를 함께하고 싶습니다. 새로운 기회에 언제든지 편하게 연락 주세요.', en: 'I want to build projects that make things better. Feel free to reach out about new opportunities.' })}</p>
            <div className="closing-cta-actions">
              <a href={`mailto:${PROFILE.email}`} className="hero-btn hero-btn-primary"><Icon name="mail" size={16} stroke={2} />{t({ ko: '이메일 보내기', en: 'Send an email' })}</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-secondary"><Icon name="linkedin" size={16} stroke={1.9} />LinkedIn</a>
            </div>
          </div>

          <div className="closing-contact-column">
            <div className="closing-contact-details">
              <a href={`mailto:${PROFILE.email}`}>
                <Icon name="mail" size={17} stroke={1.9} />
                <span><small>Email</small><strong>{PROFILE.email}</strong></span>
              </a>
              <a href={`tel:${PROFILE.phone.replace(/-/g, '')}`}>
                <Icon name="phone" size={17} stroke={1.9} />
                <span><small>Phone</small><strong>{PROFILE.phone}</strong></span>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" size={17} stroke={1.9} />
                <span><small>LinkedIn</small><strong>Jeongwon Kim</strong></span>
              </a>
            </div>

            <div className="closing-status">
              <div className="closing-status-label">Open to opportunities</div>
              <strong>{availability}</strong>
              <span>{t(PROFILE.roleFocus)}</span>
              <span>Seoul, South Korea</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-fg-line">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-6 py-6 text-[12px] text-fg-sub md:px-8">
          <span>{t(COPY.sections.contact.footerPrimary)}</span>
          <span className="opacity-70">Business · Product · AI · Global</span>
        </div>
      </div>
    </section>
  );
};

window.ContactSection = ContactSection;
