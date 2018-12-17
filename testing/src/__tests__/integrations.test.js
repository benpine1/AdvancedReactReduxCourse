import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';

import Root from 'root';
import App from 'components/app';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            {
                name: 'Fetched 1'
            }, {
                name: 'Fetched 2'
            }
        ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch and display a list of comments', (done) => {
    const wrapped = mount(
        <Root><App/></Root>
    );

    wrapped
        .find('button.fetch-comments')
        .simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
});