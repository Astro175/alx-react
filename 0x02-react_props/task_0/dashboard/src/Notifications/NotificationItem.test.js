import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("Test suite for notificationItem component", () => {
    it("Verifies if type and value works", () => {
        
        const wrapper = shallow(<NotificationItem type="default" value="tests"/>);
        // Check if the data-notification renders well
        expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');


        //Checks text contains value
        expect(wrapper.text()).toEqual('tests');
    })

    it("Checks if type and html works", () => {
        const wrapper = shallow(<NotificationItem type="default" html="<strong>Hello</strong>"/>);
        //Checks if html element renders
        expect(wrapper.find('li').html()).toEqual("<li data-notification-type=\"default\"><strong>Hello</strong></li>");
    })


})