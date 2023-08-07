import React from 'react'
import {useFetch} from '../hooks/';

import { Quote, LoadingQuote } from '../03-examples';


export const Layout = () => {
    const { data, isLoading, hasError, getFetch } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');
    
    const {quote, author} = !!data && data[0];


    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                (isLoading)
                    ? (
                        <LoadingQuote/>
                    )
                    : (
                        <Quote quote={quote} author={author}/>                       
                    )
            }



            <button disabled={isLoading} className='btn btn-primary' onClick={getFetch}>Next Quote</button>


        </>
    )
}

