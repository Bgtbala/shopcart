import React from 'react';



export function AddItem(name,description,type,price,img) {
  return ({
    type:'AddItem',
    payload:{
        id:name,
        name,
        description,
        type,
        price,
        img
    }
  }
  )
}

export function DeleteItem(id) {
  return (
    {
        type:"DeleteItem",
        payload:{id}
    }
  )
}

export const AddCart = (itemId, quantity) => {
  if (!itemId) {
      console.error('AddCart called with undefined itemId');
      return;
  }
  console.log('Dispatching AddCart with itemId:', itemId, 'and quantity:', quantity);
  return {
      type: 'AddCart',
      payload: {
          id: itemId,
          quantity
      }
  };
};



export const removeCart = (id) => ({
  type: 'RemoveCart',
  payload: { id }
});


export default function setFilter(filter) {
  return (
    {
      type:'SET_FILTER',
      payload:filter
    }
  )
}

