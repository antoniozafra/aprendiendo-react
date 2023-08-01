import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en el componente <FirstApp/>', () => {

    test('Debe de hacer match con el snapshot ', () => {

        const title = "Hola, soy Antonio";
        const {container} = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();

    });

    test('Debe de mostar el titulo en h1', () => {

        const title = "Hola, soy Antonio";
        const {container,getByText} = render(<FirstApp title={title} />);
      
        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
    
    });
    


});
