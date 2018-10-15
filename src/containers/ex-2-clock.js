import React, { Component } from 'react';
import Header from '../components/headerComponent';
import Footer from '../components/footerComponent';
import Clock from '../components/clockComponent';
import style from "./style.scss"
class Ex2Clock extends Component {
  constructor (props) {
    super(props);
    console.log("Ex-2 screen Constructor called")
  }
  componentWillMount() {
    console.log("Ex-2 screen ComponentWillMount called")
  }
  componentDidMount() {
    console.log("Ex-2 screen ComponentDidMount called")
  }
  render() {
    console.log("Ex-2 Screen Render")
    return (
      <div>
        <Header/>
          <div className="App main-body">
            <span className="clock-text"><Clock/></span>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default Ex2Clock;
