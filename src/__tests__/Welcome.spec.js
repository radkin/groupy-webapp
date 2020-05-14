import React, { useState } from 'react';
import { TextField, Typography, Button, Paper, Grid } from '@material-ui/core';

// testing libraries
import { render, fireEvent } from '@testing-library/react';
import Enzyme from 'enzyme';
import { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
// custom Mock
import MockTheme from '../testComponents/MockTheme';
import { createShallow } from '@material-ui/core/test-utils';

import Welcome from '../views/Welcome';

describe('<Welcome /> with no props', () => {
  it('should render <TextField>', () => {
    const wrapper = mount(
      <MockTheme>
         <Welcome />
      </MockTheme>,
     );
     expect(wrapper.find(TextField)).toHaveLength(1);
     // expect(wrapper.find(TextField).props().InputProps.disableUnderline).toBe(
     //   true
     // );
   });
  it('should render <Typography>', () => {
    const wrapper = mount(
      <MockTheme>
        <Welcome />
      </MockTheme>,
    );
    expect(wrapper.find(Typography)).toHaveLength(4);
  });
  it('should render <Button>', () => {
    const wrapper = mount(
      <MockTheme>
        <Welcome />
      </MockTheme>,
    );
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  it('should render <Paper>', () => {
    const wrapper = mount(
      <MockTheme>
        <Welcome />
      </MockTheme>,
    );
    expect(wrapper.find(Paper)).toHaveLength(1);
  });
  it('should render <Grid>', () => {
    const wrapper = mount(
      <MockTheme>
        <Welcome />
      </MockTheme>,
    );
    expect(wrapper.find(Grid)).toHaveLength(2);
  });
});
