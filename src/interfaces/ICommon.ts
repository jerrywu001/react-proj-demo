export class APIUtil {
    static getErrorMessage(error: any) {
        return error.message || error.statusText || error.body.message || error.body.error || '';
    }
}
