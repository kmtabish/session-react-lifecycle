import React, { Component } from 'react';
import style from './style.scss'
class Counter extends Component {
  constructor (props) {
    super(props);
    console.log("CounterComponent Constructor called")
  }
  componentWillMount() {
    console.log("CounterComponent ComponentWillMount called")
  }
  componentDidMount() {
    console.log("CounterComponent ComponentDidMount called")
  }
  componentWillReceiveProps() {
    console.log("CounterComponent componentWillReceiveProps called")
  }
  render() {
    console.log("CounterComponent Render called")
    return (
        <div className="counter-number"><span className="counter-text">{this.props.counterValue}</span></div>
    );
  }
}

export default Counter;
