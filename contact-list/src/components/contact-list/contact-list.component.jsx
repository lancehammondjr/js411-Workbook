import React from 'react';
import { Contact } from '../contact/contact.component';
import './contact-list.styles.css';



export const ContactList = props => {
    console.log(`User Information: ${props}`);
    return (
        <div className='contact-list' >
            {props.userlist.map(theuser => (
            <Contact key={theuser.login.uuid} theuser={theuser}/>
            ))}

    </div>
    )
};