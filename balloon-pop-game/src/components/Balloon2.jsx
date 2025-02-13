import React from 'react'

export default function Balloon2({ onClick, balloon}) {
  return (
    <div>
      <h1 onClick={onClick}>{balloon}</h1>
    </div>
  )
}
