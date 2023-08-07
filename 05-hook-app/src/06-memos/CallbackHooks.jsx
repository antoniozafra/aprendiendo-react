import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';


export const CallbackHooks = () => {

    const [counter, setCounter] = useState(10);


    const handdleIncrement = useCallback(
        () =>  {
            setCounter( (value) => value + 1)
        },[]
    );

    return (
    <>
        <h1>Use CallbackHook {counter}</h1> 
        <hr />

        <ShowIncrement increment={handdleIncrement}/>

    </>
  )
}
