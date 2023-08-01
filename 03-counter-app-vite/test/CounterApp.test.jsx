import { render, screen } from "@testing-library/react";
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
    
    
    
});
