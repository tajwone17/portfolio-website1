import React from 'react';
import './FloatingDiv.css';
const FloatingDiv = (props) => {
    return (
       <div className="floating">
        <img src={props.image} alt="" />
        <p>
            {props.txt1}
            <br />
            {props.txt2}
        </p>
       </div>
    );
};

export default FloatingDiv;