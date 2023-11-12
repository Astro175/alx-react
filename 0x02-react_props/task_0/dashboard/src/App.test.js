import { shallow } from 'enzyme';
import App from './App';
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