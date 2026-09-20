type CatalogToolbarProps = {
  action: string;
  colors: string[];
  selectedColor?: string;
  selectedSort: string;
  productCount: number;
};

export function CatalogToolbar({
  action,
  colors,
  selectedColor,
  selectedSort,
  productCount,
}: CatalogToolbarProps) {
  return (
    <div className="catalog-toolbar">
      <p aria-live="polite">
        {productCount} {productCount > 1 ? "pièces" : "pièce"}
      </p>

      <form action={action} method="get" className="catalog-filters">
        <div className="catalog-field">
          <label htmlFor="color">Coloris</label>
          <select id="color" name="color" defaultValue={selectedColor ?? ""}>
            <option value="">Tous les coloris</option>
            {colors.map((color) => (
              <option value={color} key={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className="catalog-field">
          <label htmlFor="sort">Trier par</label>
          <select id="sort" name="sort" defaultValue={selectedSort}>
            <option value="selection">Notre sélection</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="name">Nom</option>
          </select>
        </div>

        <button className="filter-submit" type="submit">
          Appliquer
        </button>
      </form>
    </div>
  );
}
