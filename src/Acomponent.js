import React, {useEffect, useState} from 'react';
import './component.css';

const Acomponent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            console.log("triggerd");
            setData([
                {label: 'a', value: 'a'},
                {label: 'b', value: 'b'},
                {label: 'c', value: 'cgg'},{label: 'd', value: 'd'}
            ]);
        }, 2000)
    }, []);
    return (
        <div className="acomponent">
            <select>
               {data.map((_data) => {
                   return <option value={_data.value}>{_data.label}</option>
               })}
            </select>
        </div>
    );
};

export default Acomponent;