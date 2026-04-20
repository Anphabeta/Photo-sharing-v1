import React from "react";
import { Typography, Card, CardHeader, CardMedia } from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const user = useParams();
  const post = models.photoOfUserModel(user.userId);
  return (
    <>
      {post.map((item) => (
        <>
          <Card>
            <CardHeader title="Post" subheader={item.date_time} />
            <CardMedia
              component="img"
              image={require(`../../images/${item.file_name}`)}
              alt={item.file_name}
            />
          </Card>
        </>
      ))}
    </>
  );
}

export default UserPhotos;
