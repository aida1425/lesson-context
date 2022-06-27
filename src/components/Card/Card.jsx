import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contactContext } from "../../contexts/contactContext";
import { useNavigate } from "react-router-dom";

export default function ContactCard({ item }) {
  const { deleteContact } = React.useContext(contactContext);
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardMedia
        component="img"
        height="300px"
        image={
          "data:image/png;base64,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"
        }
        alt="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.surname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteContact(item.id)}>
          Delete
        </Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
        <Button size="small" onClick={() => navigate(`/details/${item.id}`)}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
