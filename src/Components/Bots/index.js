import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const Bots = ({ bot }) => {

  return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={name} src={avatar}  />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={
                        {description}
                }
            />
        </ListItem>
  )
};

Bots.propTypes = {
  bot: PropTypes.object,
};

export default Bots;
