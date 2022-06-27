import React, { useReducer } from "react";
import axios from "axios";

export const contactContext = React.createContext();

const INIT_STATE = {
  contacts: [],
  oneContact: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "GET_ONE_CONTACT":
      return { ...state, oneContact: action.payload };
    default:
      return state;
  }
}

const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const API = "http://localhost:8000/contacts";

  async function createContact(newContact) {
    await axios.post(API, newContact);
  }
  async function getContacts() {
    let res = await axios(API);
    dispatch({
      type: "GET_CONTACTS",
      payload: res.data,
    });
    // console.log(res);
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  async function getOneContact(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_CONTACT",
      payload: res.data,
    });
    // console.log(res);
  }

  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }
  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        oneContact: state.oneContact,
        createContact,
        getContacts,
        deleteContact,
        getOneContact,
        updateContact,
      }}>
      {children}
    </contactContext.Provider>
  );
};

export default ContactContextProvider;
