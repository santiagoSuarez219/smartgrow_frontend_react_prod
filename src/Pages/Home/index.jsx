import React, { useState, useEffect } from "react";
import mqtt from "mqtt";
import Navbar from '../../Components/Navbar'
import Connections from '../../Components/Connections/Connections'
import LayoutCards from '../../Components/LayoutCards'
import CardCultivo from '../../Components/CardCultivo'

function Home() {
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
    <div>
       <Navbar/>
       <div>
         <Connections/>
       </div>
       <LayoutCards>
       <CardCultivo
          temperatura={temperatura}
          humedad={humedad}
          co2={co2}
          ppf={ppf}
          ppfd={ppfd}
          vpd={vpd}
        />
       </LayoutCards>
    </div>
  )
}

export default Home