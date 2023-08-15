import { render,screen } from "@testing-library/react";
import { PublicRoute } from "../../../src/router/PublicRoute";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";




describe('Pruebas en public Route', () => {
  
    test('Si no esta autenticado, debe de mostrar el "children"', () => {

        const contextValue = {
            logged: false,
        };

        render( <AuthContext.Provider value={contextValue}>
                    <MemoryRouter initialEntries={['/login']}>
                        

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

                expect(screen.getByText('Ruta Publica')).toBeTruthy();


    });

    test('Debe de navegar si esta autenticado', () => {
      
    })
    
    
});
