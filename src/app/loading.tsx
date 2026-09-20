export default function Loading() {
  return (
    <main id="contenu-principal" className="loading-page" aria-busy="true">
      <p className="visually-hidden">Chargement de la page</p>
      <div className="loading-line" />
      <div className="loading-title" />
      <div className="loading-grid">
        <div />
        <div />
        <div />
      </div>
    </main>
  );
}
