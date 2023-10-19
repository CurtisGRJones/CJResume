import { NextFunction, Router, Request, Response } from 'express';
import { middleware as calculatorMiddleware } from './calculator';
import { middleware as configMiddleware } from './clientConfig';
import { middleware as cmsMiddleware } from './cms';

export class Services {

    status: { [serviceName: string]: boolean } = {}
    public readonly router: Router

    constructor() {
        const services: {
            name: string,
            path?: string
            router: Router
        }[] = [
                calculatorMiddleware,
                configMiddleware,
                cmsMiddleware
            ]
        
        this.router = Router()

        this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
            // TODO make this check serices as they are used
            res.send({
                running: true,
                services: this.status
            })
            next();
        });

        services.forEach((middleware) => {
            let success = true
            const path = middleware.path || `/${middleware.name}/`
            try {
                this.router.use(path, middleware.router)
            } catch(e) {
                console.error(`${middleware.name} failed with error:\n${e}`)
                success = false
            }
            this.status[middleware.name] = success
        })
    }
}

