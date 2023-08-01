import React, { useState } from 'react'


const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {

        setInputValue(target.value);
    }

    const onSubmitForm =  (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        setCategories( categories =>  [inputValue, ...categories] );                                           
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmitForm}>
        <input 
            onChange={onInputChange}
            type="text"
            placeholder='Buscar Gifs'
            value={inputValue} 
        />

        <button>Buscar</button>
      
    </form>
  )
}

export default AddCategory
