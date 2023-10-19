import { NextFunction, Request, Response } from "express";
import { CmsControler } from "../../../../controlers";

export function resume(cmsControler: CmsControler) {
    return (req: Request, res: Response, next: NextFunction) => {
        cmsControler.getResume().then( resumeData => {
            res.send()
            next() 
        } )
    }
}