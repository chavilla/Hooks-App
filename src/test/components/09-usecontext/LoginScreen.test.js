import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import LoginScreen from '../../../components/09-useContext/LoginScreen';

describe('<LoginScreen />', () => {

    const setUser=jest.fn()

    const wrapper=mount(
    <UserContext.Provider value={{ setUser }}>
        <LoginScreen />
    </UserContext.Provider>
    );


    test('display the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('execute setUser function', () => {
        
        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith( {id:3,
            name:'Luis',
            email: 'lualchavi@hotmail.com'})
    })
    
    

})