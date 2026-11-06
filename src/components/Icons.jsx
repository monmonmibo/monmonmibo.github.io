function IconBase({ children, size = 20, className, ...props }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return <IconBase {...props}><path d="M5 12h14M13 6l6 6-6 6" /></IconBase>;
}

export function ArrowDownIcon(props) {
  return <IconBase {...props}><path d="M12 5v14M6 13l6 6 6-6" /></IconBase>;
}

export function CalendarIcon(props) {
  return <IconBase {...props}><path d="M8 2v4M16 2v4M3 10h18" /><rect x="3" y="4" width="18" height="18" rx="3" /></IconBase>;
}

export function CalculatorIcon(props) {
  return <IconBase {...props}><rect x="4" y="2" width="16" height="20" rx="3" /><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h4" /></IconBase>;
}

export function ChevronLeftIcon(props) {
  return <IconBase {...props}><path d="m15 18-6-6 6-6" /></IconBase>;
}

export function ChevronRightIcon(props) {
  return <IconBase {...props}><path d="m9 18 6-6-6-6" /></IconBase>;
}

export function HomeIcon(props) {
  return <IconBase {...props}><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></IconBase>;
}

export function HotelIcon(props) {
  return <IconBase {...props}><path d="M3 21V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v15M15 10h4a2 2 0 0 1 2 2v9M7 8h2M7 12h2M7 16h2M11 8h.01M11 12h.01M11 16h.01M2 21h20" /></IconBase>;
}

export function MapIcon(props) {
  return <IconBase {...props}><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15" /></IconBase>;
}

export function MapPinIcon(props) {
  return <IconBase {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></IconBase>;
}

export function SuitcaseIcon(props) {
  return <IconBase {...props}><rect x="3" y="7" width="18" height="13" rx="3" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 12v3M16 12v3M3 13h18" /></IconBase>;
}
