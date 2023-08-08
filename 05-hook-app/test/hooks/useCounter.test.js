
import {act, fireEvent, renderHook} from '@testing-library/react'
import { useCounter } from "../../src/hooks/useCounter";
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

describe('Pruebas en el hook useCounter', () => {
  
    test('Debe de retornar los valores por defecto del componente', () => {
    
     const {result} =  renderHook(() => useCounter()); 


     const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('Debe de generar el counter con el valor de 100', () => {
      
        const {result} = renderHook(() => useCounter(100)); 

        const {counter} = result.current;

        expect(counter).toBe(100);
    });


    
    test('Debe de incrementar el contador', () => {
      
        const {result} = renderHook( () => useCounter() );
        const {counter, increment} = result.current;

        //Llamamos al 'act' para ejecutar la accion
        act(() => {
            increment();
        });

        //Llamamos al valor actualizado del counter
        expect(result.current.counter).toBe(11);

    });


    test('Debe de decrementar el contador', () => {
      
        const {result} = renderHook( () => useCounter() );
        const {counter, decrement} = result.current;

        //Llamamos al 'act' para ejecutar la accion
        act(() => {
            decrement();
        });

        //Llamamos al valor actualizado del counter
        expect(result.current.counter).toBe(9);

    });

    test('Debe de resetear el contador', () => {
      
        const {result} = renderHook( () => useCounter() );
        const {counter, reset, increment} = result.current;

        //Llamamos al 'act' para ejecutar la accion
        act(() => {
            increment();
            reset();
        });

        //Llamamos al valor actualizado del counter
        expect(result.current.counter).toBe(10);

    });
    
    
    

})
