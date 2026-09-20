import Image from "next/image";
import { Breadcrumbs } from "@/components/catalog/breadcrumbs";

type Breadcrumb = {
  label: string;
  href?: string;
};

type ContentHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumbs: Breadcrumb[];
};

export function ContentHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbs,
}: ContentHeroProps) {
  return (
    <section className="content-hero">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
      />
      <div className="content-hero-overlay" aria-hidden="true" />
      <div className="content-hero-inner">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
