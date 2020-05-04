import React, { Component } from 'react';

class NewItem extends Component {
  
  addItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  
  inputIsEmpty = () => {
    return this.value === '';
  };

  render() {
    return(
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    )
  }
} 

export default NewItem