import { Express, Router } from 'express';
import { middleware as calculatorMiddleware } from './calculator';
import { middleware as configMiddleware } from './clientConfig';
import { middleware as cmsMiddleware } from './cms';

export class Services {

    status: { [serviceName: string]: boolean }  = {}

    router = (): Router => {
        const services: {
            name: string,
            path?: string
            router: Router
        }[] = [
            calculatorMiddleware,
            configMiddleware,
            cmsMiddleware
        ]
    
        const router = Router()
    
        services.forEach( (middleware) => {
            let success = true
            const path = middleware.path || `/${middleware.name}/`
            // TODO add more error logging
            try {
                router.use(path, middleware.router)
            } catch {
                success = false
            }
            this.status[middleware.name] = success
        } )
        return router
    } 
}

