const {
  sumArray,
  countWords,
  findMax,
  isDivisible,
} = require('./functions');

describe('sumArray', () => {
  test('debe retornar la suma de números positivos', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  test('debe retornar la suma de números negativos', () => {
    expect(sumArray([-1, -2, -3])).toBe(-6);
  });

  test('debe retornar 0 para arreglo vacío', () => {
    expect(sumArray([])).toBe(0);
  });

  test('debe incluir 0 en la suma correctamente', () => {
    expect(sumArray([0, 5, 10])).toBe(15);
  });
});

describe('countWords', () => {
  test('debe contar palabras en una cadena normal', () => {
    expect(countWords('Hola mundo esto es una prueba')).toBe(6);
  });

  test('debe ignorar espacios al inicio y al final', () => {
    expect(countWords('   Hola mundo   ')).toBe(2);
  });

  test('debe retornar 0 para cadena vacía', () => {
    expect(countWords('')).toBe(0);
  });

  test('debe ignorar espacios consecutivos entre palabras', () => {
    expect(countWords('Hola    mundo  prueba')).toBe(3);
  });
});

describe('findMax', () => {
  test('debe retornar el mayor número positivo', () => {
    expect(findMax([1, 8, 3, 6])).toBe(8);
  });

  test('debe retornar el mayor número negativo', () => {
    expect(findMax([-10, -3, -50, -1])).toBe(-1);
  });

  test('debe retornar null para arreglo vacío', () => {
    expect(findMax([])).toBeNull();
  });

  test('debe retornar el número cuando todos son iguales', () => {
    expect(findMax([4, 4, 4, 4])).toBe(4);
  });
});

describe('isDivisible', () => {
  test('debe retornar true si un número es divisible', () => {
    expect(isDivisible(10, 2)).toBe(true);
  });

  test('debe retornar false si un número no es divisible', () => {
    expect(isDivisible(10, 3)).toBe(false);
  });

  test('debe retornar mensaje si el divisor es 0', () => {
    expect(isDivisible(5, 0)).toBe('No se puede dividir entre cero');
  });

  test('debe funcionar con números negativos', () => {
    expect(isDivisible(-10, -2)).toBe(true);
    expect(isDivisible(-10, 3)).toBe(false);
  });
});
