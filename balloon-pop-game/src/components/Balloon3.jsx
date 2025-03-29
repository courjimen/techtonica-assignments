import React from 'react'

export default function Balloon3({ onClick, balloon}) {
    return (

        <div>
            <h1 onClick={onClick}>{balloon}</h1>
        </div>
    )
}
