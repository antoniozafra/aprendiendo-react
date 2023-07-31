import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en el archivo 07-deses-arr.js', () => {
  
    test('Debe de retornar un string y un numero', () => {
        const testArray = retornaArreglo();

        const [letters, numbers] = testArray;

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(typeof testArray[0]).toBe('string');
        expect(typeof testArray[1]).toBe('number');
    })
    

});
