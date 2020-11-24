import { shallow } from 'enzyme';
import React from 'react';
import HookApp from '../HookApp';

describe('description HookApp component', () => {
    test('should create the snapshot', () => {

        const wrapper=shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();
    })
    
})