import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//function HelloWorld(props) {
//  return <h2>{props.title}</h2>
//}

//const HelloWorld = (props) => <h2>{props.title}</h2>

class HelloWorld extends Component {
  render(){
    return <h2>{this.props.title}</h2>
    };
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld title="This is my Hello World"/>
        <p>Hello World, I am using React</p>
      </header>
    </div>
  );
}

export default App;
