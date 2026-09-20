import Image from "next/image";
import Link from "next/link";

const universes = [
  {
    title: "L'art du costume",
    description: "Des lignes franches, une construction souple et un tombé précis.",
    href: "/collections/costumes",
    image: "/media/costume.svg",
    alt: "Composition abstraite évoquant un costume sombre structuré",
  },
  {
    title: "Le vestiaire du soir",
    description: "La profondeur du noir révélée par la lumière et le mouvement.",
    href: "/collections/soiree",
    image: "/media/soir.svg",
    alt: "Composition abstraite noire et ivoire évoquant une tenue de soirée",
  },
  {
    title: "Les essentiels",
    description: "Une garde-robe quotidienne où la matière guide la silhouette.",
    href: "/collections/essentiels",
    image: "/media/essentiels.svg",
    alt: "Composition textile abstraite dans des tons sable et pierre",
  },
];

const signatures = [
  {
    number: "01",
    title: "La coupe",
    text: "Une silhouette dessinée avec netteté, libérée de toute rigidité.",
  },
  {
    number: "02",
    title: "La matière",
    text: "Des étoffes choisies pour leur main, leur profondeur et leur mouvement.",
  },
  {
    number: "03",
    title: "Le geste",
    text: "La précision de l'atelier au service d'une élégance naturelle.",
  },
];

export default function Home() {
  return (
    <main id="contenu-principal">
      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="/media/hero.svg"
          alt="Silhouette masculine abstraite dans un décor architectural parisien"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Collection Automne — Hiver</p>
          <h1 id="hero-title">L&apos;allure<br />en mouvement</h1>
          <p className="hero-description">
            Une silhouette parisienne, précise sans être figée, pensée pour
            accompagner chaque instant.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/collections">
              Découvrir la collection
            </Link>
            <Link className="text-link text-link-light" href="/savoir-faire">
              Entrer dans l&apos;atelier
            </Link>
          </div>
        </div>
        <p className="hero-caption">Paris — Collection 2026</p>
      </section>

      <section className="manifesto section-shell" aria-labelledby="manifesto-title">
        <p className="eyebrow">Maison parisienne depuis 1962</p>
        <h2 id="manifesto-title">
          L&apos;élégance ne se proclame pas.<br />
          Elle se révèle dans le mouvement.
        </h2>
        <p className="manifesto-copy">
          Smalto imagine un vestiaire masculin où la maîtrise de la coupe
          rencontre une certaine idée de la liberté. Chaque pièce recherche cet
          équilibre rare entre présence et discrétion.
        </p>
        <Link className="text-link" href="/maison">
          Découvrir la Maison
        </Link>
      </section>

      <section className="universes-section" aria-labelledby="universes-title">
        <div className="section-heading section-shell">
          <div>
            <p className="eyebrow">Le vestiaire</p>
            <h2 id="universes-title">Trois expressions de l&apos;allure</h2>
          </div>
          <Link className="text-link" href="/collections">
            Voir toute la collection
          </Link>
        </div>

        <div className="universe-grid">
          {universes.map((universe, index) => (
            <article className={`universe-card universe-card-${index + 1}`} key={universe.title}>
              <Link href={universe.href} className="universe-image-link">
                <div className="universe-image-frame">
                  <Image
                    src={universe.image}
                    alt={universe.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                  />
                </div>
                <div className="universe-content">
                  <p className="eyebrow">0{index + 1}</p>
                  <h3>{universe.title}</h3>
                  <p>{universe.description}</p>
                  <span className="text-link" aria-hidden="true">
                    Explorer
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="atelier-story" aria-labelledby="atelier-title">
        <div className="atelier-visual">
          <Image
            src="/media/atelier.svg"
            alt="Composition abstraite évoquant les lignes d'un patron de couture"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
        <div className="atelier-content">
          <p className="eyebrow">Dans les ateliers</p>
          <h2 id="atelier-title">La précision<br />comme signature</h2>
          <p>
            Tout commence par l&apos;observation du corps et du mouvement. Les lignes
            sont tracées, corrigées puis équilibrées jusqu&apos;à atteindre une
            évidence : celle d&apos;un vêtement qui accompagne sans contraindre.
          </p>
          <Link className="button button-dark" href="/savoir-faire">
            Découvrir le savoir-faire
          </Link>
        </div>
      </section>

      <section className="signatures section-shell" aria-labelledby="signatures-title">
        <div className="signatures-introduction">
          <p className="eyebrow">Les signatures Smalto</p>
          <h2 id="signatures-title">Une construction<br />de l&apos;essentiel</h2>
        </div>
        <ol className="signature-list">
          {signatures.map((signature) => (
            <li key={signature.number}>
              <span className="signature-number" aria-hidden="true">
                {signature.number}
              </span>
              <div>
                <h3>{signature.title}</h3>
                <p>{signature.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="journal-highlight" aria-labelledby="journal-title">
        <Image
          src="/media/paris.svg"
          alt="Interprétation graphique d'une façade parisienne à la tombée du jour"
          fill
          sizes="100vw"
        />
        <div className="journal-overlay" aria-hidden="true" />
        <div className="journal-content">
          <p className="eyebrow">Le journal de la Maison</p>
          <h2 id="journal-title">Paris,<br />ligne de conduite</h2>
          <p>
            Une promenade entre architecture, lumière et mouvement, aux sources
            du vocabulaire Smalto.
          </p>
          <Link className="button button-light" href="/journal">
            Lire l&apos;histoire
          </Link>
        </div>
      </section>

      <section className="services-strip" aria-label="Services de la Maison">
        <ul>
          <li>
            <span>Livraison offerte</span>
            <p>En France métropolitaine</p>
          </li>
          <li>
            <span>Retours facilités</span>
            <p>Sous 30 jours</p>
          </li>
          <li>
            <span>Conseil personnalisé</span>
            <p>En boutique et à distance</p>
          </li>
          <li>
            <span>Emballage signature</span>
            <p>Préparé avec attention</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
