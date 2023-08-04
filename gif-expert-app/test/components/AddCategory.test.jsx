import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en el componente AddCategory', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: {value: 'Saitama'}});

        expect(input.value).toBe('Saitama');

    });

    test('Debe de llamar OnNewCategory si el input tiene un valor ', () => {
      
        const inputValue = 'Boro';

        render(<AddCategory onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}});

        fireEvent.submit(form);

        expect(input.value).toBe('');


    });
    

});
