import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook usefetchGifs', () => {

    test('Debe de regresar el estado incial', () => {

        const { result } = renderHook(() => useFetchGifs('Superman'));

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('Debe de retornar un arreglo de imagenes y isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('Superman'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {timeout: 2000}
        );

        const { images, isLoading } = result.current;

        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();


    });



});
