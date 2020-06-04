import React from 'react';
import { Button, message, Modal } from 'antd';
import MockDemoService from '../services/MockDemoService';

interface IHelloProps {
    callbackfunc: () => void;
}

export default class Hello extends React.Component<IHelloProps, {[key: string]: any}> {
    constructor(props: IHelloProps) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    fetchUsers = async () => {
        const { callbackfunc } = this.props;
        callbackfunc && callbackfunc();
        this.setState({
            loading: true,
        });
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
        this.setState({
            loading: false,
        });
    };

    render() {
        const { loading } = this.state;
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
                        onClick={this.fetchUsers}>get mock data
                    </Button>
                </div>

            </div>
        );
    }
}
