# lss-mqtt
Lightweight Security Scheme for MQTT

Usage example (Typescript/ES6+)
```typescript

import {LssMqtt} from 'lss-mqtt';

const lssMqttClient = new LssMqtt({ip: "<Your broker ip>", port: <your broker port>, key: "<your private key>"})

const topic = 'topic'
let counter = 0
setInterval(() => {
    lssMqttClient.api.publish('test', `Counter: ${counter++}`);
}, 500);

lssMqttClient.api.subscribe('test')

lssMqttClient.callback = (topic, message) => {
    if (topic === 'test') console.log(message);
}
```
