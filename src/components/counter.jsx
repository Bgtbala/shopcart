import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../actions'; // Ensure this path is correct

const Counter = ({ itemId }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.find(item => item.id === itemId));
    const initialCount = cartItem ? cartItem.quantity : 0;
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        dispatch(AddCart(itemId, newCount));
    };

    const decrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            dispatch(AddCart(itemId, newCount));
        }
    };

    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <span className="counter-value">{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Counter;
