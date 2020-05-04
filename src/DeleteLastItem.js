import React from 'react';

const DeleteItem = props => {
  const handleDeleteLastItem = event => {
    props.onDeleteLastItem();
  };  
  return(
    <button onClick={handleDeleteLastItem} disabled={props.disabled}>
      Delete Last Item
    </button>
  )
}

export default DeleteItem