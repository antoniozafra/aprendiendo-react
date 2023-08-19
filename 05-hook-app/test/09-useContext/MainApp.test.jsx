import { getByText, render, screen } from "@testing-library/react";
import MainApp from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el componente MainApp', () => {

    test('Debe de mostar el HomePage', () => {

        render(
        <MemoryRouter>
            <MainApp/>
        </MemoryRouter>
        );
        
        expect(screen.getByText('Home Page')).toBeTruthy();
        
    });
    
    test('Debe de mostrar el Login Page', () => { 
        
        render(
        <MemoryRouter initialEntries={['/login']}>
            <MainApp/>
        </MemoryRouter>
        );

        expect(screen.getByText('Login Page')).toBeTruthy();


     });

});
