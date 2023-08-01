import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({target}) => {

        setInputValue(target.value);
    }

    const onSubmitForm =  (event) => {

        event.preventDefault();

        console.log(inputValue);
        
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
