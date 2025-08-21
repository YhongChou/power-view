import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type { Result } from "./types";

const BASE_URL = import.meta.env.VITE_APP_URL;
// const ULR_PREFIX = import.meta.env.REACT_APP_API_PREFIX;
const TIME_OUT = 10 * 1000; // 10 seconds

class AxiosService { 
    private axiosInstance: AxiosInstance;
    private options: AxiosRequestConfig;

    constructor(options?: AxiosRequestConfig) { 

        this.options = options || {};
        this.axiosInstance = axios.create({
            // ...options,
            baseURL: options?.baseURL || BASE_URL,
            timeout: options?.timeout || TIME_OUT,

        });
    }

    request<T = any>(config: AxiosRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => { 
            this.axiosInstance
                .request<any, AxiosResponse<Result>>(config)
                .then((response: AxiosResponse<Result>) => {
                    const ret = response.data as unknown as Promise<T>;
                    resolve(ret);
                }).catch((error: Error) => { 
                    reject(error);
                })
              
        })

    }
}
    
    
const axiosService = new AxiosService();
// export const { request } = axiosService;

export default axiosService;