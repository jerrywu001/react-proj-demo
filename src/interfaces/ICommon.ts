export class APIUtil {
    static getErrorMessage(error: any) {
        console.log(error);
        return error.message || error.statusText || error.body.message || error.body.error || '';
    }
}
