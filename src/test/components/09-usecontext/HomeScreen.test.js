import React from 'react';
import { mount } from 'enzyme';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

const user={
    name:'Jesús',
    email:'jacv00@hotmail.com'
}

describe('<HomeScreen />', () => {
    
    const wrapper=mount(
    <UserContext.Provider value={{
        user
    }}>
        <HomeScreen />);
    </UserContext.Provider>
    );

    test('display the component', () => {
        expect(wrapper).toMatchSnapshot();
    })
});