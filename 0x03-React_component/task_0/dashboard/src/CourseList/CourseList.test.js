import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
describe("Test suite for CourseList", () => {
    it("Test for CourseLis rendering 5 rows", () => {
        const wrapper = shallow(<CourseList />)
        const items = wrapper.find(CourseListRow);
        expect(items).toHaveLength(3);
    })
})