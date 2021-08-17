import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
    return (
      
                <div className="term">
                    <dt>
                        <span className="emoji-img">{props.emoji}</span>
                        <span className="emoji-title">{props.title}</span>
                    </dt>
                    <dd className="emoji-description">{props.description}</dd>
                </div>
       
    )
}

export default Card