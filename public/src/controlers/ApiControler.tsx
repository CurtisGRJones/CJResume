import axios, { AxiosInstance, CreateAxiosDefaults, AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiControler {
    static instance: AxiosInstance

    constructor(config?: CreateAxiosDefaults) {
        if (!ApiControler.instance) {
            ApiControler.instance = axios.create({
                // TODO make this dynamic based on NODE_ENV
                baseURL: 'http://127.0.0.1:8000/api/',
                timeout: 1000,
                ...config
            });
            if ( process.env.NODE_ENV !== 'production' ) {
                // ApiControler.instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
            }
        } 
        
    }

    public async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
        return ApiControler.instance.get(
            url,
            config
        )
    }

    public async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
        return ApiControler.instance.post(
            url,
            data,
            config
        )
    }
}