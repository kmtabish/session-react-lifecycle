import React, { Component } from 'react';
import style from './style.scss'
class Header extends Component {
  constructor (props) {
    super(props);
    console.log("Header Constructor called")
  }
  componentWillMount() {
    console.log("Header ComponentWillMount called")
  }
  componentDidMount() {
    console.log("Header ComponentDidMount called")
  }
  render() {
    console.log("Header Render called")
    return (
      <div className="header-component">
        <span className="text">Header component</span>
      </div>
    );
  }
}

export default Header;
