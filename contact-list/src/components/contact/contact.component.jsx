import React from 'react';
import './contact.styles.css'


export const Contact = props => (

    <div className='contact-container' >
        <img className="picture-container"
        alt="theuser"
        src={props.theuser.picture.large}
        />
        <h2>{props.theuser.name.first} {props.theuser.name.last}</h2>
        <p> {props.theuser.email} </p>
        <button className='button-container' >Hide Info</button>
    </div>
);