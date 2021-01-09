import { shallow } from 'enzyme';
import React from 'react';
import MultiCustomHook from '../../../components/03-examples/MultiCustomHook';
import { useCounter } from '../../../hooks/useCounter';
import useFecth from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('MultiCustomHooks testing', () => {

    beforeEach(()=>{
        useCounter.mockReturnValue({
            counter: 10,
            //increment: () => {}
        });
    });

    test('should to create a snapshot', () => {

        useFecth.mockReturnValue({
            data: null, loading: true, error: null 
        });

        const wrapper=shallow(<MultiCustomHook />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert').exists()).toBe(true);
    });

    test('should to display the info', () => {

        useFecth.mockReturnValue({
            data: [
                { 
                    author: 'Juan',
                    quote:'Hola a todos'
                }
            ], loading: false, error: null 
        });

        const wrapper=shallow(<MultiCustomHook />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text()).toBe('Hola a todos');
        expect(wrapper.find('footer').text()).toBe('Juan');

    });
})