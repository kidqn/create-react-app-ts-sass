import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import Header from './Header'

describe('Header component', () => {
    it('contains class name Header', () => {
        const component = shallow(<Header />);
        expect(component.props().className).toBe('Header');
    })
    it('render a correct snapshot', () => {
        const component =renderer.create(<Header />).toJSON();
        expect(component).toMatchSnapshot();
    })
})