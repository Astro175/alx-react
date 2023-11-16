import { shallow } from "enzyme";
import Header from "./header";

describe("Test for header component", () => {
    it("Verifies it has img and h1 tags", () => {
        const wrapper = shallow(<Header />);
        const img = wrapper.find('img');
        const h1 = wrapper.find('h1');
        expect(img.exists()).toBe(true);
        expect(h1.exists()).toBe(true);

    })
})