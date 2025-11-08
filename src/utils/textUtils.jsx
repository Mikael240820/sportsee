/**
 * Parse le texte pour convertir les parties entourées de ** en éléments React <strong>
 * Exemple : "Bonjour **Thomas**" devient un tableau avec "Bonjour " et <strong>Thomas</strong>

 * @param {string} - Le texte à analyser
 * @returns Un tableau d'éléments React et de chaines
 */
export const parseBoldToElements = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};
