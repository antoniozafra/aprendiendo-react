import { types } from "../../../src/auth/types/types";

describe('Pruebas en types.js', () => {

    test('Debe de regresar los types correctos ', () => {
      
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });
        
    });
    

});
