import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../../src/heroes/pages/SearchPage";

describe('Pruebas en el componente SeachPage', () => {
  

    test('Debe de mostrarse correctamente ocn valores por defecto', () => {

        
        render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        );

        screen.debug();
    });
    
});
