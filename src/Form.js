import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
  
    super(props)
  
    this.state = {
      Number:' '

       
    };
  };
  handleNumber=(event)=>{
    this.setState({
    Number:event.target.value
    })
  }
  handleSubmit=event=>{
    fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md")
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>Enter a Number</label>
        <input  type='number' value={this.state.Number} 
        onChange={this.handleNumber}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;
