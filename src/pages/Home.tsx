import React, { useState } from 'react';
import { Button, message, Modal } from 'antd';
import MockDemoService from '../services/MockDemoService';

const Home = (props: any) => {
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        props.callbackfunc();
        try {
            const users = await MockDemoService.getUsers();
            Modal.info({
                content: (
                    <div dataset-testid="rsp">
                        <pre>{JSON.stringify(users, null, 4)}</pre>
                    </div>
                ),
            });
        } catch (error) {
            if (error.message) {
                message.error(error.message);
            }
        }
        setLoading(false);
    };

    return (
        <div>
            <div>
                访问
                <a href="http://localhost:3000/api/mock/users" target="_blank">http://localhost:3000/api/mock/users</a>
                查看本地mock数据
            </div>
            <hr />
            <div>
                <p>动态调用接口，访问mock数据</p>
                <Button
                    type="primary"
                    loading={loading}
                    onClick={fetchUsers}>get mock data
                </Button>
            </div>

        </div>
    );
};

export default Home;
