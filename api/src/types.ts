interface GenericResponse {
    statusCode: number
}

export interface SuccessResponse<T> extends GenericResponse {
    success: true,
    data: T
}

export interface FailureResponse extends GenericResponse {
    success: false,
    error?: {
        message?: string,
    }
}

export type Response<T> = SuccessResponse<T> | FailureResponse