import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-aync-await', () => {
  
    test('debe de retornar la url del archivo ', async () => {

        const url= await getImagen();

        expect(typeof url).toBe("string");

        console.log(url);
    })
    
})
