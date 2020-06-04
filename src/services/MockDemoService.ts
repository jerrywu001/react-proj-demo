import axios from 'axios';
import { IMockDemo } from '../interfaces/IMockDemo';
import { APIUtil } from '../interfaces/ICommon';

const url = '/api/mock';

export default class MockDemoService {
    static async getUsers() {
        let users: IMockDemo[] = [];
        try {
            const rsp = await axios.get(`${url}/users`);
            if (rsp.data.code === 200) {
                users = rsp.data.result || [];
            } else {
                throw new Error(rsp.data.message || '');
            }
        } catch (error) {
            const errorMsg = APIUtil.getErrorMessage(error);
            throw new Error(errorMsg);
        }
        return users;
    }
}
