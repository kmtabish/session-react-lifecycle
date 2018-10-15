import React, { Component } from 'react';
import './App.css';
import Ex1 from './containers/ex-1'
import Ex2Clock from './containers/ex-2-clock'
import Ex3Counter from './containers/ex-3-counter'
import Ex4Ex4CounterWithComponent from './containers/ex-4-propsWithCounterComponent'

import 'bootstrap/dist/css/bootstrap.css'
class App extends Component {
  render() {
    return (
      <div>
        {/*<Ex1/>*/}
        {/*<Ex2Clock />*/}
          {/*<Ex3Counter /> */}
        <Ex4Ex4CounterWithComponent />
      </div>
    );
  }
}

export default App;
