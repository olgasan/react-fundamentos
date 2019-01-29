import React, { Component } from 'react';
import MyComponent from '../src/components/myComponent';

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent greeting={'hola inmundo desde una prop'} />
      </div>
    );
  }
}

export default App;
