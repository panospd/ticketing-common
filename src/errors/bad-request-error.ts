import { CustomError } from "./custom-error"

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(public message: string) {
        super(message);
        
        (<any>Object).setPrototypeOf(this, BadRequestError.prototype)
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [{ message: this.message }]
    }

}