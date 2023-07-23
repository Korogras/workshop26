import { useState } from 'react'
import './App.css'
import  ContactList from './components/contactList.jsx'
import  dummyContacts from './components/contactList.jsx'

 function App() {
  const [contacts, setContacts] = useState(dummyContacts)
  console.log("contacts: ", contacts)
  return (
   <>
   <ContactList />
   </> 
  )
  }

export default App
