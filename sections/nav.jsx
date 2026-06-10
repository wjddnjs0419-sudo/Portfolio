const Nav = () => {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);
  const menuLabel = open ? t(COPY.nav.closeMenu) : t(COPY.nav.openMenu);

  return (
    <header className="sticky top-0 z-30">
      <div className="glass border-b border-fg-line">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-8">
          <a href="#top" className="flex items-baseline" onClick={close}>
            <span className="text-[18px] font-extrabold tracking-tight text-fg">Jeongwon Kim</span>
          </a>

          <nav className="hidden items-center gap-7 text-[14px] text-fg-sub md:flex">
            {COPY.nav.links.map(({ href, label }) => (
              <a key={href} href={href} className="transition-colors hover:text-fg">
                {t(label)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle className="hidden md:inline-flex" />

            <a
              href={`mailto:${PROFILE.email}`}
              className="hidden h-9 items-center gap-1.5 rounded-md bg-trust px-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-trustdark md:inline-flex"
            >
              <Icon name="mail" size={14} stroke={2} /> {t(COPY.nav.contact)}
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-fg transition-colors hover:bg-fg-soft md:hidden"
              aria-label={menuLabel}
            >
              {open ? (
                <Icon name="close" size={18} stroke={2} />
              ) : (
                <Icon name="menu" size={18} stroke={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          'fixed inset-x-0 bottom-0 top-16 z-20 flex flex-col bg-white/95 px-0 backdrop-blur-[16px] transition-all duration-[220ms] ease-[cubic-bezier(0.2,0,0,1)] md:hidden ' +
          (open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0')
        }
      >
        <div className="border-b border-fg-line/50 px-6 pb-5 pt-6">
          <LanguageToggle className="flex" />
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-6 pb-6 pt-8">
          {COPY.nav.links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="flex h-14 items-center border-b border-fg-line/50 text-[22px] font-bold text-fg transition-colors hover:text-trust"
            >
              {t(label)}
            </a>
          ))}
        </nav>

        <div className="px-6 pb-10">
          <a
            href={`mailto:${PROFILE.email}`}
            onClick={close}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-trust text-[15px] font-semibold text-white transition-colors hover:bg-trustdark"
          >
            <Icon name="mail" size={16} stroke={2} /> {t(COPY.nav.contact)}
          </a>
        </div>
      </div>
    </header>
  );
};

window.Nav = Nav;
