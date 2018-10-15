import React, { Component } from 'react';
import style from './style.scss'
class Footer extends Component {
  constructor (props) {
    super(props);
    console.log("Footer Constructor called")
  }
  componentWillMount() {
    console.log("Footer ComponentWillMount called")
  }
  componentDidMount() {
    console.log("Footer ComponentDidMount called")
  }
  render() {
    console.log("Footer Render called")
    return (
      <div className="footer-component">
        <span className="text">Footer component</span>
      </div>
    );
  }
}

export default Footer;
