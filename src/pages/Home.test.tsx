import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from './Home';

test('render home page', async () => {
    const callBack = jest.fn();
    const wrapper = render(<Home callbackfunc={callBack} />);
    const btn = await wrapper.queryByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn?.tagName).toEqual('BUTTON');
    fireEvent.click(btn as Element);
    expect(callBack).toBeCalled();
});
