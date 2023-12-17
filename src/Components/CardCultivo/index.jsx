import { useContext } from "react";
import { WiThermometer } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { MdCo2 } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { PiPlant } from "react-icons/pi";
import VariableSensor from "../VariableSensor";

import { SmartgrowContext } from "../../SmartgrowContext";

const CardCultivo = () => {
  const {
    temperatura,
    humedad,
    co2,
    ppf,
    ppfd,
    vpd,
  } = useContext(SmartgrowContext);
  return (
    <div className="flex w-full mt-8 flex-col p-2 shadow border-[1px] rounded md:mr-4 md:justify-between md:h-full">
      <div className="flex justify-between w-full">
        <p className="font-bold text-base md:text-xl">Cultivo</p>
        <PiPlant className="text-green-900 md:w-6 md:h-6" />
      </div>
      <VariableSensor
        parametro={"Temperatura"}
        valor={temperatura !== null ? temperatura : "Cargando..."}
        icon={WiThermometer}
        iconColor={"text-green-900"}
        unidades={"°C"}
      />
      <VariableSensor
        parametro={"Humedad"}
        valor={humedad !== null ? humedad : "Cargando..."}
        icon={WiRaindrop}
        iconColor={"text-blue-900"}
        unidades={"%"}
      />
      <VariableSensor
        parametro={"Dioxido de Carbono"}
        valor={co2 !== null ? co2 : "Cargando..."}
        icon={MdCo2}
        iconColor={"text-green-900"}
        unidades={"ppm"}
      />
      <VariableSensor
        parametro={"PPFD"}
        valor={ppfd !== null ? ppfd : "Cargando..."}
        icon={WiDaySunny}
        iconColor={"text-yellow-500"}
        unidades={"umol/m2"}
      />
      <VariableSensor
        parametro={"PPF"}
        valor={ppf !== null ? ppf : "Cargando..."}
        icon={WiDaySunny}
        iconColor={"text-yellow-500"}
        unidades={"umol"}
      />
      <VariableSensor
        parametro={"VPD"}
        valor={vpd !== null ? vpd : "Cargando..."}
        icon={WiHumidity}
        iconColor={"text-blue-500"}
        unidades={"%"}
      />
    </div>
  );
};

export default CardCultivo;
