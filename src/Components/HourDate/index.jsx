import { useEffect, useState } from "react";
import { useInterval } from './useInterval';

const HourDate = () => {
  const [date, setDate] = useState(new Date());
  const [dayWeek, setDayWeek] = useState(date.getDay());
  const [month, setMount] = useState(date.getMonth());
  const [day, setDay] = useState(date.getDate());
  const [year, setYear] = useState(date.getFullYear());
  const [formatedDate, setFormatedDate] = useState("");
  const [hour, setHour] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());

  const dayOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const monthString = [
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

  useEffect(() => {
    updateFormattedDate();
  }, [date]);

//   useInterval(() => {
//     setDate(new Date());
//   }, 100); // Actualiza cada segundo

  const updateFormattedDate = () => {
    let hourString = hour < 10 ? "0" + hour : hour;
    let minutesString = minutes < 10 ? "0" + minutes : minutes;
    let amPm = hour >= 12 ? "PM" : "AM";
    setFormatedDate(
      `${hourString}:${minutesString} ${amPm} ${dayOfWeek[dayWeek]} ${monthString[month]}. ${day}, ${year}`
    );
  };

  return (
    <div className="my-1">
      <h4 className="w-full text-center font-medium">{formatedDate}</h4>
    </div>
  );
};

export default HourDate;
