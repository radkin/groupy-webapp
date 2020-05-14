import localStorage from 'localStorage';

const ls = JSON.parse(localStorage.getItem('groupy'));
const userID = ls.userID;

const App = require('./App')

test('proper profile data is correct', () => {
  expect(ls).toMatchSnapshot();
  expect(userID).toEqual('5e62ade15014b544a50af943');
});

// test('new cookies', () => {
//   expect(cookies.HAS_DOCUMENT_COOKIE).toBe(true);
// });

// test('cookieObject should have properties token and userID', () => {
//   expect(cookieObject).toHaveProperty('token');
//   expect(cookieObject).toHaveProperty('userID');
// });
