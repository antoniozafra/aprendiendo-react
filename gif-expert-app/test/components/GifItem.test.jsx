import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";
describe('Pruebas en el componentes GifItem', () => {
    const title = "Titulo de ejemplo";
    const url = "https://www.example.com/";

    test('Debe de hacer match con el snapshot', () => {

        const {container} =  render(<GifItem title={title} url={url}/>);
      
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la img con url y alt indicado', () => {

       render(<GifItem title={title} url={url}/>);

        expect(screen.getByRole('img').alt).toBe(title) ;
        expect(screen.getByRole('img').src).toBe(url) ;

    });
    
  
    test('Debe de mostrar el titulo en el componente', () => {

        render(<GifItem title={title} url={url}/>);

        expect(screen.getByText(title)).toBeTruthy();

      
    })
    
  
})
