import { useState, useContext } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { SmartgrowContext } from "../../SmartgrowContext";

const SystemStatus = () => {

  const classStatusGreen = "h-3 w-3 text-secondary md:h-5 md:w-5"
  const classStatusRed = "h-3 w-3 text-red-500 md:h-5 md:w-5"
  const classText = "ml-1 text-sm md:text-lg"
  
  const {
    statusRecirculation,
    statusWaterInlet,
    statusWaterOutlet,
    statusMqtt,
  } = useContext(SmartgrowContext);

  return (
    <div className="w-full flex justify-between md:my-3">
      <div className="flex items-center">
        {statusWaterInlet && (
          <AiFillCheckCircle className={classStatusGreen} />
        )}
        {!statusWaterInlet && (
          <AiFillCloseCircle className={classStatusRed} />
        )}
        <p className={classText}>Entrada de agua</p>
      </div>
      <div className="flex items-center">
        {statusWaterOutlet && (
          <AiFillCheckCircle className={classStatusGreen} />
        )}
        {!statusWaterOutlet && (
          <AiFillCloseCircle className={classStatusRed}/>
        )}
        <p className={classText}>Salida de agua</p>
      </div>
      <div className="flex items-center">
        {statusRecirculation && (
          <AiFillCheckCircle className={classStatusGreen} />
        )}
        {!statusRecirculation && (
          <AiFillCloseCircle className={classStatusRed}/>
        )}
        <p className={classText}>Recirculacion</p>
      </div>
      <div className="flex items-center">
        {statusMqtt && <AiFillCheckCircle className={classStatusGreen}/>}
        {!statusMqtt && <AiFillCloseCircle className={classStatusRed} />}
        <p className={classText}>MQTT</p>
      </div>
    </div>
  );
};

export default SystemStatus;
