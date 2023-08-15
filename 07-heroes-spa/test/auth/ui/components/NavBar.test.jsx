const { render, renderHook, screen, fireEvent } = require("@testing-library/react");
const { AuthContext } = require("../../../../src/auth/context/AuthContext");
const { MemoryRouter, useNavigate } = require("react-router-dom");
const { NavBar } = require("../../../../src/ui/components/NavBar");
const { Exception } = require("sass");

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));
    

describe('Pruebas en el componente Navbar', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Antonio'
        },
        logout: jest.fn()
    };

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el nombre del usuario ', () => {
        
        render(<AuthContext.Provider value={contextValue}>
                    <MemoryRouter>
                        <NavBar/>
                    </MemoryRouter>
                </AuthContext.Provider>);

    expect( screen.getByText('Antonio')).toBeTruthy();
    });

    test('Debe de llamar logot y navigate cuando se hace click', () => {

        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <NavBar/>
            </MemoryRouter>
        </AuthContext.Provider>);
      
         const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUsedNavigate).toHaveBeenCalledWith( "/login", {"replace": true});

    });
    
  
});
