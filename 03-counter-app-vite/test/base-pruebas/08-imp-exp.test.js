import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en el archivo 08-imp-exp.js', () => {
  
    test('getHeroeById debe de retornar un heroe por id ', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        
        // console.log(heroe);

        expect(heroe).toStrictEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe de retornar undefined si el heroe no existe ', () => {

        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
        expect(heroe).toBeFalsy();
    });

    //getheroesbyowner

    test('getHeroesByOwner(DC), debe tener una longitud de 3, y debe mostrar exactamente los mismos que el array ', () => {
        const owner = "DC";
        const heroes = getHeroesByOwner(owner);
        
        const dcHeroes = [   {
            id:1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }];


        expect(heroes.length).toBe(3);

        expect(heroes).toStrictEqual(dcHeroes);


    });
    test('getHeroesByOwner(Marvel) debe de tener una longitud de 2 ', () => {
        const owner = "Marvel";

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

    });
    
    
});
