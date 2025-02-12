import React from 'react'

export default function Counter({label, count}) {
  return (
    <div>
        <span>{label} </span> 
        <span> {count}</span>
    </div>
  )
}
