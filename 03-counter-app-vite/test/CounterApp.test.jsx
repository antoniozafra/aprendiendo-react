import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en el componente <CounterApp/>', () => {
    const value = 100;
    
    test('Debe de hacer match con el snapshot', () => {

        const {container} = render(<CounterApp value={value}/>);

        expect(container).toMatchSnapshot();
      
    });

    test('Debe de mostrar el valor inicial de 100', () => {

       render(<CounterApp value ={value} />);
       
       expect(screen.getByText(100)).toBeTruthy();
      
    });

    test('Debe de incrementar con el boton +1 ', () => {

        render(<CounterApp value ={value} />);

        fireEvent.click(screen.getByText('+1'))

        expect(screen.getByText(value + 1)).toBeTruthy();
    });

    
    test('Debe de decrementar con el boton +1 ', () => {

        render(<CounterApp value ={value} />);

        fireEvent.click(screen.getByText('-1'))

        expect(screen.getByText(value - 1)).toBeTruthy();
    });


    test('Debe de resetear el valor al hacer click en Reset', () => {

        render(<CounterApp value ={value} />);

        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}))


        expect(screen.getByText(value)).toBeTruthy();
    });
    
    
    
    
});
