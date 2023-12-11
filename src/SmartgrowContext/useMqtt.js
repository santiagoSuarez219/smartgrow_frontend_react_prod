import { useState, useEffect } from "react";
import mqtt from "mqtt";

const useMqtt = (topic) => {
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const connectToMqttBroker = () => {
      const mqttBrokerUrl = "ws://localhost:8083/mqtt";
      const mqttClient = mqtt.connect(mqttBrokerUrl);

      mqttClient.on("connect", () => {
        console.log("Conectado al broker MQTT");
        mqttClient.subscribe(topic);
      });

      mqttClient.on("message", (topic, message) => {
        const data = JSON.parse(message.toString());
        setMessage(data);
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

  return { client, message };
};

export { useMqtt };
