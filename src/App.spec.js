import Cookies from 'universal-cookie';

const App = require('./App')
const cookies = new Cookies();

test('new cookies', () => {
  expect(cookies.HAS_DOCUMENT_COOKIE).toBe(true);
});
