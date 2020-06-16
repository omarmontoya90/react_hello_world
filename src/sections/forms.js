import React, {Component} from 'react'

class Forms extends Component {
  handleClick(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const twitterAccount = document.getElementById("twitter").value;
    console.log({name, twitterAccount});
  }

  handleChange (event) {
    console.log("handleChange")
    console.log(event.target.checked)
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
                />
              </p>
              <p>
                <label htmlFor="twitter">Twitter Account: </label>
                <input
                  id="twitter"
                  type="text"
                  name="twitterAccount"
                  placeholder="Your Twitter Account"
                />
              </p>

              <p>
                <label>
                  <input
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