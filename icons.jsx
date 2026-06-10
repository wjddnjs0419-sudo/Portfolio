const Icon = ({ name, size = 20, stroke = 1.7, className = '' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <use href={`assets/ui-icons.svg#${name}`} />
  </svg>
);

window.Icon = Icon;
