import { Request, Response } from 'express';
import { CalculatorResponse } from './types';
import { validate } from '../../utils';
import { ValidationError } from '../../errors';

// TODO Make this more generic for use with resolve Formula

export default (func: (nums: Array<number>) => number) => {
    return (req: Request, res: Response) => {
        const data = req.body

        let resData: CalculatorResponse = ((): CalculatorResponse => {
            try {
                console.log(typeof(data) === 'object')
                validate(
                    [
                        {
                            isValid: typeof(data) === 'object',
                            errorMessage: 'Request is not valid JSON'
                        },
                        {
                            isValid: 'nums' in data,
                            errorMessage: 'Request data missing "nums" value'
                        },
                        {
                            isValid: Array.isArray(data.nums) && 
                                     data.nums.every((num: any) => typeof(num) === 'number' ),
                            errorMessage: 'Nums is not of type Array<number>'
                         },
                    ]
                )

                return {
                    success: true,
                    statusCode: 200,
                    data: {
                        result: func(data.nums)
                    }
                }
            } catch(e) {
                if (e instanceof ValidationError) {
                    return {
                        success: false,
                        statusCode: 400,
                        error: {
                            message: e.message
                        }
                    }
                }
                return {
                    success: false,
                    statusCode: 500,
                    error: {
                        message: 'internal server error'
                    }
                }
            }
        })()
        res.status(resData.statusCode).send(resData)
    }
}