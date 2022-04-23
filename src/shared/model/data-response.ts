export class DataResponse<T> {

    message: string;
    data: T;

    constructor(message: string, data: T) {
        this.message = message;
        this.data = data;
    }
}
