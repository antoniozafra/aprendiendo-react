import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en  09-promesas.js', () => {

    test('getHeroesById async debe de retornar un heroe', () => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                // done();
            });


    })

})
