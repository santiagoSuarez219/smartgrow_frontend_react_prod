import React from "react";
import { useState, useEffect } from "react";
import ConnectionInfo from "./ConnectionInfo";
// import { useInterval } from "../HourDate/useInterval";
// import ButtonIcon from "../ButtonIcon/ButtonIcon";
import ControlHidroponico from "./ControlHidroponico";

const Connections = () => {
  const [conectionEntradaAgua, setConectionEntr] = useState(false)
  // let [date, setDate] = useState(new Date());
  // let [formatedDate, setFormatedDate] = useState("");

  // const time = () => {
  //   setDate(new Date());
  //   setFormatedDate(formatTime(date));
  // };

  // useInterval(time, 100);

  return (
    <div className="my-2">
      {/* <div className="my-1">
        <h4 className="w-full text-center font-medium">{formatedDate}</h4>
      </div> */}
      <div className="flex items-center justify-center">
        <ConnectionInfo sensor="Recirculacion" />
        <ConnectionInfo sensor="WebSocket" />
        <ConnectionInfo sensor="Base de datos" />
        <ConnectionInfo sensor="MQTT" />
      </div>
      <div className="hidden my-2 bg-gray-200 w-[98%] h-0.5 mx-2 rounded-full md:block"></div>
      <div className="flex">
        {/* <ButtonIcon buttonText="Entrada de agua" />
        <ButtonIcon buttonText="Salida de agua" /> */}
      </div>
      <ControlHidroponico/>
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
  let numberDay = date.getDate()
  let month = date.getMonth();
  let year = date.getFullYear();

  let hourString = hour < 10 ? "0" + hour : hour;
  let minutesString = minutes < 10 ? "0" + minutes : minutes;
  let amPm = hour >= 12 ? "PM" : "AM";
  return `${hourString}:${minutesString} ${amPm} ${dayOfWeek[day]} ${monthString[month]}. ${numberDay}, ${year}`;
};

export default Connections;
