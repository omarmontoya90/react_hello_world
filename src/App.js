import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cars from './data/cars.json'

//function HelloWorld(props) {
//  return <h2>{props.title}</h2>
//}

//const HelloWorld = (props) => <h2>{props.title}</h2>

class HelloWorld extends Component {
  render(){
    return <h2>{this.props.title}</h2>
    };
}

class Text extends Component {
  render(){
    const {
      arrayOfNumbers,
      isActivated,
      multiply,
      number,
      objectWithInfo,
      text
    } = this.props

    const textAccordingBoolean = isActivated ? "Activated" : "Disabled"
    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        <p>{arrayOfNumbers.join(', ')}</p>
        <p>The app is {textAccordingBoolean}</p>
        <p>Year is {objectWithInfo.year}</p>
        <p>The result of operation {number}x2 is: {multiply(number)}</p>
      </div>
    )
  }
}

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {counter: this.props.initialCounter};
    setInterval(() => {
      this.setState({counter: this.state.counter +1})
    }, 1000);
  }

  render () {
    return(
      <div>
        <h2>States</h2>
        <span>{this.state.counter}</span>
      </div>
    )
  }
}

class NumberLists extends Component{
   render(){
     const numbers = [1, 1, 2, 3];
     return (
       <div>
         <h2>{this.props.text}</h2>
         {numbers.map( (number, index) =>{
           return <p key={index}>Soy el numero {number}</p>
         })}
       </div>
     )
   };
}

class ObjectList extends Component {
  render(){
    return(
      <div>
        <h2>Working Object Lists</h2>
        <ul>
          {cars.map( car =>{
            return (
              <li key={car.id}>
                <p><strong>Name: </strong>{car.name}</p>
                <p><strong>Company: </strong>{car.company}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld title="This is my Hello World"/>
        <Text
          arrayOfNumbers={[25, 6, 1990]}
          isActivated
          multiply={(number)=>number*2}
          number={2020}
          objectWithInfo={{year: 2020, century: 21}}
          text="Hello World, I am using React in:"
        />
        <Counter initialCounter={25}/>

        <NumberLists text="Working with lists"/>

        <ObjectList/>
      </header>
    </div>
  );
}

export default App;
