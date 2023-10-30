import axios, { AxiosInstance, CreateAxiosDefaults, AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiControler {
    static instance: AxiosInstance

    constructor(config?: CreateAxiosDefaults) {
        if (!ApiControler.instance) {
            const apiHost = 
                process.env.REACT_APP_API_HOST ||
                'https://cjresume.ca'
            ApiControler.instance = axios.create({
                baseURL: `${apiHost}/api/`,
                timeout: 1000,
                ...config
            });
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