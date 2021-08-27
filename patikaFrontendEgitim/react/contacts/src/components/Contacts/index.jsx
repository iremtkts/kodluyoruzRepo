import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import "./style.css"



function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: 'İrem',
            phone_number: "1717177"
        },
        {
            fullname: 'Betül',
            phone_number: "25252525"
        },
        {
            fullname: 'Pelda',
            phone_number: "36636636"
        },
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts]);
    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
}

export default Contacts
