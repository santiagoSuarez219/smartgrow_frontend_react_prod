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

  const handleMqttMessage = (data) => {
    console.log(data);
    setTemperatura(data.temperatura);
    setHumedad(data.humedad);
    setCo2(data.co2);
    setPpf(data.PPF);
    setPpfd(data.PPFD);
    setVpd(data.VPD);
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
      }}
    >
      {children}
    </SmartgrowContext.Provider>
  );
}

export { SmartgrowContext, SmartgrowProvider };
