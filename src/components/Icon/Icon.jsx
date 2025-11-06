import "./Icon.scss";

/**
 * @param {string} image - Chemin complet vers l'image (requis)
 * @param {string} alt - Texte alternatif pour l'image (optionnel)
 * @param {string} type - Ex: "square" pour une icône carrée (optionnel)
 * @returns {JSX.Element}
 */
function Icon({ image, alt = "", type = "" }) {
  return (
    <img src={image} alt={alt} className={`icon ${type ? `icon--${type}` : ""}`} />
  );
}

export default Icon;
