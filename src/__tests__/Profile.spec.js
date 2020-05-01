import me from './data';

test('proper profile data is correct', () => {
  expect(me).toMatchSnapshot();
});
