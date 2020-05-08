import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import MockTheme from '../../testComponents/MockTheme';

// testing libraries
import Enzyme from 'enzyme';
import { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
// import { shallow } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';

import Welcome from './Welcome';

// it('should disable submit button on submit click', () => {
//   const wrapper = mount(<Welcome />);
//   const submitButton = wrapper.find(Button);
//   submitButton.simulate('click');
//
//   expect(submitButton.prop('disabled')).toBeTruthy();
// });

describe('<Welcome /> with no props', () => {
  // const container = createShallow(<Welcome />);
  // it('should match the snapshot', () => {
  //   expect(container.html()).toMatchSnapshot();
  // });

  it("should render <TextField />", () => {

    const wrapper = mount(
      <MockTheme>
         <Welcome />
      </MockTheme>,
     );

     // const wrapper = mount(<Welcome />);
     expect(wrapper.find(TextField)).toHaveLength(1);
     // expect(wrapper.find(TextField).props().InputProps.disableUnderline).toBe(
     //   true
     // );
   });

  // it('should have an email field', () => {
  //   expect(container.find('Email').length).toEqual(1);
  // });
  //
  // it('should have proper props for email field', () => {
  //   expect(container.find('Email').props()).toEqual({
  //     onBlur: expect.any(Function),
  //     isValid: false,
  //   });
  // });
  //
  // it('should have a password field', () => {
  //   expect(container.find('Password').length).toEqual(1);
  // });
  //
  // it('should have proper props for password field', () => {
  //   expect(container.find('Password').props()).toEqual({
  //     onChange: expect.any(Function),
  //     value: '',
  //   });
  // });

  // it('should have a submit button', () => {
  //   expect(container.find('Button').length).toEqual(1);
  // });
  //
  // it('should have proper props for submit button', () => {
  //   expect(container.find('Button').props()).toEqual({
  //     disabled: true,
  //     onClick: expect.any(Function),
  //   });
  // });
});
