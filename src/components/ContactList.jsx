import React, { useEffect, useState } from 'react';
import ContactRow from './ContactRow';

//at the end of workshop but i keep getting selectedContactId is not defined on line 13

export default function ContactList({ setSelectedContactId, selectedContactId }) {
  const [contacts, setContacts] = useState([]); // Initialize with an empty array

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`) // Corrected API URL
        ;
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
console.log(contacts)
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            setSelectedContactId={setSelectedContactId} // Pass setSelectedContactId to ContactRow
          />
        ))}
      </tbody>
    </table>
  );
}






