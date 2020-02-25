import React from 'react';
import './component.css';

const Bcomponent = (props) => {
    return (
        <div className="bcomponent">
           <span className="name-component">{props.name}</span> 
        </div>
    );
};

export default Bcomponent;