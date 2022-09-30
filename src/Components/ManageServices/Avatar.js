import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../img/myanmar.png"

const styles = {
  title: {
    fontSize: 15
  }
};

function SimpleCard(props) {
  const {classes} = props;
  return (
    <CardContent style={{display: "flex"}}>
      <Avatar
        alt="Daniel Di Salvo"
        src={avatar}
        className={classes.bigAvatar}
      />
      <div style={{paddingLeft: 12}}>
        <Typography style={{fontSize: 16,}}>
          Yohawn Kim
        </Typography>
        <Typography className={classes.pos} style={{fontSize: 16, color: "#747474",}}>
          Researcher at Gene on Biotech, South Korea
        </Typography>
      </div>

    </CardContent>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
