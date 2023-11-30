import React, { useState } from 'react'

const ButtonIcon= (props) => {

  let [buttonClass,setButtonClass] = useState("");

let handleClick = () => {
 console
  
}

  return (
    <button className={buttonClass} onClick={handleClick()}>
      <h3>{props.buttonText}</h3>
      <img src={props.ButtonIcon} alt="" />
    </button>
  )
}

export default ButtonIcon
