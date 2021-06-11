import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    paddingBottom: 0,
  },

  title: {
    fontSize: 14,
  },
});

export default function User_Card(props) {
  // destruture the props from App.js
  let users = props.users;
  let handleUser = props.handleUser;

  const classes = useStyles();

  // users card stored in usersView and appply map to display each user
  const usersView = users.map((user) => {
    // callback to show user details when clicked
    const handleUserClick = (e) => {
      handleUser(e, user);
      return;
    };
    const userName =
      user.name.title + "." + " " + user.name.first + " " + user.name.last;
    return (
      <div>
        <div>
          <Card className="card_container" onClick={handleUserClick}>
            <div className="flex margin">
              <Typography>
                <div className="card_gender padding">
                  {user.gender} . {user.nat}
                </div>
              </Typography>
              <Typography>
                <div className="card_title padding">{userName}</div>
              </Typography>
              <Typography>
                <div className="card_email padding">{user.email}</div>
              </Typography>
            </div>
          </Card>
        </div>
      </div>
    );
  });
  return usersView;
}
