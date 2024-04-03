
import React from 'react'

export const SelectQuantity = ({limit,OnLimitChange}) => {
  
 
  return (
    <>
      <input type="range" className='range-limit' max={50} min={1} onChange={OnLimitChange}/>
        <p>cantidad de gifs: <span className='limit-count'>{limit}</span></p>
            
    </>
  )
}

