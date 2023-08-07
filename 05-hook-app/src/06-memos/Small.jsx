import React, { memo } from 'react'


export const Small = React.memo(( {value}) => {

    console.log("Me volvi a dibujar :(");

  return (
    <>
        <small>{value}</small>
    </>
  )
})