import { Axios, AxiosRequestConfig } from "axios";

export default class axiosBase {
    private readonly _baseURL: string;
    constructor(baseURL: string) {
        this._baseURL = baseURL;
    }

    protected axios() {
        const instance = new Axios({
            baseURL: this._baseURL,
            responseType: 'json',
            validateStatus: (status) => status >= 200 && status < 300,
            transformResponse: function (data) {
                if (this.responseType === 'json') {
                    try {
                        return JSON.parse(data);
                    } catch (e) {
                        return data
                    }
                }
                return data;
            },
            headers: {
                'Content-Type': 'application/json',
            },
            ...this.config()
        })
        this.processAxios(instance);
        return instance;
    }

    protected processAxios(axios: Axios): void {
        void axios
    }
    protected config(): AxiosRequestConfig {
        return {};
    }
}