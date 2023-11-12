import { shallow } from "enzyme";
import Login from "./Login";


describe("Test suite for login component", () => {
    it("Checks for input and label tags", () => {
       const wrapper = shallow(<Login />)
       const liItems = wrapper.find('input');
       const labelItems = wrapper.find('label');
       expect(liItems).toHaveLength(2);
       expect(labelItems).toHaveLength(2);

    })
})