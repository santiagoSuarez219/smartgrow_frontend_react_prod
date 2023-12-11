import React, { useState, useEffect } from "react";
import mqtt from "mqtt";

const useMqtt = () => {
  const [client, setClient] = useState(null);
  const [temperatura, setTemperatura] = useState(null);
  const [humedad, setHumedad] = useState(null);
  const [co2, setCo2] = useState(null);
  const [ppf, setPpf] = useState(null);
  const [ppfd, setPpfd] = useState(null);
  const [vpd, setVpd] = useState(null);

  useEffect(() => {
    const connectToMqttBroker = () => {
      const mqttBrokerUrl = "ws://localhost:8083/mqtt";
      const mqttClient = mqtt.connect(mqttBrokerUrl);

      mqttClient.on("connect", () => {
        console.log("Conectado al broker MQTT");
        mqttClient.subscribe("smartgrow");
      });

      mqttClient.on("message", (topic, message) => {
        if (topic === "smartgrow") {
          const data = JSON.parse(message.toString());
          setTemperatura(data.temperatura);
          setHumedad(data.humedad);
          setCo2(data.co2);
          setPpf(data.PPF);
          setPpfd(data.PPFD);
          setVpd(data.VPD);
        }
      });

      setClient(mqttClient);
    };

    if (!client) {
      connectToMqttBroker();
    }

    return () => {
      if (client) {
        client.end();
      }
    };
  }, [client]);

  return { temperatura, humedad, co2, ppf, ppfd, vpd };
};

export { useMqtt };
