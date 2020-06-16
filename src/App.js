import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cars from './data/cars.json'
import Forms from './sections/forms'

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
           return <p key={index}>I am number {number}</p>
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

class OnClickEvent extends Component{
  constructor() {
    super()
    this.state = {mouseX: 0, mouseY: 0}
  }

  handleClick(event){
    alert("Hi There!!!")
  }

  handleMouseMove(event){
    const {clientX, clientY} = event
    this.setState({mouseX: clientX, mouseY: clientY})
  }

  render(){
    return(
      <div>
        <h2>Events</h2>
        <button onClick={this.handleClick}>Hi there!</button>
        <div
          onMouseMove={this.handleMouseMove.bind(this)}
          style={{width: 250, border: '1px solid #000', marginTop: 10, padding: 10}}
        >
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      </div>
    )
  }
}

class ChildrenBox extends Component {
  render(){
    return(
      <div style={{border: '1px solid #09f', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  render(){
    return(
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por {this.props.author}</em></p>
        <date>{this.props.date}</date>
        <article>{this.props.children}</article>
      </section>
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
        <OnClickEvent/>

        <Forms/>

        <div>
          <h2>Children Props</h2>
          <ChildrenBox>Hi, I am a Children!!!</ChildrenBox>
          <ChildrenBox>This is a other Children</ChildrenBox>

          <h2>Children Layout</h2>
          <Article
            author="Omar Montoya"
            date={new Date().toLocaleDateString()}
            title="Learning Article"
          >
            <p>Learn any programming language is very funny</p>
          </Article>
        </div>
      </header>
    </div>
  );
}

export default App;
