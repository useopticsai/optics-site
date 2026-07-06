import type { LucideIcon } from "lucide-react";

interface SocialIconLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  id?: string;
}

/**
 * Reusable styled social icon button with accessible tap targets and warm palette transitions.
 * Used across team cards and the footer.
 */
export default function SocialIconLink({ href, label, icon: Icon, id }: SocialIconLinkProps) {
  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-xl border border-line/60 bg-cream/60 text-forest transition-all duration-150 hover:bg-sand hover:border-line hover:text-charcoal hover:scale-105 focus:outline-none focus:ring-2 focus:ring-forest/30 shadow-warm-xs"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
