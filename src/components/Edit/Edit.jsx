import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../../contexts/contactContext";
import "./Edit.css";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneContact, oneContact, updateContact } =
    useContext(contactContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  // console.log(getOneTodo);
  useEffect(() => {
    getOneContact(id);
  }, []);
  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setPhone(oneContact.phone);
    }
  }, [oneContact]);
  function handleSave() {
    let editedContact = {
      name,
      surname,
      phone,
    };
    updateContact(id, editedContact);
    navigate("/list");
    console.log(editedContact);
  }
  // console.log(oneContact);
  return (
    <Container maxWidth="sm">
      {oneContact ? (
        <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
          <Typography>Edit Contact</Typography>

          <TextField
            value={name}
            onChange={e => setName(e.target.value)}
            label=""
            variant="outlined"
          />
          <TextField
            value={surname}
            onChange={e => setSurname(e.target.value)}
            label=""
            variant="outlined"
          />
          <TextField
            value={phone}
            onChange={e => setPhone(e.target.value)}
            label=""
            variant="outlined"
          />
          <Button onClick={handleSave} variant="outlined">
            Save
          </Button>
        </Box>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default Edit;
