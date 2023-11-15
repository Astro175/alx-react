import { shallow } from 'enzyme';
import App from './App';
import CourseList from './CourseList/CourseList';
import Footer from './footer/Footer';
import Header from './header/header';
import Login from './login/Login';

describe('App Component', () => {
  it('should render Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render Body component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should render Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});

describe("Verifies Login component displays or CourseList does", () => {
  it("Verify Login component is not included", () => {
    const wrapper = shallow(<App isLoggedIn={false} />)
    const exists = wrapper.exists(CourseList);

    
  })
})