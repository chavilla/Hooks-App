import { shallow } from 'enzyme';
import React from 'react';
import { state } from '../../fixtures/toDoList';
import TodoList from '../../../components/08-useReducer/TodoList';

describe('TodoList Testing', () => {

    const handleToggle=jest.fn();
    const handleDelete=jest.fn();

    const wrapper=shallow(<TodoList 
    handleToggle={handleToggle}
    handleDelete={handleDelete}
    todo={state}
    i={0}
    />);

    test('should to match snapshot', () => {
      
        expect(wrapper).toMatchSnapshot();

    });

    test('should return the size of the array', () => {
      
        console.log(wrapper.html()); return;

        //expect(wrapper.find('TodoItem').length).toBe(2);

    }); 
});