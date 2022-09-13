const { INCREMENTO, DECREMENTO, ODD_INCREMENT } = require("../action-types");

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá.
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = () => {
  return { type: INCREMENTO };
};

const decremento = () => {
  return { type: DECREMENTO };
};
const odd_increment = () => {
  return { type: ODD_INCREMENT };
};

module.exports = {
  incremento,
  decremento,
  odd_increment,
};
