import MockDemoService from '../services/MockDemoService';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, message, Modal } from 'antd';
import { IMockDemo } from '../interfaces/IMockDemo';

interface IHelloProps {
    callbackfunc: () => void;
}

interface IHelloState {
    loading: boolean;
    users: IMockDemo[];
}

export default class Home extends React.Component<IHelloProps, IHelloState> {
    static propTypes = {
        callbackfunc: PropTypes.func.isRequired,
    };

    static defaultProps = {
        callbackfunc: () => {},
    };

    constructor(props: IHelloProps) {
        super(props);
        this.state = {
            loading: false,
            users: [] as IMockDemo[],
        };
    }

    fetchUsers = async () => {
        const { callbackfunc } = this.props;
        callbackfunc && callbackfunc();
        this.setState({
            loading: true,
        });
        try {
            const userList = await MockDemoService.getUsers();
            this.setState(() => ({ users: userList }), () => {
                const { users } = this.state;
                Modal.info({
                    content: (
                        <div className="users-list">
                            <pre>{JSON.stringify(users, null, 4)}</pre>
                        </div>
                    ),
                });
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
        const { loading, users } = this.state;
        return (
            <>
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
                <hr />
                {
                    users.length
                        ? (
                            <div data-testid="rsp" className="result">
                                <pre>{ JSON.stringify(users, null, 4) }</pre>
                            </div>
                        )
                        : null
                }
            </>
        );
    }
}
// user hooks case
// import MockDemoService from '../services/MockDemoService';
// import PropTypes from 'prop-types';
// import React, { useState } from 'react';
// import { Button, message, Modal } from 'antd';
// import { IMockDemo } from '../interfaces/IMockDemo';

// interface IHelloProps {
//     callbackfunc: () => void;
// }

// const Home = (props: IHelloProps) => {
//     const [loading, setLoading] = useState(false);
//     const [users, setUsers] = useState([] as IMockDemo[]);

//     const fetchUsers = async () => {
//         setLoading(true);
//         props.callbackfunc && props.callbackfunc();
//         try {
//             const userList = await MockDemoService.getUsers();
//             setUsers(userList);
//             Modal.info({
//                 content: (
//                     <div className="users-list">
//                         <pre>{JSON.stringify(userList, null, 4)}</pre>
//                     </div>
//                 ),
//             });
//         } catch (error) {
//             if (error.message) {
//                 message.error(error.message);
//             }
//         }
//         setLoading(false);
//     };

//     return (
//         <>
//             <div>
//                 访问
//                 <a href="http://localhost:3000/api/mock/users" target="_blank">http://localhost:3000/api/mock/users</a>
//                 查看本地mock数据
//             </div>
//             <hr />
//             <div>
//                 <p>动态调用接口，访问mock数据</p>
//                 <Button
//                     type="primary"
//                     loading={loading}
//                     onClick={fetchUsers}>get mock data
//                 </Button>
//             </div>
//             <hr />
//             {
//                 users.length
//                     ? (
//                         <div data-testid="rsp" className="result">
//                             <pre>{ JSON.stringify(users, null, 4) }</pre>
//                         </div>
//                     )
//                     : null
//             }
//         </>
//     );
// };

// Home.propTypes = {
//     callbackfunc: PropTypes.func.isRequired,
// };

// Home.defaultProps = {
//     callbackfunc: () => {},
// };

// export default Home;
