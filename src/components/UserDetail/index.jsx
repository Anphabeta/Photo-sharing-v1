import React from "react";
import {Typography, Button} from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const user = useParams();
  const info = models.userModel(user.userId);
  return (
    <>
      <Typography variant="h3">
        {info.first_name} {info.last_name}
      </Typography>
      <Typography variant="h4">Location: {info.location}</Typography>
      <Typography variant="h4">Ocupation: {info.occupation}</Typography>
      <Typography variant="h4">Description: {info.description}</Typography>
      <Button component={Link} to={`/photos/${user.userId}`}>
        See posts
      </Button>
    </>
  );
}

export default UserDetail;
