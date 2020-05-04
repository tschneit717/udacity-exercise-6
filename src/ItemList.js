import React, { Component } from 'react'
import Item from './Item'

class ItemList extends Component {
  render() {
    console.log(this)
    return(
      <ol className="item-list">
        {this.props.items.map((item, index) => <Item key={index} item={item}></Item>)}
      </ol>
    )
  }
}

export default ItemList