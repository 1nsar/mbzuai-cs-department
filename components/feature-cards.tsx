"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  // Small eyebrow label shown above the title
  eyebrow?: string;
  linkText: string;
  linkHref: string;
}

const FeatureCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
  eyebrow,
  linkText,
  linkHref,
}: FeatureCardProps) => {
  return (
    <article className="group bg-white rounded-md border border-gray-200 overflow-hidden flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1 bg-white">
        {eyebrow && (
          <p className="text-[13px] font-semibold tracking-wide text-black mb-2">
            {eyebrow}
          </p>
        )}
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black leading-tight">
          {title}
        </h3>
        <p className="text-black text-base leading-relaxed flex-grow mb-4">
          {description}
        </p>
        <Link
          href={linkHref}
          className="text-blue-600 hover:underline font-semibold self-start inline-flex items-center gap-1"
        >
          {linkText}
          <span aria-hidden>›</span>
        </Link>
      </div>
    </article>
  );
};

interface FeatureCardsProps {
  cards: FeatureCardProps[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const FeatureCards = ({
  cards,
  title,
  subtitle,
  className,
}: FeatureCardsProps) => {
  return (
    <section
      className={cn("bg-gray-50 py-16 px-4 sm:px-6 lg:px-8", className)}
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-black max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
