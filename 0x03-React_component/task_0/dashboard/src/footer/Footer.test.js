import { shallow } from "enzyme";
import Footer from "./Footer";


describe("Test suite for footer", () => {
    it("Test case for footer text", () => {
        const wrapper = shallow(<Footer />);
       expect(wrapper.text()).toContain('Copyright');
    })
})