import { NextFunction, Request, Response } from "express";
import { CmsControler } from "../../../../controlers";

export function seedData(cmsControler: CmsControler) {
    return (req: Request, res: Response, next: NextFunction) => {
        // TODO make this check for id already seeded
        cmsControler.seedDb().then( () => {
            res.send({
                success: true,
                statusCode: 200,
            })
            next() 
        }).catch( (e) => {
            throw e
        })
    }
}