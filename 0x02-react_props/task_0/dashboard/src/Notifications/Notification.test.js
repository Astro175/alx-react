import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import Notifications from "./Notifications";

describe('Checks for Notification Component', () => {
    it('Checks if three li elements are rendered', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>)
        const Items = wrapper.find(NotificationItem);
        expect(Items).toHaveLength(3);
    });

    it('Checks for paragraph text is rendered', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>)
        const text = wrapper.contains('Here is the list of notifications')
        expect(text).toBe(true);
    });

    it('Check if the menu item is displayed, if displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false}/>)
        const item = wrapper.find('.menuItem');
        expect(item.exists()).toBe(true);
    });

    it('Check if the notification div is not displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications  displayDrawer={false} />);
        const item = wrapper.find('.Notifications');
        expect(item.exists()).toBe(false);
    });

    it('Check if the menuItem displays when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        const item = wrapper.find('.menuItem');
        expect(item.exists()).toBe(true);
    });

    it('Check if the notification div is not displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications  displayDrawer={true} />);
        const item = wrapper.find('.Notifications');
        expect(item.exists()).toBe(true);
    });

})