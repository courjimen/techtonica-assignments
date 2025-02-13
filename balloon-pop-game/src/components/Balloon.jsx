import React from 'react'

export default function Balloon({ balloon, onClick }) {
  return (
    <div>
      <h1 onClick={onClick}>{balloon}</h1>
    </div>
  )
}
