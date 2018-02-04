import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
        </ul>
      </nav>
    );
  }
}
