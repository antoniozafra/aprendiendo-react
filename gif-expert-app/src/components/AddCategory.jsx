import PropTypes from 'prop-types';
import React, { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {

        setInputValue(target.value);
    }

    const onSubmitForm =  (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // setCategories( categories =>  [inputValue, ...categories] );                                           
        onNewCategory(inputValue.trim());
        
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


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}

