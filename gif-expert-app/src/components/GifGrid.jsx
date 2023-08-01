import React, {  useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {

    const [counter, setCounter] = useState(10);

    useEffect( () => {
        getGifs(category);
        return
    }, [] );


  return (
    <>
        <h3>{category}</h3>

        <p>{counter}</p>
        <button onClick={() => setCounter(counter+1)}>+1</button>
    </>
  )
}

export default GifGrid
