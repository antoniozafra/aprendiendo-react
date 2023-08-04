import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";
describe('Pruebas en el componentes GifItem', () => {
    const title = "Titulo de ejemplo";
    const url = "https://www.example.com";

    test('Debe de hacer match con el snapshot', () => {

        const {container} =  render(<GifItem title={title} url={url}/>);
      
        expect(container).toMatchSnapshot();
    });
    
  
})
