import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en el componentes GifGrid', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente ', () => {
      
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando'));
        expect(screen.getByText(category));


    });

    test('Debe de mostar items cuando se cargan las imagenes mediante useFetchGifs', () => {
      
    });
    
    
  
});
