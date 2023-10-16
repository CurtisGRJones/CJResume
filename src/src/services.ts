import { Express, Router } from 'express';
import { middleware as calculatorMiddleware } from './calculator';
import { middleware as configMiddleware } from './clientConfig';

export const useServices = ( app: Express ): { [serviceName: string]: boolean } => {
    const services: {
        name: string,
        path?: string
        router: Router
    }[] = [
        calculatorMiddleware,
        configMiddleware
    ]

    const servicesStatus: { [serviceName: string]: boolean }  = {}

    services.forEach( (middleware) => {
        let success = true
        const path = middleware.path || `/${middleware.name}/`
        // TODO add more error logging
        try {
            app.use(path, middleware.router)
        } catch {
            success = false
        }
        servicesStatus[middleware.name] = success
    } )
    return servicesStatus
} 