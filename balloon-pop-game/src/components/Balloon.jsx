import React from 'react'

export default function Balloon({ id, message }) {
  const [display, setDisplay] = React.useState(id);
  console.log({id, message});

  const handleClick = () => {
    console.log("display: ", display);
    console.log("message: ", message);
    // if(display === id){
    //   setDisplay(message);
    // }
  }

// .addEventListener('click')

  return (
    <div
    onClick={handleClick}
    style={{
            height: "100px", 
            width: "100px",
            borderRadius: "50%",
            border:"2px solid black"}}>
      <h3>{id}</h3>
    </div>
  )
}
