import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en el componente <FirstApp/>', () => {
    const title = "Hola, soy Antonio";
    const subtitle = "No hay subtitulo";

    test('Debe de hacer match cpon snapshot', () => {

        const { container } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();

    });

    test('Debe d emostrar el mensaje "Hola, soy Antonio"', () => {

        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();

    });


    test('Debe de mostrar el titulo en h1', () => {

        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {

        render(<FirstApp title={title} subtitle={subtitle} />);
        expect(screen.getAllByText(subtitle).length).toBe(2);

      
    });
    






});
