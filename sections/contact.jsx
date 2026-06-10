const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="border-t border-fg-line bg-fg-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
        <div className="reveal glass grid items-center gap-10 rounded-2xl p-8 md:grid-cols-[1.3fr_1fr] md:p-12">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-trust">{t(COPY.sections.contact.eyebrow)}</div>
            <h2 className="mt-2 whitespace-pre-line text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-fg md:text-[44px]">
              {t(COPY.sections.contact.title)}
            </h2>
            <p
              className="mt-4 max-w-[560px] text-[15px] leading-[1.7] text-fg-sub"
              dangerouslySetInnerHTML={{ __html: t(COPY.sections.contact.sub) }}
            />
            <div className="mt-6 flex items-center gap-3">
              <a href={`mailto:${PROFILE.email}`} aria-label={t(COPY.sections.contact.emailAria)} className="icon-btn">
                <Icon name="mail" size={18} stroke={1.8} />
              </a>
              <a href={`tel:${PROFILE.phone}`} aria-label={t(COPY.sections.contact.phoneAria)} className="icon-btn">
                <Icon name="phone" size={18} stroke={1.8} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(COPY.sections.contact.linkedinAria)}
                className="icon-btn"
              >
                <Icon name="linkedin" size={18} stroke={1.8} />
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-fg-line bg-fg-page p-6">
            <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-trust">{t(COPY.sections.contact.statusLabel)}</div>
            <div className="mt-3">
              <span className="text-[15px] font-bold text-fg">{t(COPY.sections.contact.statusValue)}</span>
            </div>
            <div className="mt-2 text-[13px] text-fg-sub">
              {t(COPY.sections.contact.availability)} <b className="text-fg">{t(PROFILE.status)}</b>
            </div>

            <div className="mt-5 space-y-3 border-t border-fg-line pt-5">
              <div className="flex items-center gap-2 text-[13px] text-fg-sub">
                <Icon name="globe" size={14} stroke={1.8} /> {t(PROFILE.location)}
              </div>
              <div className="flex items-center gap-2 text-[13px] text-fg-sub">
                <Icon name="briefcase" size={14} stroke={1.8} /> {t(PROFILE.roleFocus)}
              </div>
              <div className="flex items-center gap-2 text-[13px] text-fg-sub">
                <Icon name="sparkles" size={14} stroke={1.8} /> {t(PROFILE.strengths)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-fg-line">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-6 py-6 text-[12px] text-fg-sub md:px-8">
          <span>{t(COPY.sections.contact.footerPrimary)}</span>
          <span className="opacity-70">{t(COPY.sections.contact.footerSecondary)}</span>
        </div>
      </div>
    </section>
  );
};

window.ContactSection = ContactSection;
