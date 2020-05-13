import {Coder} from "./coder";
import mqtt from 'mqtt';
import {MqttClient} from "mqtt/types/lib/client";

export class MqttApi {
    private client: MqttClient

    constructor(private coder: Coder,
                private address: string,
                private port: number,
                subscribeCallback: (topic, payload) => any) {
        this.client = mqtt.connect(`mqtt://${address}:${port}`)
        this.client.on('connect', () => console.log('LSS MQTT connected'));
        this.client.on('message', (topic, message) => {
            const decoded = this.coder.decode(message.toString());
            subscribeCallback(topic, decoded);
        })
    }

    subscribe(topic: string) {
        this.client.subscribe(topic, (err => console.log(err)));
    }

    publish(topic: string, message: string) {
        this.client.publish(topic, this.coder.encode(message));
    }
}