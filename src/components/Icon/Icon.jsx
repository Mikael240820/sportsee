import "./Icon.scss";

/**
 * @param {string} image - Chemin complet vers l'image (requis)
 * @param {string} alt - Texte alternatif pour l'image (optionnel)
 * @param {string} type - Ex: "square" pour une icône carrée (optionnel)
 * @param {string} color - Ex: "red|blue|yellow|pink" pour la couleur (optionnel)
 * @param {string} size - Ex: "xs|sm" pour la taille de l'icône (optionnel)
 * @returns {JSX.Element}
 */
function Icon({ image, alt = "", type = "", color = "", size = "" }) {
  const className = ['icon', type && `icon--${type}`, color && `icon--${color}`, size && `icon--${size}`]
  return (
    <img src={image} alt={alt} className={className.filter(Boolean).join(' ')} />
  );
}

export default Icon;
