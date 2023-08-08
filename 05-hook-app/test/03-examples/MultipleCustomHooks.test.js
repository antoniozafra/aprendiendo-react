import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks";

jest.mock('../../src/hooks');


describe('Pruebas en MultipleCustomHook', () => {


    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button', { name: "Next Quote" });
        expect(nextButton.disabled).toBeTruthy();


    });

    test('Debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Antonio', quote: 'Hola soy Antonio' }],
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);


    });

    test('Debe de llamar la funcion de incrmentar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Antonio', quote: 'Hola soy Antonio' }],
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: "Next Quote" });
        fireEvent.click(nextButton);

        screen.debug();

    });



});
