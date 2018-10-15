import React, { Component } from 'react';
import Header from '../components/headerComponent'
import Footer from '../components/footerComponent'
class Ex1 extends Component {
  render() {
    return (
      <div>
      <Header/>
      <div className="App main-body">
        <span className="text">Body</span>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Ex1;
