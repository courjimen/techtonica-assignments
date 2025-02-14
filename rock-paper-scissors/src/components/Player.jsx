import React from 'react'

export default function Player({name, score}) {
  return (
    <div className='player'>
       <h3 className='score'>{name} : {score}</h3>
          
    </div>
  )
}
