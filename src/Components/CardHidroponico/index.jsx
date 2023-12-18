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
    <div className="relative flex w-full h-1/2 flex-col p-2 shadow">
      <div className="h-1/7 px-2 flex justify-between items-center">
        <p className="font-bold text-lg">Hidroponico</p>
        <WiRaindrop className="text-blue-900 w-8 h-8" />
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
      <p className="absolute bottom-2 w-full flex justify-center items-center">Instituto Tecnologico Metropolitano</p>
    </div>
  );
};

export default CardHidroponico;
