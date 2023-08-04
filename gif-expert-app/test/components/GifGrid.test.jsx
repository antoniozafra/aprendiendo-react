import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en el componentes GifGrid', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente ', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true 
        });
      
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando'));
        expect(screen.getByText(category));


    });

    test('Debe de mostar items cuando se cargan las imagenes mediante useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'example.png'
            },
            {
                id: '123',
                title: 'goku',
                url: 'example.png'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true 
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);


    });
    
    
  
});
