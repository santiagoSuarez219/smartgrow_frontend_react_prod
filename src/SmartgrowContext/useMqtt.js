import { useState, useEffect } from "react";
import mqtt from "mqtt";

const useMqtt = (topic) => {
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState(null);
  const [connectStatus, setConnectStatus] = useState(false)

  const mqttBrokerUrl = "ws://localhost:8083/mqtt";

  const mqttConnect = () => {
    setConnectStatus('Connecting')
    setClient(mqtt.connect(mqttBrokerUrl))
  }

  useEffect(() => {
    if (client) {
      client.on('connect', () => {
        setConnectStatus(true)
        client.subscribe(topic)
        console.log('connection successful')
      })

      client.on('error', (err) => {
        console.error('Connection error: ', err)
        client.end()
        setConnectStatus(false)
      })

      client.on('reconnect', () => {
        setConnectStatus(false)
      })

      client.on('message', (topic, message) => {
        const data = { topic, message: message.toString() }
        setMessage(data)
        console.log(`received message: ${message} from topic: ${topic}`)
      })
    }
  }, [client])

  const mqttDisconnect = () => {
    if (client) {
      try {
        client.end(false, () => {
          setConnectStatus(false)
          console.log('disconnected successfully')
        })
      } catch (error) {
        console.log('disconnect error:', error)
      }
    }
  }

  return { message, connectStatus, mqttConnect };
};

export { useMqtt };
