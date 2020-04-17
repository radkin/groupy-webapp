import React, { Component } from 'react';
import { SetupForm } from './components';

class Setup extends Component {
  render() {
    return (
      <div>
        <h2>Set up your Profile</h2>
        <p>We need to know a couple of things to get started</p>
        <SetupForm />
      </div>
    );
  }
}

export default Setup;
