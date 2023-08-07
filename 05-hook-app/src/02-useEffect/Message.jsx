import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords,setCoords] = useState({x:0, y:0})


    useEffect(() => {

        const onMouseMove = ({x, y}) => {
            const coords = {x, y}
            setCoords(coords);
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    });


    return (
        <>
            <h1>Usuario ya Existe</h1>

            {JSON.stringify( coords)}

        </>
    )
}

export default Message
