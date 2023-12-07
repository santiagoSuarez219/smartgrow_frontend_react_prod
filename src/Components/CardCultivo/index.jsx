import React, { useState, useEffect } from "react";
import { WiThermometer } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { MdCo2 } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { PiPlant } from "react-icons/pi";
import mqtt from "mqtt";
import VariableSensor from "../VariableSensor";

const CardCultivo = () => {
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
        console.log(message.toString());
        if (topic === "smartgrow") {
          setTemperatura(JSON.parse(message.toString()).temperatura);
          setHumedad(JSON.parse(message.toString()).humedad);
          setCo2(JSON.parse(message.toString()).co2);
          setPpf(JSON.parse(message.toString()).PPF);
          setPpfd(JSON.parse(message.toString()).PPFD);
          setVpd(JSON.parse(message.toString()).VPD);
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
  }, []);

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
