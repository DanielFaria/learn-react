import React from 'react';
import { shallow } from 'enzyme';
import Count from './../../components/Count';


describe('Count Component', () => {

    it('renders without crashing', () => {
      shallow(<Count />);
    });
   
    it('Are There 3 button ?', () => {
       const wrapper =  shallow(<Count />);
       expect(wrapper.find('button').length).toEqual(3);
    });
    
    it('Is the counter started with 0 ?', () => {
        const wrapper =  shallow(<Count />);
        expect(wrapper.find('h1').text().split(":")[1].trim()).toEqual('0');
    });
   
    it('After the click the counter is increase ?', () => {
        const wrapper =  shallow(<Count />);
        wrapper.find('#plus').simulate('click');
        expect(wrapper.state('count')).toEqual(1);
        //Take by Html is not a good practice...
        //expect(wrapper.find('h1').text().split(":")[1].trim()).toEqual('1');
    });

    it('Counter can not be less than 0 ?', () => {
        const wrapper =  shallow(<Count />);
        wrapper.find('#minus').simulate('click');
        expect(wrapper.state('count')).toEqual(0);
        
    });

});