import React from 'react'

export default function ({prize, status}) {
  return (
    <>
    <img src={prize}/>
    <h2>{status}</h2>
    </>
  )
}
