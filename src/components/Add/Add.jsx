import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contactContext } from "../../contexts/contactContext";
import "./Add.css";

const Add = () => {
  const { createContact } = useContext(contactContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  function handleSave() {
    let newContact = {
      name,
      surname,
      phone,
    };
    if (!name.trim() || !surname.trim() || !phone.trim()) {
      alert("zapolnite");
    } else {
      createContact(newContact);
      navigate("/list");
    }

    // createContact(newContact);
    // navigate("/list");
    // console.log(newContact);
  }
  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
        <Typography>Add New Contact</Typography>
        <TextField
          className="inp"
          value={name}
          onChange={e => setName(e.target.value)}
          label="Name"
          variant="outlined"
        />
        <TextField
          className="inp"
          value={surname}
          onChange={e => setSurname(e.target.value)}
          label="Surname"
          variant="outlined"
        />
        <TextField
          className="inp"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          label="Phone Number"
          variant="outlined"
        />

        <Button onClick={() => handleSave()} variant="contained">
          Add Contact
        </Button>
      </Box>
    </Container>
  );
};

export default Add;
