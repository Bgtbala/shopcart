import React from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../actions'; // Ensure this path is correct

// Set the app element for accessibility
Modal.setAppElement('#root');

const CartModal = ({ isOpen, onRequestClose }) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalquantval=cart.reduce((total,item)=>total+item.quantity,0);
  const totalpriceval=cart.reduce((total,item)=>total+(item.price*item.quantity),0);


  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cart Modal"
      className="modal-content" // Ensure this matches the CSS class
      overlayClassName="modal-overlay" // Ensure this matches the CSS class
    >
      <button className="modal-close-button" onClick={onRequestClose}>
        <img src="https://img.icons8.com/material-outlined/24/close-window.png" alt="Close" />
      </button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px',fontSize:"20px"}}>
              <img src={item.img} alt={item.name} style={{ width: 50, height: 50, marginRight: '10px' }} />
              <div style={{ flexGrow: 1 }}>
                <p style={{ margin: 0 }}>{item.name}</p>
                <p style={{ margin: 0 }}>Quantity: {item.quantity}</p>
                <p style={{ margin: 0 }}>Price: {item.price}</p>
              </div>
              <button onClick={() => handleRemove(item.id)} className='remove-button-but'>
                <img src='https://cdn-icons-png.flaticon.com/128/6932/6932392.png' className='remove-button'/>
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className='totalcont'>
            <p className='totalquant'> 
              Total items : {totalquantval}
            </p>
            <p className='totalprice'>
              Total Price : {totalpriceval}
            </p>
      </div>

      <button onClick={onRequestClose} style={{ marginTop: '20px' }} className='modal-close-button-botmain'>
        Close
        </button>
    </Modal>
  );
};

export default CartModal;
