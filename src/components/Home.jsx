import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <div
      className="header"
      />
      <div className="navbar" />
      <div className="row">
        <div className="side" />
        <div className="main"/>
        </div>
      <div
      className="footer"/>
      </div>
    );
  }
}
