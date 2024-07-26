import React, { useState } from 'react';
import EditModal from './EditModal'; // Adjust path as necessary
import CartModal from './cartmodal'; // Adjust path if necessary
import { useDispatch } from 'react-redux';
import { AddItem, DeleteItem } from '../actions'; // Adjust path as necessary

const Nav = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const dispatch = useDispatch();

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);

  const handleAddItem = (item) => {
    dispatch(AddItem(item.id, item.name, item.description, item.type, item.price, item.img));
    closeEditModal();
  };

  const handleDeleteItem = (id) => {
    dispatch(DeleteItem(id));
    closeEditModal();
  };

  return (
    <div>
      <div className="navmain">
        <div className="navleftcont">
          <img src="https://img.icons8.com/?size=100&id=6qMXiF4hK09X&format=png&color=FFFFFF" alt="" />
          <a onClick={openEditModal}><h5>BGT'S KITCHEN</h5></a>
        </div>
        <div className="navrightcont">
          <h5>Hello User!</h5>
          <a onClick={openCartModal}>
            <img src="https://img.icons8.com/?size=100&id=QVQY51sDgy1I&format=png&color=000000" alt="" />
          </a>
        </div>
      </div>
      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onAdd={handleAddItem}
        onDelete={handleDeleteItem}
        itemToEdit={itemToEdit}
        setItemToEdit={setItemToEdit}
      />
      <CartModal
        isOpen={isCartModalOpen}
        onRequestClose={closeCartModal}
      />
    </div>
  );
};

export default Nav;
