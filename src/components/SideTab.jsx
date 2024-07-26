import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import setFilter from '../actions';

export default function SideTab() {
    const [Items, setItems] = useState(["All","Non-Veg","Veg"]);
    const dispatch=useDispatch();
    const handleFilterChange=(fil)=>{
      dispatch(setFilter(fil));
    }
  return (
    <div>
      <div className="sidetab">
        {Items.map(item =>
        <div className='tabcont' key={item} onClick={()=>handleFilterChange(item)}>
          <p>
          {item}
          </p>
          </div>
          )}
        </div>
    </div>
  )
}
