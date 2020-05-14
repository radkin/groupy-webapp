import localStorage from 'localStorage';
import localStorageObject from './localStorageObject';
import App from '../App';

// localStorage is sync
const gatherLocalStorage = () => {
  return JSON.parse(localStorage.getItem('groupy'));
}

test('proper profile data is correct', async () => {
  const ls = await gatherLocalStorage();
  const userID = ls.userID;
  expect(ls).toMatchSnapshot();
  expect(userID).toEqual('5e62ade15014b544a50af943');
});

test('localStorageObject should have properties token and userID', () => {
  expect(localStorageObject).toHaveProperty('token');
  expect(localStorageObject).toHaveProperty('userID');
});
