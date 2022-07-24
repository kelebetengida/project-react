import React, {useState} from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
    const [contact, setContact]= useState([]);
    const addContactHandler=(contacts)=>{
        console.log(contacts);
        setContact([...contact,contacts]);
    }
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contact={contact}/>

    </div>
  );
}
export default App;
