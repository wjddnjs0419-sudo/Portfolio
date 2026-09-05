const ContactSection = () => {
  const { t } = useLanguage();
  const availability = t({ ko: '즉시 근무 가능', en: 'Available immediately' });

  return (
    <section id="contact" className="border-t border-fg-line bg-fg-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
        <div className="closing-cta reveal">
          <div className="closing-cta-orbit closing-cta-orbit-a" />
          <div className="closing-cta-orbit closing-cta-orbit-b" />

          <div className="relative z-10 max-w-[760px]">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-trust md:text-[12px]">
              {t(COPY.sections.contact.eyebrow)}
            </div>
            <h2 className="mt-3 whitespace-pre-line text-[38px] font-extrabold leading-[1.08] tracking-[-0.035em] text-fg md:text-[54px]">
              {t(COPY.sections.contact.title)}
            </h2>
            <p
              className="mt-5 max-w-[610px] text-[15px] leading-[1.75] text-fg-sub md:text-[17px]"
              dangerouslySetInnerHTML={{ __html: t(COPY.sections.contact.sub) }}
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-trust px-5 text-[14px] font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-trustdark hover:shadow-lg"
              >
                <Icon name="mail" size={16} stroke={2} />
                {t({ ko: '이메일 보내기', en: 'Send an email' })}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-fg-line bg-fg-page px-5 text-[14px] font-semibold text-fg transition-all hover:-translate-y-0.5 hover:border-trust hover:text-trust"
              >
                <Icon name="linkedin" size={16} stroke={1.9} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="closing-status relative z-10">
            <div className="closing-status-label">{t({ ko: 'Open to opportunities', en: 'Open to opportunities' })}</div>
            <strong>{availability}</strong>
            <span>{t(PROFILE.roleFocus)}</span>
            <span>{t({ ko: 'Seoul, South Korea', en: 'Seoul, South Korea' })}</span>
          </div>
        </div>

        <div className="contact-row reveal">
          <a href={`mailto:${PROFILE.email}`}>
            <Icon name="mail" size={16} stroke={1.8} />
            <span><small>Email</small>{PROFILE.email}</span>
          </a>
          <a href={`tel:${PROFILE.phone}`}>
            <Icon name="phone" size={16} stroke={1.8} />
            <span><small>Phone</small>{PROFILE.phone}</span>
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size={16} stroke={1.8} />
            <span><small>LinkedIn</small>Jeongwon Kim</span>
          </a>
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
