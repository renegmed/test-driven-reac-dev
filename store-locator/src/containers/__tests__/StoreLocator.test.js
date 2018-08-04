import React from 'react';
import {shallow} from 'enzyme/build';
import StoreLocator from '../StoreLocator';
import axios from 'axios';

describe("StoreLocator", function(){
    let mountedStoreLocator;
    beforeEach( () =>{
        mountedStoreLocator = shallow(<StoreLocator />);
    });

    it('calls axios.get in #componentDidMount', () => {
        return mountedStoreLocator.instance().componentDidMount().then( () => {  // async call
            expect(axios.get).toHaveBeenCalled();
        });
    });    

    it('calls axios.get with correct url', () => {
        return mountedStoreLocator.instance().componentDidMount().then( () => {  // async call
            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
        });
    });    

    it('updates state with api data', () => {
        return mountedStoreLocator.instance().componentDidMount().then( () => {  // async call
            expect(mountedStoreLocator.state()).toHaveProperty('shops',
                [{
                    "location": "test location",
                    "address" : "test address"         
                }]
            );
        });
    });    

    it('renders without crashing', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);   
    });
      
    it('renders a header', () => {
        const headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    });

    // NOT WOKING. Need to research
    // it('renders one button', () =>{
    //     const buttons = mountedStoreLocator.find(Button);
    //     expect(buttons.length).toBe(1);
    // });

    it('renders one map', () =>{
        const maps = mountedStoreLocator.find('Map');
        expect(maps.length).toBe(1);
    });
});
describe('chooseMap', () => {
    it('updates this.state.currentMap using the location passed on it', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
        let mockEvent = {target:{value:'testland'}};
        mountedStoreLocator.instance().chooseMap(mockEvent);
        expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
    });
});
