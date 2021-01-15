import React from 'react';
import './contact.styles.css'


export const Contact = props => (
    <div className='contact-container' >
        <img 
        alt="theuser"
        src={props.theuser.picture.thumbnail}
        />
        <h2>{props.theuser.name}</h2>
        <p> {props.theuser.email} </p>
    </div>;
    console.log(props.theuser.results)
);