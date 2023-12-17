import { useContext } from "react";
import { WiThermometer } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { PiPlant } from "react-icons/pi";
import VariableSensor from "../VariableSensor";
import { WiLightning } from "react-icons/wi";
import { WiFlood } from "react-icons/wi";

import { SmartgrowContext } from "../../SmartgrowContext";

const CardHidroponico = () => {
  const { temperaturaAgua, ph, ec, nivelAgua } = useContext(SmartgrowContext);
  return (
    <div className="flex w-full mt-8 flex-col p-2 shadow border-[1px] rounded">
      <div className="flex justify-between w-full">
        <p className="font-bold text-base md:text-xl">Hidroponico</p>
        <WiRaindrop className="text-blue-900 w-8 h-8 " />
      </div>
      <VariableSensor
        parametro={"Temperatura del agua"}
        valor={temperaturaAgua !== null ? temperaturaAgua : "Cargando..."}
        icon={WiThermometer}
        iconColor={"text-green-900"}
        unidades={"°C"}
      />
      <VariableSensor
        parametro={"PH"}
        valor={ph !== null ? ph : "Cargando..."}
        icon={PiPlant}
        iconColor={"text-green-900"}
        unidades={""}
      />
      <VariableSensor
        parametro={"Conductividad Electrica"}
        valor={ec !== null ? ec : "Cargando..."}
        icon={WiLightning}
        iconColor={"text-yellow-500"}
        unidades={"mS/cm"}
      />
      <VariableSensor
        parametro={"Nivel de agua"}
        valor={nivelAgua !== null ? nivelAgua : "Cargando..."}
        icon={WiFlood}
        iconColor={"text-blue-900"}
        unidades={"cm"}
      />
    </div>
  );
};

export default CardHidroponico;
