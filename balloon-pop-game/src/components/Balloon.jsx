import React from 'react'

export default function Balloon({balloon, prize, status}) {
  return (
    <>
    <h1>{balloon}</h1>
    
    <img src={prize}/>

    <h3>{status}</h3>
    </>

  )
}
