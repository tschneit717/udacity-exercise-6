import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewItem from './CreateNewItem';
import DeleteItem from './DeleteLastItem';
import ItemList from './ItemList'
class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  
  handleAddItem = item => {
    this.setState( prevState => ({ items: [...prevState.items, item] }) )
  }
  
  handleDeleteItem = event => {
    this.setState( prevState => ({ items: this.state.items.slice(0, -1) }));
  }

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>

        <NewItem 
          onAddItem={this.handleAddItem}>
        </NewItem>
        <DeleteItem 
          disabled={this.noItemsFound()} 
          onDeleteLastItem={this.handleDeleteItem}>
        </DeleteItem>

        <p className="items">Items</p>
        <ItemList items={this.state.items}></ItemList>
      </div>
    );
  }
}

export default App;
