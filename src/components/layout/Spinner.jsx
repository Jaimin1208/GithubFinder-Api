import React from 'react'
import spinner from "./assets/spinner2.gif"

function Spinner() {
    return (
      <div className='mt-20 '>
            
          <img src={spinner} width={180} className='text-center mx-auto' alt="loading..."/>
      </div>
  )
}

export default Spinner