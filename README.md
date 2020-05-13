# lss-mqtt
Lightweight Security Scheme for MQTT


This project is proof of concept of work from 

`Lightweight Security Scheme for MQTT/MQTT-SN,
2019 Sixth International Conference on Internet of Things: Systems, Management and Security (IOTSMS)`

Usage example (Typescript/ES6+)
```typescript

import {LssMqtt} from 'lss-mqtt';

const lssMqttClient = new LssMqtt({ip: "<Your broker ip>", port: <your broker port>, key: "<your private key>"})

const exampleTopic = 'topic'
let counter = 0
setInterval(() => {
    lssMqttClient.api.publish(exampleTopic, `Counter: ${counter++}`);
}, 500);

lssMqttClient.api.subscribe(exampleTopic)

lssMqttClient.callback = (topic, message) => {
    if (topic === exampleTopic) console.log(message);
}
```
