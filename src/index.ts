import {Config} from "./util";
import {Coder} from "./coder";
import {MqttApi} from "./mqtt-api";

export class LssMqtt {
    private _callback: (topic, payload) => any;
    private readonly coder: Coder;
    private _api: MqttApi;
    constructor(config: Config) {
        this.coder= new Coder(config.key);
        this._api = new MqttApi(this.coder, config.ip, config.port, this._callback)
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