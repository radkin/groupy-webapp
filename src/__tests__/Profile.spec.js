import me from './data';

test('proper profile data is correct', () => {
  expect(me).toMatchSnapshot();
  expect(me.first).toEqual('jon');
});

test('me object should have properties id, first, last, zipCode, color,\
  initials, profileImage', () => {
    expect(me).toHaveProperty('id');
    expect(me).toHaveProperty('first');
    expect(me).toHaveProperty('last');
    expect(me).toHaveProperty('zipCode');
    expect(me).toHaveProperty('color');
    expect(me).toHaveProperty('initials');
    expect(me).toHaveProperty('profileImage');
  });
