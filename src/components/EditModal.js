import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddItem, DeleteItem } from '../actions';

const Modal = ({ isOpen, onClose }) => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemType, setItemType] = useState('Veg');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImg, setItemImg] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [mode, setMode] = useState('add'); // 'add' or 'delete'

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(AddItem(itemName, itemDescription, itemType, itemPrice, itemImg));
    onClose(); // Close modal after action
  };

  const handleDeleteItem = () => {
    dispatch(DeleteItem(deleteId));
    onClose(); // Close modal after action
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose} aria-label="Close modal">
          <img src="https://img.icons8.com/material-outlined/24/close-window.png" alt="Close icon" />
        </button>
        <div className="modal-body">
          {/* Mode Switch Buttons */}
          <div className="modal-mode-switch">
            <button onClick={() => setMode('add')} className={mode === 'add' ? 'active' : ''}>Add Item</button>
            <button onClick={() => setMode('delete')} className={mode === 'delete' ? 'active' : ''}>Delete Item</button>
          </div>

          {/* Conditionally Render Add or Delete Form */}
          {mode === 'add' ? (
            <div className="modal-section">
              <h2>Add Item</h2>
              <input
                type="text"
                placeholder="Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Description"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
              />
              <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
              <input
                type="number"
                placeholder="Price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={itemImg}
                onChange={(e) => setItemImg(e.target.value)}
              />
              <button onClick={handleAddItem}>Add Item</button>
            </div>
          ) : (
            <div className="modal-section">
              <h2>Delete Item</h2>
              <input
                type="text"
                placeholder="Item ID"
                value={deleteId}
                onChange={(e) => setDeleteId(e.target.value)}
              />
              <button onClick={handleDeleteItem}>Delete Item</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
