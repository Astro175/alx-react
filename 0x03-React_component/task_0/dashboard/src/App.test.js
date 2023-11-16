import { mount, shallow } from 'enzyme';
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
    expect(exists).toBe(false)
  })
})

describe("Tests logOut functionality", () => {
  it("should call logOut when CTRL+H is pressed", () => {

    const LogOutMock = jest.fn()
    const wrapper = mount(<App isLoggedIn={false} logOut={LogOutMock} />);

    //Simulate keyboard event
    const event = new KeyboardEvent('keydown', {key: 'h', ctrlKey: true});
    document.dispatchEvent(event);

    //Check if logOut was called
    expect(LogOutMock).toHaveBeenCalled();
  });

  it("Should not call when other keys are pressed", () => {
    
    const LogOutMock = jest.fn()
    const wrapper = mount(<App isLoggedIn={false} logOut={LogOutMock} />);

    //Simulate keyboard event
    const event = new KeyboardEvent('keydown', {key: 'a', ctrlKey: true})
    document.dispatchEvent(event);

    //Check if logOut was called
    expect(LogOutMock).not.toHaveBeenCalled();
  });
})