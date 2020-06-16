import React, {Component} from 'react'

class Forms extends Component {

  constructor(){
    super();
    this.state = {
      inputName: '',
      inputTwitter: '',
      inputTerms: true
    }
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state);
  }

  handleChange = (event) => {
    console.log("handleChange")
    console.log(event.target.checked)
    this.setState({inputTerms: event.target.checked})
  }

  render(){
      return(
          <div>
            <h2>First Form</h2>
            <form onSubmit={this.handleSubmit}>
              <p>
                <label htmlFor="name">Name: </label>
                <input 
                  id="name"
                  type="text"
                  name="userName"
                  placeholder="Your name"
                  onChange={(event) => this.setState({inputName: event.target.value})}
                />
              </p>

              <p>
                <label htmlFor="twitter">Twitter Account: </label>
                <input
                  id="twitter"
                  type="text"
                  name="twitterAccount"
                  placeholder="Your Twitter Account"
                  onChange={(event) => this.setState({inputTwitter: event.target.value})}
                />
              </p>

              <p>
                <label>
                  <input
                    checked={this.state.inputTerms}
                    type="checkbox"
                    onChange={this.handleChange}
                  />
                Accepted Terms
                </label>
              </p>

              <button
                style={{borderRadius: 45, paddingTop: 5, paddingBottom: 5, paddingLeft: 30, paddingRight: 30}}
              >
                Send
              </button>
              
            </form>
          </div>
      )
  }

}

export default Forms