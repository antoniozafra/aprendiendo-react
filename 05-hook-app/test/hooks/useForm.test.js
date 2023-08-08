import { renderHook } from "@testing-library/react";
import useForm from "../../src/hooks/useForm";

describe('Pruebas en el hook useForm', () => {

    const initialForm = {
        name: 'Antonio',
        email: 'boro@gmai.com'
    };
  
    test('Debe de regresar el objeto por defecto', () => {
      
        // const {result} = renderHook( useForm(initialForm) );
        
    });
    
});