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
            <h2>{t({ ko: '사업과 기술이 서비스로 만나는 자리에서.', en: 'Where business and technology become real services.' })}</h2>
            <p>{t({ ko: '문제를 발견하고 직접 움직이는 사람을 찾고 있다면 연락 주세요. 보통 24시간 이내 회신드립니다.', en: 'If you are looking for someone who finds problems and moves them forward, get in touch. I usually reply within 24 hours.' })}</p>
            <div className="closing-cta-actions">
              <a href={`mailto:${PROFILE.email}`} className="hero-btn hero-btn-primary"><Icon name="mail" size={16} stroke={2} />{t({ ko: '이메일 보내기', en: 'Send an email' })}</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-secondary"><Icon name="linkedin" size={16} stroke={1.9} />LinkedIn</a>
            </div>
          </div>
          <div className="closing-status">
            <div className="closing-status-label">Open to opportunities</div>
            <strong>{availability}</strong>
            <span>{t(PROFILE.roleFocus)}</span>
            <span>Seoul, South Korea</span>
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
