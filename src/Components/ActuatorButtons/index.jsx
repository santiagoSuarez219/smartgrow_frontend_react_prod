import React, { useContext } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { WiDirectionUpRight } from "react-icons/wi";
import { WiDirectionDownRight } from "react-icons/wi";

import { SmartgrowContext } from "../../SmartgrowContext";

const ActuatorButtons = () => {
  const { mqttPublish } = useContext(SmartgrowContext);
  const context = {
    topic: "smartgrow/actuadores",
    qos: 0,
    payload: "Actuador1",
  };

  return (
    
    <div className="w-full flex mt-8 justify-between md:flex-col md:mt-6 md:mr-8 md:h-[]">
      <ButtonIcon
        text={"Entrada de agua"}
        icon={WiDirectionUpRight}
        onClick={() => {mqttPublish(context)}}
      />
      <ButtonIcon
        text={"Salida de agua"}
        icon={WiDirectionDownRight}
        onClick={() => {mqttPublish(context)}}
      />
    </div>
  );
};

export default ActuatorButtons;
