import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "./Contacts.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className="contacts">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
