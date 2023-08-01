import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en el componente <FirstApp/>', () => {

    // test('Debe de hacer match con el snapshot ', () => {

    //     const title = "Hola, soy Antonio";
    //     const {container} = render(<FirstApp title={title} />);

    //     expect(container).toMatchSnapshot();

    // });

    test('Debe de mostar el titulo en h1', () => {

        const title = "Hola, soy Antonio";
        const {container,getByText, getByTestId} = render(<FirstApp title={title} />);
      
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {

        const title = "Hola, soy Antonio";
        const subtitle = "No hay subtitulo";
        const {getByText} = render(<FirstApp title={title} subtitle={subtitle} />);
      

        expect(getByText(subtitle)).toBeTruthy();
      
    })
    

    
    


});
