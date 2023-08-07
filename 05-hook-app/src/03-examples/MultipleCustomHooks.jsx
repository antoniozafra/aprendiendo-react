import React from 'react'
import useFetch from '../hooks/useFetch';


const MultipleCustomHooks = () => {
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');
    
    const {quote, author} = !!data && data[0];


    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                (isLoading)
                    ? (<div className='alert alert-info text-center'>
                        Cargando...
                    </div>)
                    : (
                        <blockquote className='blockquote text-end'>
                            <p className='mb-1'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>

                    )
            }

            <button className='btn btn-primary'>Next Quote</button>

        </>
    )
}

export default MultipleCustomHooks
