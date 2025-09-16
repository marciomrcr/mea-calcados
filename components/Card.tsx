import Image from "next/image";
import Link from "next/link";

export type BadgeTone = "red" | "green" | "orange";

export interface CardProps {
  title: string;
  description?: string;
  subtitle?: string;
  meta?: string | string[];
  imageSrc: string;
  imageAlt?: string;
  price?: string | number;
  href?: string;
  badge?: { label: string; tone?: BadgeTone };
  className?: string;
}

const toneToBg: Record<BadgeTone, string> = {
  red: "text-[--color-red]",
  green: "text-[--color-green]",
  orange: "text-[--color-orange]",
};

export default function Card({
  title,
  description,
  subtitle,
  meta,
  imageSrc,
  imageAlt = title,
  price,
  href,
  badge,
  className = "",
}: CardProps) {
  const displayPrice =
    price === undefined
      ? undefined
      : typeof price === "number"
      ? `R$${price}`
      : price;
  const content = (
    <article
      className={`group h-[400px] flex flex-col rounded-xl bg-light-100 ring-1 ring-light-300 transition-colors hover:ring-dark-500 ${className}`}
    >
      <div className="relative h-[280px] w-full overflow-hidden rounded-t-xl bg-light-200 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`inline-block px-2 py-1 text-xs font-medium bg-black rounded ${
                toneToBg[badge.tone || "red"]
              }`}
            >
              {badge.label}
            </span>
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-1 flex items-baseline justify-between gap-3">
            <h3 className="text-heading-3 text-dark-900 line-clamp-2">
              {title}
            </h3>
            {displayPrice && (
              <span className="text-body-medium text-dark-900 flex-shrink-0">
                {displayPrice}
              </span>
            )}
          </div>
          {description && (
            <p className="text-body text-dark-700 line-clamp-2">
              {description}
            </p>
          )}
          {subtitle && (
            <p className="text-body text-dark-700 line-clamp-1">{subtitle}</p>
          )}
        </div>
        {meta && (
          <p className="mt-2 text-caption text-dark-700 line-clamp-1">
            {Array.isArray(meta) ? meta.join(" • ") : meta}
          </p>
        )}
      </div>
    </article>
  );

  return href ? (
    <Link
      href={href}
      aria-label={title}
      className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-500]"
    >
      {content}
    </Link>
  ) : (
    content
  );
}
