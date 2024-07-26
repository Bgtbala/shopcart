import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import Counter from './counter'; // Ensure this path is correct

export default function MainContent() {
    const items = useSelector(state => state.items);
    const filter = useSelector(state => state.filter);
    const [sortedItems, setSortedItems] = useState(items);

    const filteredItems = items.filter(item => 
        filter === "All" || item.type === filter
    );

    const getFilteredItems = () => {
        return items.filter(item => 
            filter === "All" || item.type === filter
        );
    };

    const sortName = () => {
        console.log("Function sortName is called");
        const filtered = getFilteredItems();
        const sorted = [...filtered].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
        setSortedItems(sorted);
    };

    // Function to sort by price
    const sortPrice = () => {   
        console.log("Function sortPrice is called");
        const filtered = getFilteredItems();
        const sorted = [...filtered].sort((a, b) => {
            if (a.price === b.price) {
                return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
            }
            return a.price - b.price;
        });
        setSortedItems(sorted);
    };

    useEffect(() => {
        setSortedItems(getFilteredItems());
    }, [items, filter]);
    

    return (
        <div className="main-content">
            <h1>Menu</h1>
            <div className="sort-main">
                <p>Sort by : </p>
                    <button onClick={sortName}>Name</button>
                    <button onClick={sortPrice}>Price</button>
            </div>
            <div className="items-container">
                {sortedItems.map(item => (
                    <div key={item.id} className="item-card">
                        <img 
                            src={item.img || 'https://via.placeholder.com/300x200'} 
                            alt={item.name || 'Item imprice'} 
                            className="card-img"
                        />
                        <div className="item-content">
                            <h5>{item.name || 'No name'}</h5>
                            <p><i>{item.type || 'No type'}</i></p>
                            <p>{item.description || 'No description'}</p>
                            <p><b>Rs. {item.price || '0'}</b></p>
                        </div>
                        <div className="count-bot">
                            <Counter itemId={item.id} /> {/* Pass itemId to Counter */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
