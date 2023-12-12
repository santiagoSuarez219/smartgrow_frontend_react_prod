import React, { useState } from "react";

const ButtonIcon = ({text, icon: Icon}) => {
  return (
    <button className="bg-quintenary w-1/2 p-2 flex justify-between rounded items-center shadow mx-4">
      <p className="text-base font-medium m-1">{text}</p>
      <Icon className="w-8 h-8"/>
    </button>
  );
};

export default ButtonIcon;
