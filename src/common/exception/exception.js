import { ApiException } from './api.exception.js';
export const ListException = {
    USER:{
        NOT_FOUND: new ApiException('User not found', "USER_NOT_FOUND",404),
        ALREADY_EXISTS: new ApiException('User already exists', "USER_ALREADY_EXISTS",400),
        INVALID_CREDENTIALS: new ApiException('Invalid credentials', "USER_INVALID_CREDENTIALS",400),
        INVALID_TOKEN: new ApiException('Invalid token', "USER_INVALID_TOKEN",400),
        INVALID_PASSWORD: new ApiException('Invalid password', "USER_INVALID_PASSWORD",400),
        INVALID_EMAIL: new ApiException('Invalid email', "USER_INVALID_EMAIL",400),
    }
}