import './App.css'
import { useState } from 'react'
import  ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContacts'
// import selectedContact from "./components/contactRow.jsx"

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
   return (
     <>
    {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectectedContactId={setSelectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} 
      
        />
      )}
     </>
   ); 
 }


