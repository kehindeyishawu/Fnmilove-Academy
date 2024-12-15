export class CustomError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;

        // Maintain proper stack trace
        Error.captureStackTrace(this, this.constructor);
    }
}