import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { userContext } from "../../src/context/UserContext";

describe('Pruebas en el componente Homepage', () => {
    const user = {
        id: 1,
        name: 'Antonio'
    };

    test('Debe de mostrar el componente sin el usuario', () => {
    
        render(
        <userContext.Provider value={{user:null}}>
            <HomePage/>
        </userContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toBe('null');

    });
    
    test('Debe de mostrar el componente con el usuario', () => {
    
        render(
        <userContext.Provider value={{user}}>
            <HomePage/>
        </userContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toEqual("{\"id\":1,\"name\":\"Antonio\"}");

    });
    
    
  
})
