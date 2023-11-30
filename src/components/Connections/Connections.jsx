import React from "react";
import { useState, useEffect } from "react";
import ConnectionInfo from "./ConnectionInfo";
import { useInterval } from "../useInterval";
import ButtonIcon from "./ButtonIcon";
import reactimg from '../../assets/react.svg'

const Connections = () => {
  let [date, setDate] = useState(new Date());
  let [formatedDate, setFormatedDate] = useState("");

  const time = () => {
    setDate(new Date());
    setFormatedDate(formatTime(date));
  };

  useInterval(time, 100);

  return (
    <div className="my-2">
      <div className="my-1">
        <h4 className="w-full text-center font-medium">{formatedDate}</h4>
      </div>
      <div className="flex items-center justify-center">
        <ConnectionInfo sensor="Recirculacion" />
        <ConnectionInfo sensor="WebSocket" />
        <ConnectionInfo sensor="Base de datos" />
        <ConnectionInfo sensor="MQTT" />
      </div>
      <div className="flex">
        <ButtonIcon buttonText="Entrada de agua" ButtonIcon={reactimg}/>
        <ButtonIcon buttonText="Salida de agua" ButtonIcon={reactimg}/>
      </div>
    </div>
  );
};

const formatTime = (date) => {
  let dayOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  let monthString = [
    "En",
    "Feb",
    "Mzo",
    "Abr",
    "My",
    "Jun",
    "Jul",
    "Ag",
    "Set",
    "Oct",
    "Nov",
    "Dic",
  ];
  let hour = date.getHours();
  let minutes = date.getMinutes();

  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();

  let hourString = hour < 10 ? "0" + hour : hour;
  let minutesString = minutes < 10 ? "0" + minutes : minutes;

  let amPm = hour >= 12 ? "PM" : "AM";
  return `${hourString}:${minutesString} ${amPm} ${dayOfWeek[day]} ${monthString[month]}. ${day}, ${year}`;
};

export default Connections;
