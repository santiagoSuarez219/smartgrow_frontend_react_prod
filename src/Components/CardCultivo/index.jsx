import { WiThermometer } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { MdCo2 } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { PiPlant } from "react-icons/pi";
import VariableSensor from "../VariableSensor";

const CardCultivo = ({
  temperatura,
  humedad,
  co2,
  ppf,
  ppfd,
  vpd
}) => {
  return (
    <div className="flex flex-col p-2 shadow">
      <div className="flex justify-between">
        <p className="font-bold text-base">Cultivo</p>
        <PiPlant className="text-green-900" />
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
