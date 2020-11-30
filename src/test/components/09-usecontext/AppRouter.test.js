import { mount } from 'enzyme';
import React from 'react';
import { UserContext } from '../../../components/09-useContext/UserContext';
import AppRouter from '../../../components/09-useContext/AppRouter';
describe('<AppRouter />', () => {
;

    const user={
        name:'Jesús',
        email:'jacv00@hotmail.com'
    }

    const wrapper=mount(
    <UserContext.Provider value={{user}} >
        <AppRouter />
    </UserContext.Provider>
    );

    test('should to display the approuter component', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});