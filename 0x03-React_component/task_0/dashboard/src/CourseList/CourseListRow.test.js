import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("Test suite for isheader is true", () => {
   it("Test for rendering just textFirstCell", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="ALX"/>);
    const thElement = wrapper.find('th');
    expect(thElement).toHaveLength(1);
    expect(thElement.text()).toEqual('ALX')
   });
   it("Test for rending both cells", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} 
        textSecondCell="ALX" textFirstCell="Sandbox" />);
    const thElements = wrapper.find('th');
    expect(thElements).toHaveLength(2);
    expect(thElements.at(0).text()).toEqual('Sandbox');
    expect(thElements.at(1).text()).toEqual('ALX');
   });
});

describe("Test for when isHeader is false", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="ALX"
                    textSecondCell="sandbox"/>)
    const tdElements = wrapper.find('td');
    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toEqual('ALX');
    expect(tdElements.at(1).text()).toEqual('sandbox');
})