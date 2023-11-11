import { shallow } from 'enzyme';
import App from './App';
import Notifications from './Notifications';

describe('Test for App component', () => {
    it('Checks for App-header div', () => {
        const wrapper = shallow(<App />)
        const AppHeader = wrapper.find('.App-header')
        expect(AppHeader.exists()).toBe(true)
    });
    it('Checks for App-footer div', () => {
        const wrapper = shallow(<App />)
        const Appfooter = wrapper.find('.App-footer');
        expect(Appfooter.exists()).toBe(true)
    });
    it('Checks for App-body div', () => {
        const wrapper = shallow(<App />)
        const AppBody = wrapper.find('.App-body');
        expect(AppBody.exists()).toBe(true)
    });
});

describe('Checks for Notification Component', () => {
    it('Checks if three li elements are rendered', () => {
        const wrapper = shallow(<Notifications />)
        const liItems = wrapper.find('li');
        expect(liItems).toHaveLength(3);
    });

    it('Checks for paragraph text is rendered', () => {
        const wrapper = shallow(<Notifications />)
        const text = wrapper.contains('Here is the list of notifications')
        expect(text).toBe(true);
    })
})