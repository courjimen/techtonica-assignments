import React from 'react'

export default function Counter({label, count}) {
  return (
    <div>
        <h2>{label}</h2>
        <span>{count}</span>
    </div>
  )
}
