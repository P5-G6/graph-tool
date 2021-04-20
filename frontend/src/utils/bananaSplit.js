/* NOTE
  origem: <String>,
  destino: <String>,
  peso: <Number>,
  direção: <Boolean>
*/
const bananaSplit = (value = '') => {
  const result = { valid: false, value: [], errors: [] };

  const values = value.split(' ');

  if (values.length >= 2) {
    const [
      origin = null,
      destiny = null,
      weight = 0,
      useDirection = 0,
    ] = values;

    if (origin && destiny) {
      result.value = [origin, destiny, weight, !!useDirection];
      result.valid = true;
    } else {
      result.errors.push('invalid input');
    }
  } else {
    result.errors.push('above the minimum');
  }

  return result;
};

export default bananaSplit;
