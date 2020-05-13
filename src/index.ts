import {Config} from "./lib/util";
import {Coder} from "./lib/coder";
import {MqttApi} from "./lib/mqtt-api";

export class LssMqtt {
    private _callback: (topic, payload) => any = ((topic, payload) => void 0);
    private readonly coder: Coder;
    private _api: MqttApi;

    constructor(config: Config) {
        this.coder = new Coder(config.key);
        this._api = new MqttApi(this.coder, config.ip, config.port, (topic, payload) => this._callback(topic, payload))
    }

    get callback(): (topic, payload) => any {
        return this._callback;
    }

    set callback(value: (topic, payload) => any) {
        this._callback = value;
    }

    get api(): MqttApi {
        return this._api;
    }

    set api(value: MqttApi) {
        this._api = value;
    }
}