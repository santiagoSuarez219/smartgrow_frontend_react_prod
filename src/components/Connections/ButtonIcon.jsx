import React, { useState } from "react";

const ButtonIcon = (props) => {
  const baseclass = "flex max-w-[369px] justify-between w-full p-1 m-2 rounded items-center"
  let [buttonClass, setButtonClass] = useState(baseclass+" bg-red-700");
  let [state,setState] = useState(false)

  const handleClick = () => {
    setState(!state)
    if(state){
      setButtonClass(`${baseclass} bg-primary`)
    }else{
      setButtonClass(`${baseclass} bg-red-700`)
    }
  };

  return (
    <button className={buttonClass} onClick={handleClick}>
      <h3 className="text-xs font-medium m-1">{props.buttonText}</h3>
      <img src={props.ButtonIcon} className="w-6" alt="" />
    </button>
  );
};

export default ButtonIcon;
