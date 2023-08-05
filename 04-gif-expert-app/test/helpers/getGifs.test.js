import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en el componente getGifs', () => {

    test('Debe de retornar un arreglo de gifts', async () => {
        
        const gifs = await getGifs('superman');
        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });

    });
    
  
})
