import React from 'react'

export default function Balloon({ id, message }) {
  return (
    <div style={{
            height: "100px", 
            width: "100px",
            borderRadius: "50%",
            border:"2px solid black"}}>
      <h3>{id}</h3>
    </div>
  )
}
