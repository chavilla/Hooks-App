import React from 'react';
const { shallow } = require("enzyme")
const { RealExampleRef } = require("../../../components/04-useRef/RealExampleRef")

describe('RealExampleRef testing', () => {

    const wrapper=shallow(<RealExampleRef />);

    test('should the return the snapshot', () => {

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('MultiCustomHook').exists()).toBe(false);

    });

    test('should to get a component', () => {
      
        const btn=wrapper.find('.btn');
      btn.simulate('click');
      expect(wrapper.find('MultiCustomHook').exists()).toBe(true);
    
    })
    
    
})