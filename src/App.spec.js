import Cookies from 'universal-cookie';
import cookieObject from './cookieObject';

const cookies = new Cookies();
const cookieExists = cookies.get('groupy')
const App = require('./App')

test('proper profile data is correct', () => {
  expect(cookieObject).toMatchSnapshot();
  expect(cookieObject.userID).toEqual('5e62ade15014b544a50af943');
});

test('new cookies', () => {
  expect(cookies.HAS_DOCUMENT_COOKIE).toBe(true);
});

test('cookieObject should have properties token and userID', () => {
  expect(cookieObject).toHaveProperty('token');
  expect(cookieObject).toHaveProperty('userID');
});
