import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import Notifications from "./Notifications";

describe('Checks for Notification Component', () => {
    it('Checks if three li elements are rendered', () => {
        const wrapper = shallow(<Notifications />)
        const Items = wrapper.find(NotificationItem);
        expect(Items).toHaveLength(3);
    });

    it('Checks for paragraph text is rendered', () => {
        const wrapper = shallow(<Notifications />)
        const text = wrapper.contains('Here is the list of notifications')
        expect(text).toBe(true);
    })
})