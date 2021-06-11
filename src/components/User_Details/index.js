import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

export default function User_Details(props) {
  // destruture the props from App.js

  let user = props.user;
  // since the username is in three parts that's i add then to make full name
  const userName =
    user.name.title + "." + " " + user.name.first + " " + user.name.last;
  return (
    <div className="details">
      <Card className="card_container details_container flex_row flex_column">
        <div>
          <img className="medium_image" src={user.picture.medium} />
        </div>
        <div className="flex margin">
          <Typography>
            <p className="card_title heading_h1 padding">{userName}</p>
          </Typography>
          <Typography>
            <div className="card_gender card_address padding">
              <span className="span1">{user.location.street.number},</span>
              <span className="span2">{user.location.street.name},</span>
              <span className="span2">{user.location.city},</span>
              <span className="span2">{user.location.state},</span>
              <span className="span3 span2">{user.location.country},</span>
              <span className="span2">{user.location.postcode},</span>
              <br />
              <span className="span2">{user.location.timezone.offset},</span>
              <span className="span2">
                {user.location.timezone.description}.
              </span>
            </div>
          </Typography>
          <Typography>
            <div className="card_gender">{user.gender}</div>
          </Typography>
        </div>
      </Card>
    </div>
  );
}
