import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({author, quote}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({with: 0, height:0})

    useLayoutEffect(() => {

        const {width, height } =  pRef.current.getBoundingClientRect();
        setBoxSize({
            width,
            height
        });



    },[quote]);


    return (
        <>
        <blockquote style={{display : 'flex'}} className='blockquote text-end'>
            <p ref={pRef} className='mb-1'>{quote}</p>
            <footer className='blockquote-footer'>{author}</footer>
        </blockquote>

        <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}

