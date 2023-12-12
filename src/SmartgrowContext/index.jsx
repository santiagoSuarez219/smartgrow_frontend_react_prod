import { createContext, useState, useEffect } from "react";
import { useMqtt } from "./useMqtt";

const SmartgrowContext = createContext();

function SmartgrowProvider({ children }) {
  const { client, message } = useMqtt("smartgrow");

  const [temperatura, setTemperatura] = useState(null);
  const [humedad, setHumedad] = useState(null);
  const [co2, setCo2] = useState(null);
  const [ppf, setPpf] = useState(null);
  const [ppfd, setPpfd] = useState(null);
  const [vpd, setVpd] = useState(null);
  const [temperaturaAgua, setTemperaturaAgua] = useState(null)
  const [ph, setPh] = useState(null) 
  const [ec, setEc] = useState(null) 
  const [nivelAgua, setNivelAgua] = useState(null) 

  const handleMqttMessage = (data) => {
    console.log(data);
    setTemperatura(data.temperatura);
    setHumedad(data.humedad);
    setCo2(data.co2);
    setPpf(data.PPF);
    setPpfd(data.PPFD);
    setVpd(data.VPD);
    setPh(data.PH);
    setEc(data.EC);
    setNivelAgua(data.nivelAgua);
    setTemperaturaAgua(data.temperaturaAgua);
  };

  useEffect(() => {
    if (message !== null) {
      handleMqttMessage(message);
    }
  },[message])

  return (
    <SmartgrowContext.Provider
      value={{
        temperatura,
        setTemperatura,
        humedad,
        setHumedad,
        co2,
        setCo2,
        ppf,
        setPpf,
        ppfd,
        setPpfd,
        vpd,
        setVpd,
        client,
        temperaturaAgua,
        setTemperaturaAgua,
        ph,
        setPh,
        ec,
        setEc,
        nivelAgua,
        setNivelAgua,
      }}
    >
      {children}
    </SmartgrowContext.Provider>
  );
}

export { SmartgrowContext, SmartgrowProvider };
