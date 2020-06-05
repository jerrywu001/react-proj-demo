import axios from 'axios';
import Home from './Home';
import React from 'react';
import {
    fireEvent,
    render,
    screen,
    waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');
const mockHandler = axios as jest.Mocked<typeof axios>;

test('render home page, query button element', async () => {
    const callBack = jest.fn();
    const wrapper = render(<Home callbackfunc={callBack} />);
    // 验证组件是否正确渲染
    const btn = wrapper.queryByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn?.tagName).toEqual('BUTTON');
});

test('async to fetch users', async () => {
    // 让jest去模拟异步过程（而不是去请求真实的数据）
    mockHandler.get.mockResolvedValueOnce({
        status: 200,
        statusText: 'OK',
        data: {
            code: 200,
            result: [
                {
                    name: 'jack',
                },
                {
                    name: 'jerry',
                },
            ],
        },
    });
    const callBack = jest.fn();
    const homeWrapper = render(<Home callbackfunc={callBack} />);
    // 验证组件是否正确渲染
    const btn = homeWrapper.queryByRole('button');
    // 触发异步数据获取
    fireEvent.click(btn as Element);
    // 验证异步函数是否被调用
    expect(callBack).toBeCalled();
    // 等待异步结果渲染成功
    // rerender(<Home callbackfunc={callBack} />);
    const [rspDom, dialog] = await waitForElement(() => [screen.getByTestId('rsp'), screen.getByRole('dialog')]);
    const usersDom = dialog.getElementsByClassName('users-list');
    // 查看异步结果是否渲染成功
    expect(rspDom).toBeInTheDocument();
    expect(usersDom[0]).not.toBeEmpty();
    expect(usersDom[0]).toBeInTheDocument();
});
