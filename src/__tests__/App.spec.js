import localStorage from 'localStorage';
import localStorageObject from './localStorageObject';

const ls = JSON.parse(localStorage.getItem('groupy'));
const userID = ls.userID;

const App = require('../App')

test('proper profile data is correct', () => {
  expect(ls).toMatchSnapshot();
  expect(userID).toEqual('5e62ade15014b544a50af943');
});

test('localStorageObject should have properties token and userID', () => {
  expect(localStorageObject).toHaveProperty('token');
  expect(localStorageObject).toHaveProperty('userID');
});
