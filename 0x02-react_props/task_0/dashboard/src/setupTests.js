// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import Adapter from '@cfaester/enzyme-adapter-react-18';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import util from 'util';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});