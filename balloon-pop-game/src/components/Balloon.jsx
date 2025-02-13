import React from 'react'

export default function Balloon({ id, message, display, onClick }) {
  // console.log({id, message});
  console.log({onClick})
  const handleClick = () => {
    console.log("display: ", display);
    console.log("message: ", message);
    if(display === id){
      setDisplay(message)
      onClick();
    }
  }

  return (
    <div
    onClick={handleClick}
    style={{
            height: "100px", 
            width: "100px",
            borderRadius: "50%",
            border:"2px solid black"}}>
      <h3>{display}</h3>
    </div>
  )
}
