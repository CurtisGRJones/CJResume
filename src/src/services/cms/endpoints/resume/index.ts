import { NextFunction, Request, Response } from "express";
import { CmsControler } from "../../../../controlers";

export function resume(cmsControler: CmsControler) {
    return (req: Request, res: Response, next: NextFunction) => {
        // TODO standardize these
        cmsControler.getResume().then( resumeData => {
            res.send(resumeData[0])
            next() 
        }).catch( (e) => {
            res.status(500).send('An Unexpected Error Occured')
        })
    }
}