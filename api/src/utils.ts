import { ValidationError } from "./errors"

export const validate = (
    validators: { 
        isValid: boolean
        errorMessage: string
    }[]
): void => {
    validators.forEach( ({
        isValid,
        errorMessage
    }) => {
        if( !isValid ) {
            throw new ValidationError(errorMessage)
        }
    } )
}