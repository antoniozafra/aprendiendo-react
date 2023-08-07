import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
  
    const setFocus = () => {
        inputRef.current.select();
    }
  
    return (
    
    <>

    <h1>Focus Screen</h1>
    <hr />


    <input ref={inputRef} className='form-control' type="text"  placeholder='Ingrese su nombre'/>      
    <input  className='form-control' type="text"  placeholder='Ingrese su nombre'/>      
    <input className='form-control' type="text"  placeholder='Ingrese su nombre'/>      
    <input className='form-control'  type="text"  placeholder='Ingrese su nombre'/>      
   
    <button className='btn btn-secondary mt-2' onClick={setFocus}>Set Focus</button>
    </>
  )
}

