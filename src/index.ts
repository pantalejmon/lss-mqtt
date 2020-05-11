import * as fs from "fs";
import {Config} from "./util";
import {Coder} from "./coder";
import {MqttApi} from "./mqtt-api";

let config: Config = JSON.parse(fs.readFileSync('config.json').toString('utf8'));

const coder: Coder = new Coder(config.key);
const mqttApi: MqttApi = new MqttApi(coder, config.ip, config.port, (topic, payload) => {
    console.log(payload);
})

mqttApi.subscribe('test');
mqttApi.publish('test', "Wiadomosc testowa");