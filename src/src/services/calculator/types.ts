import { Response } from "../../types"

export interface CalculatorRequestData {
    nums: Array<number>
}

interface CalculatorResponseData {
    result: number
}

export type CalculatorResponse = Response<CalculatorResponseData>