const { render, screen } = require("@testing-library/react");
const { TodoApp } = require("../../src/08-useReducer/TodoApp");
const { useTodos } = require("../../src/hooks/useTodos");

jest.mock('../../src/hooks/useTodos');


describe('Pruebas en el componente TodoApp', () => {

    useTodos.mockReturnValue({

    });

    test('Debe de mostrar el componente correctamente', () => { 
        render(<TodoApp/>);
        expect(screen.getByText)
     });


});
