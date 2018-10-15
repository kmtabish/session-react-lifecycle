import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/headerComponent';
import Footer from '../components/footerComponent';
import Clock from '../components/clockComponent';
import { Button} from 'react-bootstrap';
import style from "./style.scss"
class Ex3Counter extends Component {
  constructor (props) {
    super(props);
    console.log("Ex-3 screen Constructor called")
    this.state={
      counterValue:0
    }
  }
  componentWillMount() {
    console.log("Ex-3 screen ComponentWillMount called")
  }
  componentDidMount() {
    console.log("Ex-3 screen ComponentDidMount called")
  }
  onClick = () =>{
    console.log("Button Click")
    this.setState({counterValue: this.state.counterValue + 1})
  }
  render() {
      console.log("Ex-3 Screen Render")
    return (
      <div>
        <Header/>
        <div className="counter-number"><span className="counter-text">{this.state.counterValue}</span></div>
        <div className="button-submit"><Button bsStyle="success"  bsSize="large" onClick={()=>this.onClick()}>Counter</Button></div>
        <Footer/>

      </div>
    );
  }
}

export default Ex3Counter;
