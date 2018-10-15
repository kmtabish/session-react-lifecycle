import React, { Component } from 'react';
class Clock extends Component {
  constructor(props) {
    super(props);
    var date= this.getTimeString();
    this.state= {
      time: date
    }
    console.log("Clock component Constructor called")
  }
  componentWillMount () {
    console.log("Clock component Will Mount called")
  }
  getTimeString() {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
  }
  componentDidMount() {
    const _this = this;
    this.timer = setInterval(function(){
      var date = _this.getTimeString();
      _this.setState({
        time: date
      })
    },1000)
  }
  componentWillUnmount() {
      console.log("Clock component Will UnMount called")
      clearInterval(this.timer);
  }

  render() {
    console.log("Clock Component Render")
    return (
      <div>
        {this.state.time}
      </div>
    );
  }
}

export default Clock;
