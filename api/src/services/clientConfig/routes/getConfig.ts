import { Request, Response } from "express";
import config from '../../../config'

export function getConfig(req: Request, res: Response) {
    // TODO make this config dynamic and only send relivant config details
    res.send({
        success: true,
        statusCode: 200,
        data: {
            env: config.ENV
        }
    })
}