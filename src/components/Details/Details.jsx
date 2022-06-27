import { Box, Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { contactContext } from "../../contexts/contactContext";
import Loader from "../Loader/Loader";

const Details = () => {
  const { id } = useParams();
  const { getOneContact, oneContact } = useContext(contactContext);
  useEffect(() => {
    getOneContact(id);
  }, []);
  console.log(oneContact);
  return (
    <Container>
      {oneContact ? (
        <Box
          marginTop={"20px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}>
          <Typography variant="h5">{oneContact.name}</Typography>
          <Typography variant="h5">{oneContact.surname}</Typography>
          <Typography variant="h5">{oneContact.phone}</Typography>
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Details;
