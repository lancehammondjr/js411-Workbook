import React from 'react';
import { Contact } from "../contact/contact.component";
import './contact-list.styles.css';



export const ContactList = props => {
    console.log(props);
    return <div className='contact-list' >
        {props.userlist.map(theuser => (
            <Contact theuser={theuser}/>
        ))}

    </div>;
};