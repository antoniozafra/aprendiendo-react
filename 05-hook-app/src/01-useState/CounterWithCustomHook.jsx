import { useState } from "react"
import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    

    const {counter} = useCounter();

    
    return (
    <>
        <h1>Countert with hook: {counter} </h1>
        <hr />


        <button className="btn btn-primary">+1</button>
        <button className="btn btn-primary">Reset</button>
        <button className="btn btn-primary">-1</button>

    </>
    )
}

export default CounterWithCustomHook
