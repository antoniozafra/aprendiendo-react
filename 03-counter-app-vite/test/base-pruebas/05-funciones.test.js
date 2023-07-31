import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe de retornar un objeto', () => {
        const testUser ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        expect(user).toStrictEqual(testUser);
        // expect(user).toBe(user);
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = "Antonio";
        const testUser = {
            uid: 'ABC567',
            username: name
        };

        const user = getUsuarioActivo("Antonio");

        expect(user).toStrictEqual(testUser);
        expect(testUser.username).toBe(name);

    });

    
    
  
})
