import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { contactContext } from "../../contexts/contactContext";
import ContactCard from "../Card/Card";

const List = () => {
  const { getContacts, contacts, deleteContact } = useContext(contactContext);
  const navigate = useNavigate();
  useEffect(() => {
    getContacts();
  }, []);
  console.log(contacts);
  return (
    <div>
      {contacts.map(item => (
        <ContactCard key={item.id} item={item} deleteContact={deleteContact} />
      ))}
    </div>
  );
};

export default List;
