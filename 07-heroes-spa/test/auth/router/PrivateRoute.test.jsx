import { render,screen } from "@testing-library/react";
import { PublicRoute } from "../../../src/router/PublicRoute";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";




describe('Pruebas en private Route', () => {
  
    test('Si no esta autenticado, debe de mostrar el "children"', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'Antonio'
            }
        };

        render( <AuthContext.Provider value={contextValue}>
                    <MemoryRouter initialEntries={['/marvel']}>
                        
                        <Routes>
                            <Route path="/login" element={
                                <PublicRoute>
                                    <h1>Ruta Publica</h1>
                                </PublicRoute>
                            }></Route>
                            <Route path="/marvel" element={<h1>Pagina Marvel</h1>}></Route>
                        </Routes>

                    </MemoryRouter>
                </AuthContext.Provider>);

                screen.debug();

                expect(screen.getByText('Pagina Marvel')).toBeTruthy();
                expect(localStorage.setItem).toHaveBeenCalledWidth();


    });

    test('Debe de navegar si esta autenticado', () => {
      
    })
    
    
});
